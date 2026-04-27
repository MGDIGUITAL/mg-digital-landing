export default function ERPModulesSection() {
  return (
    <section className="erp-section" id="erp">
      <div className="erp-eyebrow">Sistema ERP</div>
      <div className="erp-title">Módulos Principales</div>
      <div className="erp-grid">
        <div className="erp-mod">
          <div className="em-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></div>
          <h4>Dashboard</h4><p>Resumen general en tiempo real</p>
        </div>
        <div className="erp-mod">
          <div className="em-icon"><svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
          <h4>Ventas</h4><p>Cotizaciones y boletas electrónicas</p>
        </div>
        <div className="erp-mod">
          <div className="em-icon"><svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>
          <h4>Compras</h4><p>Órdenes a proveedores y recepciones</p>
        </div>
        <div className="erp-mod">
          <div className="em-icon"><svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
          <h4>Inventario</h4><p>Control de stock y bodegas</p>
        </div>
        <div className="erp-mod">
          <div className="em-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
          <h4>Clientes</h4><p>Gestión y segmentación avanzada</p>
        </div>
        <div className="erp-mod">
          <div className="em-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
          <h4>Proveedores</h4><p>Gestión, evaluaciones y pagos</p>
        </div>
        <div className="erp-mod">
          <div className="em-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          <h4>Contabilidad</h4><p>Ingresos, egresos y conciliaciones</p>
        </div>
        <div className="erp-mod">
          <div className="em-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
          <h4>Reportes</h4><p>Análisis para mejores decisiones</p>
        </div>
      </div>
    </section>
  )
}
