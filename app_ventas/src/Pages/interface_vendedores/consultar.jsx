import React, {useEffect, useState} from "react";
import "Estilos/consultar.css";
import Header from "Components/Header";
import { Link } from "react-router-dom";







const VendedoresBackend = [         // array que contiene los vendedores
  {
      nombres: 'Carlos Andres',
      apellidos: 'Suarez Salazar',
      genero: 'masculino',
      documento: 123456,
      fecha: '16/07/1993',
      correo: 'carlosandres16_@hotmail.com',
      telefono: 3146050436,
      direccion: 'carrera102#69-22',
      comentarios: 'ninguno',
  },
  {
      nombres: 'Andrea Kate',
      apellidos: 'Mendez',
      genero: 'Femenina',
      documento: 123456,
      fecha: '16/07/1993',
      correo: 'carlosandres16_@hotmail.com',
      telefono: 3146050436,
      direccion: 'carrera102#69-22',
      comentarios: 'ninguno',
  },
  {
      nombres: 'Wilder Enrique',
      apellidos: 'Ramirez Buitrago',
      genero: 'masculino',
      documento: 123456,
      fecha: '16/07/1993',
      correo: 'carlosandres16_@hotmail.com',
      telefono: 3146050436,
      direccion: 'carrera102#69-22',
      comentarios: 'ninguno',
  },
  {
      nombres: 'Carlos Rodolfo',
      apellidos: 'Suarez Arias',
      genero: 'masculino',
      documento: 123456,
      fecha: '16/07/1993',
      correo: 'carlosandres16_@hotmail.com',
      telefono: 3146050436,
      direccion: 'carrera102#69-22',
      comentarios: 'ninguno',
  },
  {
    nombres: 'Blanca Cecilia',
    apellidos: 'Arias de Suarez',
    genero: 'Femenino',
    documento: 123456,
    fecha: '16/07/1993',
    correo: 'carlosandres16_@hotmail.com',
    telefono: 3146050436,
    direccion: 'carrera102#69-22',
    comentarios: 'ninguno',
  },
]

const Consultar = () => {

  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
      setVendedores([VendedoresBackend])  // obtener lista de vendedores desde el backend
  }, []);

  return (
    <div>
      <Header>
        <div>LISTADO DE VENDEDORES</div>
      </Header>

      <Tabla listaVendedores= {vendedores}></Tabla>        
      <div className="boton">
        <br></br>
        <Link to="/registrar_vendedores">
          <button type="button" id="boton_enviar">
            Agregar vendedor
          </button>
        </Link>
        <br></br>
      </div>
    </div>
  );
};


const Tabla=({ listaVendedores }) => {  // le estoy dando a la tabla un props llamado listaVendedores

  useEffect(()=>{
      console.log("este es el listado de vendedores: ", listaVendedores);
  }, [listaVendedores]);

  

  return (
    <div className="tablaVendedores">
      <h2>VENDEDORES ACTUALES</h2>
      <div id="tablita">
        <table>
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Género</th>
              <th>Documento Identidad</th>
              <th>Fecha Nacimiento</th>
              <th>Correo Electrónico</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Comentarios</th>
            </tr>
          </thead>

          <tbody>
            {listaVendedores.map((vendedores) => {
              return (
                <tr>
                  <td>{vendedores.Nombres}</td>
                  <td>{vendedores.apellidos}</td>
                  <td>{vendedores.genero}</td>
                  <td>{vendedores.documento}</td>
                  <td>{vendedores.fecha}</td>
                  <td>{vendedores.correo}</td>
                  <td>{vendedores.telefono}</td>
                  <td>{vendedores.direccion}</td>
                  <td>{vendedores.comentarios}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default Consultar;

