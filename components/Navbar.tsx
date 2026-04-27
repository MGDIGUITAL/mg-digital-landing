export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <div className="nav-logo-main">MG.<span>DIGUITAL</span></div>
        <div className="nav-logo-sub">Soluciones Digitales a Tu Medida</div>
      </div>
      <ul className="nav-menu">
        <li><a href="#" className="active">INICIO</a></li>
        <li><a href="#servicios">SERVICIOS <span className="chevron">▾</span></a></li>
        <li><a href="#erp">SISTEMAS <span className="chevron">▾</span></a></li>
        <li><a href="#erp">ERP <span className="chevron">▾</span></a></li>
        <li><a href="#">FOLIOS <span className="chevron">▾</span></a></li>
        <li><a href="#">NOSOTROS</a></li>
        <li><a href="#">CONTACTO</a></li>
      </ul>
      <a href="https://wa.me/56929645522" className="nav-cta">
        Cotizar proyecto
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </nav>
  )
}
