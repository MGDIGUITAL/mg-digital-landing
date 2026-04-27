export default function ServicesSection() {
  return (
    <section className="servicios" id="servicios">
      <div className="section-head">
        <div className="sec-eyebrow">Nuestros Servicios</div>
        <h2 className="sec-title">Soluciones digitales completas</h2>
        <p className="sec-sub">para cada necesidad de tu negocio</p>
      </div>
      <div className="serv-grid">
        <div className="serv-item">
          <div className="si-icon-wrap">
            <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h3>Páginas Web</h3>
          <p>Diseñamos sitios web modernos, responsivos y enfocados en convertir visitas en clientes.</p>
        </div>
        <div className="serv-item">
          <div className="si-icon-wrap">
            <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </div>
          <h3>Sistemas ERP</h3>
          <p>Desarrollamos ERP personalizados para optimizar y automatizar los procesos de tu empresa.</p>
        </div>
        <div className="serv-item">
          <div className="si-icon-wrap">
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3>CRM</h3>
          <p>Creamos soluciones CRM a medida para gestionar tus clientes y aumentar tus ventas.</p>
        </div>
        <div className="serv-item">
          <div className="si-icon-wrap">
            <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <h3>Más Folios</h3>
          <p>Digitaliza y organiza tus documentos con sistemas de folios electrónicos seguros.</p>
        </div>
        <div className="serv-item">
          <div className="si-icon-wrap">
            <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <h3>Todo Digital</h3>
          <p>Soluciones 100% digitales para llevar tu negocio al siguiente nivel de eficiencia.</p>
        </div>
        <div className="serv-item">
          <div className="si-icon-wrap">
            <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          </div>
          <h3>Aplicaciones</h3>
          <p>Desarrollamos aplicaciones móviles a medida para iOS y Android de alta calidad.</p>
        </div>
      </div>
    </section>
  )
}
