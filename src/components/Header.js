import homeImage from '../assets/home-image.png'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Header= () => {
  return (
    <Link to={'/'}><img style={{width: '500px'}} src={ homeImage } alt="Home" /></Link>
  )
}

export default Header
