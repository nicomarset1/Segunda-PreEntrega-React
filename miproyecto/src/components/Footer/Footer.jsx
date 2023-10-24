import logo from '../../assets/images/logo.png'
import './Footer.css'
import fijadoo from '../../assets/images/whatsapp.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div><img src={logo} alt="" /></div>
            <p>Conde Style | Todos los derechos reservados</p>
        </div>
    )
}

export default Footer