export default function PortfolioSection() {
  return (
    <section className="trabajos" id="trabajos">
      <div className="section-head">
        <div className="sec-eyebrow">Nuestros Trabajos</div>
        <h2 className="sec-title">Proyectos que generan resultados reales</h2>
      </div>
      <div className="trab-grid">
        <div className="trab-arrow left">
          <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </div>
        <div className="trab-card">
          <div className="trab-img web">
            <svg width="64" height="48" viewBox="0 0 64 48" fill="none"><rect x="4" y="4" width="56" height="40" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/><rect x="4" y="4" width="56" height="10" rx="4" fill="#bfdbfe"/><circle cx="11" cy="9" r="2" fill="#ef4444"/><circle cx="18" cy="9" r="2" fill="#f59e0b"/><circle cx="25" cy="9" r="2" fill="#22c55e"/><rect x="10" y="20" width="20" height="3" rx="1.5" fill="#93c5fd"/><rect x="10" y="26" width="30" height="2" rx="1" fill="#bfdbfe"/><rect x="10" y="31" width="24" height="2" rx="1" fill="#bfdbfe"/><rect x="36" y="20" width="18" height="16" rx="2" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1"/></svg>
          </div>
          <div className="trab-info">
            <h4>Sitio Web Corporativo</h4>
            <p>Diseño moderno y responsivo</p>
          </div>
        </div>
        <div className="trab-card">
          <div className="trab-img erp">
            <svg width="64" height="48" viewBox="0 0 64 48" fill="none"><rect x="4" y="4" width="56" height="40" rx="4" fill="#0f2340"/><rect x="4" y="4" width="14" height="40" rx="4" fill="#0a1a2e"/><rect x="6" y="8" width="10" height="6" rx="2" fill="#1a56db"/><rect x="6" y="17" width="10" height="4" rx="1" fill="#1a3a6b"/><rect x="6" y="24" width="10" height="4" rx="1" fill="#1a3a6b"/><rect x="6" y="31" width="10" height="4" rx="1" fill="#1a3a6b"/><rect x="22" y="8" width="34" height="8" rx="2" fill="#1a3a6b"/><rect x="22" y="20" width="15" height="10" rx="2" fill="#1a3a6b"/><rect x="40" y="20" width="16" height="10" rx="2" fill="#1a3a6b"/><rect x="22" y="33" width="34" height="6" rx="2" fill="#1a3a6b"/><rect x="24" y="22" width="6" height="6" rx="1" fill="#3b82f6"/><rect x="32" y="23" width="4" height="5" rx="1" fill="#60a5fa"/></svg>
          </div>
          <div className="trab-info">
            <h4>Sistema ERP</h4>
            <p>Gestión integral de tu empresa</p>
          </div>
        </div>
        <div className="trab-card">
          <div className="trab-img crm">
            <svg width="64" height="48" viewBox="0 0 64 48" fill="none"><rect x="4" y="4" width="56" height="40" rx="4" fill="#1a3a5f"/><rect x="8" y="8" width="20" height="32" rx="3" fill="#0f2340"/><rect x="10" y="10" width="16" height="10" rx="2" fill="#1a56db" opacity=".5"/><rect x="10" y="23" width="16" height="4" rx="1" fill="#1a56db" opacity=".4"/><rect x="10" y="29" width="12" height="3" rx="1" fill="#1a56db" opacity=".3"/><rect x="31" y="8" width="26" height="14" rx="3" fill="#0f2340"/><rect x="33" y="10" width="10" height="10" rx="2" fill="#1a56db" opacity=".4"/><rect x="45" y="10" width="10" height="10" rx="2" fill="#1a56db" opacity=".4"/><rect x="31" y="25" width="26" height="15" rx="3" fill="#0f2340"/><rect x="33" y="27" width="22" height="3" rx="1" fill="#3b82f6" opacity=".5"/><rect x="33" y="32" width="16" height="2" rx="1" fill="#3b82f6" opacity=".3"/></svg>
          </div>
          <div className="trab-info">
            <h4>Plataforma CRM</h4>
            <p>Tus clientes, siempre conectados</p>
          </div>
        </div>
        <div className="trab-card">
          <div className="trab-img folio">
            <svg width="64" height="48" viewBox="0 0 64 48" fill="none"><rect x="4" y="4" width="56" height="40" rx="4" fill="#111827"/><rect x="8" y="8" width="22" height="32" rx="3" fill="#1f2937"/><rect x="10" y="12" width="18" height="2" rx="1" fill="#374151"/><rect x="10" y="16" width="14" height="2" rx="1" fill="#374151"/><rect x="10" y="20" width="16" height="2" rx="1" fill="#374151"/><rect x="10" y="24" width="12" height="2" rx="1" fill="#374151"/><rect x="10" y="28" width="15" height="2" rx="1" fill="#374151"/><rect x="32" y="8" width="26" height="32" rx="3" fill="#1f2937"/><rect x="34" y="12" width="10" height="3" rx="1" fill="#3b82f6" opacity=".6"/><rect x="34" y="18" width="20" height="2" rx="1" fill="#4b5563"/><rect x="34" y="22" width="16" height="2" rx="1" fill="#4b5563"/><rect x="34" y="26" width="18" height="2" rx="1" fill="#4b5563"/><rect x="34" y="32" width="14" height="5" rx="2" fill="#1a56db" opacity=".7"/></svg>
          </div>
          <div className="trab-info">
            <h4>Sistema de Folios</h4>
            <p>Digitalización y control total</p>
          </div>
        </div>
        <div className="trab-arrow right">
          <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>
    </section>
  )
}
