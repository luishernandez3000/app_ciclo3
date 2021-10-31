import Formulario from "Components/formulario.jsx";
import Header from "Components/Header";
import React from 'react';
import 'Estilos/registrar.css';






function Registrar(){
    return(
        <div>
           <Header>
                <div>REGISTRAR INFORMACIÓN NUEVO VENDEDOR</div>
            </Header>
            
            <Formulario />
            
            
            
        </div>
    );    
}

export default Registrar;