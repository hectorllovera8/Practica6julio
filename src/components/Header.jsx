import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black p-2" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/inicio" className="nav-link active" aria-current="page" href="#">Inicio</Link>
          
        </li>
        <li className="nav-item">
          <Link to="/nosotros" className="nav-link active" aria-current="page" href="#">Nosotros</Link>
        </li>
       
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Continentes
          </a>
          <ul className="dropdown-menu">
         <Link to="/continentes/asia"><a className="dropdown-item" href="#">Asia</a></Link>
         <Link to="/continentes/africa"><a className="dropdown-item" href="#">Africa</a></Link>
         <Link to="/continentes/europe"><a className="dropdown-item" href="#">Europa</a></Link>
         <Link to="/continentes/america"><a className="dropdown-item" href="#">America</a></Link>
         <Link to="/continentes/oceania"><a className="dropdown-item" href="#">Oceania</a></Link>

          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


  )
}

export default Header