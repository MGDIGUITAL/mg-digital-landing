export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="ft-logo-main">MG.<span>DIGUITAL</span></div>
          <p className="ft-desc">Combinamos creatividad, tecnología y estrategia para entregar soluciones digitales que generan resultados reales.</p>
          <div className="ft-socials">
            <a href="#" className="ft-soc">f</a>
            <a href="#" className="ft-soc">ig</a>
            <a href="#" className="ft-soc">in</a>
          </div>
        </div>
        <div className="ft-col">
          <h5>Plataforma</h5>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#erp">Sistemas</a></li>
            <li><a href="#erp">ERP</a></li>
            <li><a href="#trabajos">Proyectos</a></li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Servicios</h5>
          <ul>
            <li><a href="#">Páginas Web</a></li>
            <li><a href="#">Sistemas ERP</a></li>
            <li><a href="#">CRM</a></li>
            <li><a href="#">Más Folios</a></li>
            <li><a href="#">Aplicaciones</a></li>
          </ul>
        </div>
        <div>
          <div className="ft-cta">
            <h4>¿Listo para digitalizar tu negocio?</h4>
            <p>Contáctanos y llevemos tu empresa al siguiente nivel.</p>
            <a href="https://wa.me/56929645522">
              Hablemos de tu proyecto
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="ft-features">
        <div className="ft-feat">
          <div className="ft-feat-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M2 12h3M19 12h3M12 2v3M12 19v3"/></svg></div>
          <div className="ft-feat-txt"><strong>Soluciones Personalizadas</strong><span>Adaptadas a tu negocio</span></div>
        </div>
        <div className="ft-feat">
          <div className="ft-feat-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
          <div className="ft-feat-txt"><strong>Tecnología de Vanguardia</strong><span>Stack moderno y escalable</span></div>
        </div>
        <div className="ft-feat">
          <div className="ft-feat-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <div className="ft-feat-txt"><strong>Seguridad y Confidencialidad</strong><span>Datos siempre protegidos</span></div>
        </div>
        <div className="ft-feat">
          <div className="ft-feat-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12"/></svg></div>
          <div className="ft-feat-txt"><strong>Soporte y Acompañamiento</strong><span>24/7 siempre disponibles</span></div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 MG.DIGUITAL. Todos los derechos reservados.</p>
        <div className="footer-contact">
          <a href="mailto:hola@mgdigital.cl">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            hola@mgdigital.cl
          </a>
          <a href="https://wa.me/56929645522">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.15-.28"/></svg>
            +56 9 2964 5522
          </a>
          <a href="#">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            www.mgdigital.cl
          </a>
        </div>
      </div>
    </footer>
  )
}
