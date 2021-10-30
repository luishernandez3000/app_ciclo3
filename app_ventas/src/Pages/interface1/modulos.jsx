import Header from "Components/Header";
import 'Estilos/modulos.css'
import User from 'Imagenes/user (4).png';
import Group from 'Imagenes/icono_grupo.png';
import Sale from 'Imagenes/discount.png'

const Modulos=() => {
    return (
        
    <div>

        <Header>
            <div>Bienvenido</div>
        </Header>
    
        <div id='BotonesModulos '>
            <button id='boton1'> <img src={User} alt='user_icon'/> Gestión de usuarios</button>
            <button id='boton2'> <img src={Sale} alt='sale_icon'/> Administración de ventas</button>
            <button id='boton3'>  <img src={Group} alt='group_icon'/>Gestión de vendedores</button>
        </div>



    </div>
    );    
}

export default Modulos;