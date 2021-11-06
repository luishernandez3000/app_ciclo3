import React, {useEffect, useState, useRef} from "react";
import "Estilos/consultar.css";
import Header from "Components/Header";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';



const VendedoresBackend = [         // array que contiene los vendedores
  {
      nombres: 'Carlos Andres',
      apellidos: 'Suarez Salazar',
      genero: 'masculino',
      tipo: 'CC',
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
      tipo: 'PASAPORTE',
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
      genero: 'Masculino',
      tipo: 'CC',
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
      tipo: 'CC',
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
    tipo: 'CC',
    documento: 123456,
    fecha: '16/07/1993',
    correo: 'carlosandres16_@hotmail.com',
    telefono: 3146050436,
    direccion: 'carrera102#69-22',
    comentarios: 'ninguno',
  },
]





const FilaVendedor = ({vendedores}) =>{
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false)

  const [infoNuevoVendedor, setInfoNuevoVendedor] = useState({
      nombres: vendedores.nombres,
      apellidos: vendedores.apellidos,
      genero: vendedores.genero,
      tipo: vendedores.tipo,
      documento: vendedores.documento,
      fecha: vendedores.fecha,
      correo: vendedores.correo,
      telefono: vendedores.telefono,
      direccion: vendedores.direccion,
      comentarios: vendedores.comentarios,

  });

const actualizarVendedor =() =>{
  console.log(infoNuevoVendedor);
};

const eliminarVendedor=() =>{

} // --> funcion para eliminar vendedores

  return(
    <tr>
      {edit ? (
    
      <>
      <td><input type="text" value={infoNuevoVendedor.nombres} onChange={e=>setInfoNuevoVendedor({...infoNuevoVendedor, nombres:e.target.value})} /></td>
      <td><input type="text" value={infoNuevoVendedor.apellidos} onChange={e=>setInfoNuevoVendedor({...infoNuevoVendedor, apellidos:e.target.value})}/></td>
      <td><select required defaultValue={0} onChange={e=>setInfoNuevoVendedor({...infoNuevoVendedor, genero:e.target.value})}>
              <option disabled value={0}>Seleccione el género</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>Otro</option>
          </select></td>
      <td><select required defaultValue={0} onChange={e=>setInfoNuevoVendedor({...infoNuevoVendedor, tipo:e.target.value})}>
              <option disabled value={0}>Seleccione una opción</option>
              <option>C.C.</option>
              <option>T.I.</option>
              <option>Pasaporte</option>
              <option>D.E.</option>
          </select></td>
      <td><input type="text" value={infoNuevoVendedor.documento} onChange={e=>setInfoNuevoVendedor({...infoNuevoVendedor, documento:e.target.value})}/></td>
      <td><input type="date" value={infoNuevoVendedor.fecha} onChange={e=>setInfoNuevoVendedor({...infoNuevoVendedor, fecha:e.target.value})}/></td>
      <td><input type="email" value={infoNuevoVendedor.correo} onChange={e=>setInfoNuevoVendedor({...infoNuevoVendedor, correo:e.target.value})}/></td>
      <td><input type="text" value={infoNuevoVendedor.telefono} onChange={e=>setInfoNuevoVendedor({...infoNuevoVendedor, telefono:e.target.value})}/></td>
      <td><input type="text" value={infoNuevoVendedor.direccion} onChange={e=>setInfoNuevoVendedor({...infoNuevoVendedor, direccion:e.target.value})}/></td>
      <td><input type="text" value={infoNuevoVendedor.comentarios} onChange={e=>setInfoNuevoVendedor({...infoNuevoVendedor, comentarios:e.target.value})}/></td>
      </>
    ):(
    <>
      <td>{vendedores.nombres}</td>
      <td>{vendedores.apellidos}</td>
      <td>{vendedores.genero}</td>
      <td>{vendedores.tipo}</td>
      <td>{vendedores.documento}</td>
      <td>{vendedores.fecha}</td>
      <td>{vendedores.correo}</td>
      <td>{vendedores.telefono}</td>
      <td>{vendedores.direccion}</td>
      <td>{vendedores.comentarios}</td>
      </>
    )}
      <td>
        <div className='iconosform'>
          {edit? (
          <>
          <Tooltip title='Confirmar cambios' arrow><i onClick={()=> actualizarVendedor()} className="fas fa-check"/></Tooltip>
          <Tooltip title='Descartar cambios' arrow><i onClick={()=>setEdit(!edit)} className='fas fa-ban'/></Tooltip>
          </>
          ):(
          <>
            <Tooltip title='Editar información' arrow><i onClick={()=>setEdit(!edit)} className='fas fa-pencil-alt'/></Tooltip>
            <Tooltip title='Eliminar vendedor' arrow><i onClick={()=>setOpenDialog(true)} className='fas fa-trash'/></Tooltip>
          </>
          )
        }
        </div>
        <Dialog open={openDialog}>
          <div>
            <h1>¿Está seguro de eliminar este registro?</h1>
            <button>Sí</button>
            <button>No</button>
          </div>
        </Dialog>
      </td>
    </tr>
  );
}


const Tabla=({ listaVendedores }) => {  // le estoy dando a la tabla un props llamado listaVendedores

  const form = useRef(null)

  useEffect(()=>{
      console.log("este es el listado de vendedores: ", listaVendedores);
  }, [listaVendedores]);

  return (
    <div id="tablaVendedores">
      <h2>VENDEDORES ACTUALES</h2>
      
        <table className="tablita">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Género</th>
              <th>Tipo de Documento</th>
              <th>Documento Identidad</th>
              <th>Fecha Nacimiento</th>
              <th>Correo Electrónico</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Comentarios</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {listaVendedores.map((vendedores) => {
              return (<FilaVendedor key={nanoid()} vendedores={vendedores}/>);
            })}
          </tbody>
        </table>
      
    </div>
  );
}


const Consultar = () => {

  const [vendedores, setVendedores] = useState([]);

  useEffect(() => {
      setVendedores([...VendedoresBackend])  // obtener lista de vendedores desde el backend
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

export default Consultar;

