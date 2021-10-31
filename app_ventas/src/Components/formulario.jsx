import React, {/* useEffect, */ useState } from 'react'; // se debe importar de esta manera el useEffect para poderlos usar dentro del componente formulario

import 'Estilos/consultar.css';



// ________________________________________________________________ //





const Formulario =() => {

       // const   [nombreVendedor, setNombreVendedor] = useState("") // declarar estado => para usar el useState es necessario haberlo importado junto con el useEffect.
   

   // useEffect(() =>{console.log("Hola soy la nueva función");},[]);     //==> esta funcion solo se ejecuta una vez cuando cargue la pagina /  cada que el valor de la variable que está dentro de los corchetes
                                                                        // cambie, va a ejecutar la funcion que se encuentra antes de la coma, "funcionDePrueba"
                                                                        // la funcion se debe declarar antes del useEffect.
                                                                        // useEffect se puede usar para traer la información desde una Base de Datos.

    // useEffect(()=>{console.log("Funcion que se ejecuta cada que cambia el nombre")},[nombreVendedor]);  // esta funcion se ejecuta cada vez que el valor de la variable nombreVendedor cambie.
    
    const[nombres, setNombre] = useState();
    const[apellidos, setApellidos] = useState();
    const[genero, setGenero] = useState();
    const[tipo, setTipo] = useState();
    const[documento1, setDocumento1] = useState();
    const[fecha, setFecha] = useState();
    const[correo, setCorreo] = useState();
    const[telefono, setTelefono] = useState();
    const[direccion, setDireccion] = useState();
    const[comentarios, setComentarios] = useState();

     
    const enviarDatosAlBackend=() =>{     // => esta funcion se encarga de enviar los datos al backend, en el ejemplo imprime en consola
    console.log("El Nombre es: ", nombres, "Apellidos: ", apellidos, "Genero: ", genero, "Tipo de documento: ", tipo, "Documento: ", documento1, "Fecha de Nacimiento: ", fecha, "Correo: ",correo, "Telefono: ", telefono, "Direccion: ", direccion, "Comentarios: ", comentarios);
    
};

    const submitForm=(e) =>{
        e.preventDefault();
        console.log("datos del form enviados")
    }

    return (
           
        <div className='Formulario2'>
            <form onSubmit={submitForm}>
                <div className='interno2'>
                <label htmlFor='nombres'><b>Nombres: </b></label><br/>
                <input value={nombres}  onChange={(e) =>{setNombre(e.target.value);}}  type="text" size="35px" required/><br></br><br/>
                <label htmlFor='apellidos'><b>Apellidos: </b></label><br/>
                <input value={apellidos}  onChange={(e) =>{setApellidos(e.target.value);}}  type="text"  size="35px" required/><br></br><br/>
                <label htmlFor='genero'><b>Género: </b></label>
                <input value='Femenino'  onChange={(e) =>{setGenero(e.target.value);}} id='radiob' type="radio" name="genero"  />
                <label htmlFor="genero">Femenino</label>
                <input value='Masculino'  onChange={(e) =>{setGenero(e.target.value);}} id='radiob' type="radio" name="genero" />
                <label htmlFor="genero">Masculino</label>
                <input value='Otro'  onChange={(e) =>{setGenero(e.target.value);}} id='radiob' type="radio" name="genero" />
                <label htmlFor="genero">Otro</label><br></br><br/>
                <label htmlFor="documentos"><b>Documento de identidad: </b></label>
                <select value={tipo}  onChange={(e) =>{setTipo(e.target.value);}}  id="docs" required defaultValue={0}>
                    <option disabled value={0}>Seleccione una opción</option>
                    <option>C.C.</option>
                    <option>T.I.</option>
                    <option>Pasaporte</option>
                    <option>D.E.</option>
                </select><br/>
                <input value={documento1}  onChange={(e) =>{setDocumento1(e.target.value);}}  type="text" size="35px" required/><br></br><br/>
                <label htmlFor='fecha'><b>Fecha de Nacimiento: </b></label>
                <input value={fecha}  onChange={(e) =>{setFecha(e.target.value);}} type="date" required/><br></br><br/>
                <label htmlFor='correo'><b>Correo electrónico: </b></label><br/>
                <input value={correo}  onChange={(e) =>{setCorreo(e.target.value);}} type="email" size="35px" required/><br></br><br/>  
                <label htmlFor='telefono' ><b>Teléfono: </b> </label><br/>
                <input value={telefono}  onChange={(e) =>{setTelefono(e.target.value);}} type="tel" size="35px" max={10} required/><br></br><br/>
                <label htmlFor='direccion' ><b>Dirección de Residencia: </b> </label> <br/>
                <input value={direccion}  onChange={(e) =>{setDireccion(e.target.value);}}  type="text" size="35px" required/><br></br><br/>
                <div id="comentarios"><label htmlFor='comentarios'><b>Comentarios: </b></label><br/>
                    <textarea value={comentarios}  onChange={(e) =>{setComentarios(e.target.value);}} rows="9" cols="60"></textarea><br></br>
                </div>
                
                <div className='boton'>
                    <br></br><button type='submit' onClick={()=>{enviarDatosAlBackend();}} id="boton_enviar">Registrar</button> <br></br>
                </div>
            </div>
            </form>
            

            <span id='span2'> ¡Error al agregar nuevo vendedor! </span>
            <span id='span1'> ¡Vendedor agregado exitosamente! </span>

        </div>
    );
};
  
export default Formulario;