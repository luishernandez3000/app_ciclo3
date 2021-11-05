import logo from '../Imagenes/logo.png';
import {Link} from 'react-router-dom';


const Header = ({children}) => {
return (
    <header>
        <div align="center"><Link to='/modulos'> <img src={logo} alt="Logo de Abmodel" width="120px" height="120px"/></Link></div>
        <h1 id="Titulo"> {children} </h1>
    </header>
);
}

export default Header;