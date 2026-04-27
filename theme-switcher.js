const fs = require('fs');
const path = require('path');

const directory = './components';
const appDirectory = './app';

const replacements = [
  { regex: /rgba\(0,\s*5,\s*13,/g, replacement: 'rgba(255, 255, 255,' },
  { regex: /rgba\(0,\s*242,\s*255,/g, replacement: 'rgba(0, 85, 204,' },
  { regex: /rgba\(255,\s*255,\s*255,/g, replacement: 'rgba(15, 23, 42,' },
  { regex: /rgba\(5,\s*15,\s*35,/g, replacement: 'rgba(241, 245, 249,' },
  { regex: /rgba\(5,\s*20,\s*40,/g, replacement: 'rgba(226, 232, 240,' },
  { regex: /#00f2ff/g, replacement: '#0055cc' },
  { regex: /#00050d/g, replacement: '#ffffff' },
  { regex: /#050e1a/g, replacement: '#f8fafc' },
  { regex: /#94a3b8/g, replacement: '#475569' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(directory);
processDirectory(appDirectory);
console.log('Done replacing colors for light theme.');
