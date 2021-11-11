import Header from "Components/Header";
import {Link} from "react-router-dom";
import "Estilos/ventas.css"

function Productos(){
    return (
        <div>
          <Header/>
          <div className="botonesventas" >
            <Link to='/registrar_productos'id='boton1vt'>Registrar producto</Link> 
            <Link to='/consultar_productos'id='boton2vt'>Consultar productos</Link>
          </div>
        </div>
    );
}

export default Productos;