export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-tag">
          <div className="hero-tag-dot"></div>
          Soluciones Digitales a Tu Medida
        </div>
        <h1>Soluciones digitales<br/>que <em>impulsan</em><br/>tu negocio</h1>
        <p className="hero-desc">Desarrollamos sistemas web, ERP, CRM y plataformas personalizadas para ayudar a tu empresa a crecer y ser más eficiente.</p>
        <div className="hero-btns">
          <a href="#servicios" className="btn-blue">
            Conoce nuestros servicios
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="https://wa.me/56929645522" className="btn-ghost">
            Solicitar asesoría
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </a>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <div className="trust-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div className="trust-txt"><strong>Seguridad</strong><span>y Confidencialidad</span></div>
          </div>
          <div className="trust-item">
            <div className="trust-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
            </div>
            <div className="trust-txt"><strong>Tecnología</strong><span>de Vanguardia</span></div>
          </div>
          <div className="trust-item">
            <div className="trust-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.15-.28"/></svg>
            </div>
            <div className="trust-txt"><strong>Soporte</strong><span>y Acompañamiento</span></div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="laptop-scene">
          <div className="laptop-3d">
            <div className="fl-card fl1">
              <div className="fl-label">Sistema activo</div>
              <div className="fl-val"><span className="fl-dot"></span>99.9% Uptime</div>
            </div>
            <div className="fl-card fl2">
              <div className="fl-label">CRM activo</div>
              <div className="fl-val">2,350 clientes <span className="fl-badge">↑ 15.4%</span></div>
            </div>
            <div className="laptop-lid">
              <div className="laptop-lid-inner">
                <div className="screen-ui">
                  <div className="screen-bar">
                    <div className="s-dot" style={{background:'#ef4444'}}></div>
                    <div className="s-dot" style={{background:'#f59e0b'}}></div>
                    <div className="s-dot" style={{background:'#22c55e'}}></div>
                    <span className="screen-brand">MG.DIGUITAL</span>
                    <div className="screen-tabs">
                      <span className="act">Dashboard</span><span>Ventas</span><span>Clientes</span><span>Reportes</span>
                    </div>
                  </div>
                  <div className="screen-body">
                    <div className="screen-side">
                      <div className="s-icon on"><div style={{width:'9px',height:'7px',background:'#fff',borderRadius:'1px'}}></div></div>
                      <div className="s-icon"><div className="s-icon-dot"></div></div>
                      <div className="s-icon"><div className="s-icon-dot"></div></div>
                      <div className="s-icon"><div className="s-icon-dot"></div></div>
                      <div style={{flex:1}}></div>
                      <div className="s-icon-dot on"></div>
                    </div>
                    <div className="screen-main">
                      <div className="sc-title">Dashboard — Resumen del mes</div>
                      <div className="sc-metrics">
                        <div className="sc-m"><div className="sc-m-lbl">Ventas</div><div className="sc-m-val">$25.6M</div><div className="sc-m-chg">↑ 12.3%</div></div>
                        <div className="sc-m"><div className="sc-m-lbl">Órdenes</div><div className="sc-m-val">152</div><div className="sc-m-chg">↑ 8.2%</div></div>
                        <div className="sc-m"><div className="sc-m-lbl">Clientes</div><div className="sc-m-val">2.350</div><div className="sc-m-chg">↑ 15.4%</div></div>
                        <div className="sc-m"><div className="sc-m-lbl">Productos</div><div className="sc-m-val">320</div><div className="sc-m-chg">↑ 4.7%</div></div>
                      </div>
                      <div className="sc-chart">
                        <div className="sc-chart-lbl">Ventas mensuales</div>
                        <div className="chart-bars-wrap" id="cb">
                          {[30,45,55,40,68,75,58,82,70,88,80,95].map((h, i) => (
                            <div key={i} className="cb" style={{height: `${h}%`, animationDelay: `${i*0.07}s`}}></div>
                          ))}
                        </div>
                      </div>
                      <div className="sc-table" id="topProd">
                        {[['Producto A',85,'$4.300.000'],['Producto B',70,'$3.150.000'],['Producto C',55,'$2.890.000']].map(([n,w,v]) => (
                          <div key={n as string} className="sc-tr"><div className="sc-td-lbl">{n}</div><div className="sc-td-bar"><span style={{width:`${w}%`}}></span></div><div className="sc-td-val">{v}</div></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-hinge"></div>
            <div className="laptop-base"></div>
            <div className="laptop-shadow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
