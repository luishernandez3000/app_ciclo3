import Header from 'Components/Header';
import 'Estilos/registrar1.css';


function Registro() {
    return (
           
        <div>
                    <Header>
                        
                        <div className="registrate">

                            <h2 id="h2">
                                Regístrate
                            </h2>

                            <h2 id="h2_2">¡Es fácil y rápido!</h2>
                        
                        </div>
                    </Header>

                <div className='Registro2'>
                    <form action="" >
                        <div>
                        <label id="etiqueta_nombre">Nombres: </label><br/>
                        <input type="text" id="cuadro_nombre" size="35px" required/><br></br><br/>
                        <label id="etiqueta_apellidos">Apellidos: </label><br/>
                        <input type="text" id="cuadro_apellido" size="35px" required/><br></br><br/>
                        <label id="email">Correo electrónico: </label><br/>
                        <input type="email" size="35px" required/><br></br><br/>  
                        <label id="contraseña">Contraseña:  </label><br/>
                        <input type="password" size="35px"  required/><br></br><br/>
                        
                        <div className='botonlog'>
                            <br></br><button  type='submit' id="boton_registrolog">¡Registrate!</button> <br></br>
                        </div>

                    </div>
                    </form>
                </div>
            </div>
            );
        }

        export default Registro;