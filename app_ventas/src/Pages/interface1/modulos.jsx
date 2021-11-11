import Header from "Components/Header";
import 'Estilos/modulos.css';
import User from 'Imagenes/user (4).png';
import Group from 'Imagenes/icono_grupo.png';
import Sale from 'Imagenes/discount.png';
import Search from 'Imagenes/search.png'
import {Link} from 'react-router-dom';


const Modulos=() => {
    return (
        
    <div>

        <Header>
            <div>Bienvenido</div>
        </Header>
    
        <div id='BotonesModulos'>
            <Link to='' id='boton1'><img src={User} alt='user_icon'/>Gestión de usuarios</Link>
            <Link to='/ventas' id='boton2'><img src={Sale} alt='sale_icon'/>Administración de ventas</Link>
            <Link to='/vendedores'id='boton3'><img src={Group} alt='group_icon'/>Gestión de vendedores</Link>
            <Link to='/productos'id='boton4'><img src={Search} alt='search_icon'/>Gestión de productos</Link>
        </div>



    </div>
    );    
}

export default Modulos;