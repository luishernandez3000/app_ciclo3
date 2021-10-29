
import React, {useEffect, useState} from "react";
import "../Estilos/consultar.css";
import Header from "../Components/Header";
import { Link } from "react-router-dom";





const VendedoresBackend = [         // array que contiene los vendedores
  {
      Nombre: 'Carlos Andres',
      Apellidos: 'Suarez Salazar',
      Genero: 'masculino',
      Documento: 123456,
      Fecha: '16/07/1993',
      Correo: 'carlosandres16_@hotmail.com',
      Telefono: 3146050436,
      Direccion: 'carrera102#69-22',
      Comentarios: 'ninguno',
  },
  {
      Nombre: 'Andrea Kate',
      Apellidos: 'Mendez',
      Genero: 'Femenina',
      Documento: 123456,
      Fecha: '16/07/1993',
      Correo: 'carlosandres16_@hotmail.com',
      Telefono: 3146050436,
      Direccion: 'carrera102#69-22',
      Comentarios: 'ninguno',
  },
  {
      Nombre: 'Wilder Enrique',
      Apellidos: 'Ramirez Buitrago',
      Genero: 'masculino',
      Documento: 123456,
      Fecha: '16/07/1993',
      Correo: 'carlosandres16_@hotmail.com',
      Telefono: 3146050436,
      Direccion: 'carrera102#69-22',
      Comentarios: 'ninguno',
  },
  {
      Nombre: 'Carlos Rodolfo',
      Apellidos: 'Suarez Arias',
      Genero: 'masculino',
      Documento: 123456,
      Fecha: '16/07/1993',
      Correo: 'carlosandres16_@hotmail.com',
      Telefono: 3146050436,
      Direccion: 'carrera102#69-22',
      Comentarios: 'ninguno',
  },
  {
    Nombre: 'Blanca Cecilia',
    Apellidos: 'Arias de Suarez',
    Genero: 'Femenino',
    Documento: 123456,
    Fecha: '16/07/1993',
    Correo: 'carlosandres16_@hotmail.com',
    Telefono: 3146050436,
    Direccion: 'carrera102#69-22',
    Comentarios: 'ninguno',
  },
]
// VendedoresBackend.push(...enviarDatosAlBackend: {Nombre: string, Apellidos: string, Genero: string, Documento: number, Fecha: string, Correo: string, Telefono: number, Direccion: string, Comentarios: string},[]); number;


const Tabla=({ listaVendedores }) => {

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
                  <td>{vendedores.Nombre}</td>
                  <td>{vendedores.Apellidos}</td>
                  <td>{vendedores.Genero}</td>
                  <td>{vendedores.Documento}</td>
                  <td>{vendedores.Fecha}</td>
                  <td>{vendedores.Correo}</td>
                  <td>{vendedores.Telefono}</td>
                  <td>{vendedores.Direccion}</td>
                  <td>{vendedores.Comentarios}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}



const Consultar = () => {

  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
      setVendedores(VendedoresBackend)
  }, []);

  return (
    <div>
      <Header>
        <div>LISTADO DE VENDEDORES</div>
      </Header>

      <Tabla listaVendedores= {vendedores}></Tabla>
      <div className="boton">
        <br></br>
        <Link to="/registrar">
          <button type="button" id="boton_enviar">
            Agregar vendedor
          </button>
        </Link>
        <br></br>
      </div>
    </div>
  );
};

export default Consultar;

