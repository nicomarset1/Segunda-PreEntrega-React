import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <h1>Bienvenido a Conde Style la mejor tienda de periféricos</h1>
        <p>A continuación podrás ingresar a la tienda</p>
        <Link to={'/products'} className='b-home'>Tienda</Link>
    </div>
  )
}

export default Home