/*import './NavBar.css'
import logo from '../../assets/images/logo.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <div><img className='logo' src={logo} alt="" /></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ofertas</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Mouses</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Teclados</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Auticulares</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Monitores</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
    )
}

export default NavBar
*/

import './NavBar.css'
//import logo from '../../assets/images/logo.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link to={'/'}><img className='logo' src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link to={'/'} className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/products'} className='nav-link'>Tienda</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><Link to={'/products'} className='dropdown-item'>Todos</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={'/category/jewelery'} className='dropdown-item'>Joyas</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={"/category/men's%20clothing"} className='dropdown-item'>Ropa de Hombre</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={"/category/electronics"} className='dropdown-item'>Electrónica</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={"/category/women's%20clothing"} className='dropdown-item'>Ropa de Mujer</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
    )
}

export default NavBar