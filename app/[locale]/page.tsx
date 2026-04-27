import { getTranslations } from 'next-intl/server';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  return (
    <div style={{ background: '#000', color: '#fff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div>
        <h1 style={{ color: '#C5FF00' }}>MG DIGITAL - TEST MODE</h1>
        <p>Locale: {locale}</p>
        <p>Translation Test: {t('headline')}</p>
        <hr style={{ borderColor: '#333', margin: '20px 0' }} />
        <p style={{ color: '#666' }}>Si ves esto, la infraestructura está bien. El error está en los componentes.</p>
      </div>
    </div>
  );
}
