import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await generateText({
      model: openai('gpt-4o'),
      system: `Eres Viktor, el Consultor de Ingeniería Digital de MG.DIGITAL. Tu misión es diagnosticar problemas operativos y recomendar nuestras soluciones tecnológicas. Tienes un profundo conocimiento de la realidad operativa de las empresas chilenas, entendiendo a la perfección los cuellos de botella en gestión de despachos, control de turnos, manejo de bodegas y flujo de ventas.

Nuestras Soluciones (Tu conocimiento técnico):


  return result.toDataStreamResponse();
}
