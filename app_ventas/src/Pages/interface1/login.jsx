import React from "react";
import {Link} from 'react-router-dom';
import GoogleLogin from "react-google-login";
import logo from "Imagenes/logo.png";
import "Estilos/login.css";



function Login() {
  
  function responseGoogle(response) {
    if (response && response.tokenId) {
      fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: response.tokenId,
          email: response.profileObj.email,
          nombres: response.profileObj.givenName,
          apellidos: response.profileObj.familyName,
        }),
      })
        .catch((err) => console.error(err))
        .then((repuesta) => repuesta.json())
        .then((respuestaServidor) => {
          localStorage.setItem("token", response.tokenId);
          localStorage.setItem(
            "usuario",
            JSON.stringify(respuestaServidor.usuario)
          );
          console.log(respuestaServidor);
          window.location.href = "/home";
        });
    }
  }

  return (
    <div>
      
            <div className="LogoSS">
              <img src={logo}  alt="logo" id="logo" />
            </div>
            <div className='SS'>
            <span id='Salessoft'><b>SalesSoft</b></span>
            </div>
            <div className="textoIS">
              <span id="IS"><b>Iniciar sesión</b></span>
            </div>

            <form action="" className="formulario">
              <div className="entradaTextoCedula">
                <label for="cedula">Número de cédula</label>
                <input type="cedula"  />
              </div>
              <div className="entradaTextoContraseña">
                <label for="contraseña">Contraseña</label>
                <input type="password"  />
              </div>
            
              
                <div className="olvideContraseña">
                  <button id="olvide">Olvidé mi contraseña</button>
                </div>
              
                <div className="botones_2">
                  <Link  to='/modulos'><button id="acceder">Acceder </button></Link> 
                
                  <Link to='/registro'><button id="registrar">Regístrate </button></Link>  
                </div>

                <div className="Botones_1">
                <div className="Google">
                  {/* aquí lo de google */}
                  <GoogleLogin id='botonGoogle'
                    clientId="415572449376-ks71dn2e1rc9o1q9olchksf2fmurl48d.apps.googleusercontent.com"
                    buttonText="Acceder con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}/>
                </div>
                </div>
              
            </form>
          
    </div>
  );
}
export default Login;
