import React, {useEffect, useState} from "react";
import "Estilos/consultarventas.css";
import Header from "Components/Header";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



const ConsultarVentas = () => {

  const [ventas, setVentas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true)

  useEffect(() => {
    const obtenerVentas = async () => {
      const options = {
        method: "GET",
        url: "http://localhost:5000/ventas",
      };

      await axios
        .request(options)
        .then(function (response) {
          setVentas(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    if (ejecutarConsulta){
      obtenerVentas();
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta])

     

  return (
    <div>
      <Header>
        <div>LISTADO DE VENTAS</div>
      </Header>

      <Tabla listaVentas= {ventas} setEjecutarConsulta={setEjecutarConsulta}></Tabla>        
      <div className="boton">
        <br></br>
        <Link to="/registrar_ventas">
          <button type="button" id="boton_enviar">
            Agregar venta
          </button>
        </Link>
        <br></br>
        <ToastContainer position="bottom-center" autoClose={1500}/>
      </div>
    </div>
  );
};


const FilaVenta = ({ventas, setEjecutarConsulta}) =>{
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false)

  const [infoNuevaVenta, setInfoNuevaVenta] = useState({
      id: ventas.id,
      fecha: ventas.fecha,
      documento: ventas.documentocliente,
      nombre: ventas.nombrecliente,
      precio: ventas.precio,
      unidades: ventas.unidades,
      valorventa: ventas.valorventa,
      
  });

  const actualizarVenta = async () =>{
    console.log(infoNuevaVenta)
    const options = {
    method: 'PATCH',
    url: `http://localhost:5000/ventas/${ventas._id}`,
    headers: {'Content-Type': 'application/json'},
    data: { ...infoNuevaVenta }
        };

      await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("?? Datos de la venta actualizados exitosamente !");
        setEdit(false);
        setEjecutarConsulta(true)
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error al actualizar la informaci??n");
      }); 
  };

const eliminarVenta= async () =>{
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/ventas/${ventas._id}`,
    headers: {'Content-Type': 'application/json'}
  };
  
  await axios.request(options).then(function (response) {
    console.log(response.data);
    toast.success("?? Registro eliminado exitosamente !");
      setEjecutarConsulta(true)
      setOpenDialog(false)
  }).catch(function (error) {
    console.error(error);
    toast.error("Error al eliminar el registro");
  });
  }

return(
    <tr>
      {edit ? (
    
      <>
      <td><input type="text" value={infoNuevaVenta.id} onChange={e=>setInfoNuevaVenta({...infoNuevaVenta, id: e.target.value})} /></td>
      <td><input type="date" value={infoNuevaVenta.fecha} onChange={e=>setInfoNuevaVenta({...infoNuevaVenta, fecha: e.target.value})}/></td>
      <td><input type="text" value={infoNuevaVenta.documento} onChange={e=>setInfoNuevaVenta({...infoNuevaVenta, documento: e.target.value})}/></td>
      <td><input type="text" value={infoNuevaVenta.nombre} onChange={e=>setInfoNuevaVenta({...infoNuevaVenta, nombre: e.target.value})}/></td>
      <td><input type="text" readOnly value={infoNuevaVenta.precio} onChange={e=>setInfoNuevaVenta({...infoNuevaVenta, precio: e.target.value})}/></td>
      <td><input type="text" value={infoNuevaVenta.unidades} onChange={e=>setInfoNuevaVenta({...infoNuevaVenta, unidades: e.target.value})}/></td>
      <td><input type="text" readOnly value={infoNuevaVenta.valorventa} onChange={e=>setInfoNuevaVenta({...infoNuevaVenta, valorventa: e.target.value})}/></td>
      
      </>
    ):(
    <>
      <td>{ventas.id}</td>
      <td>{ventas.fecha}</td>
      <td>{ventas.documento}</td>
      <td>{ventas.nombre}</td>
      <td>{ventas.precio}</td>
      <td>{ventas.unidades}</td>
      <td>{ventas.valorventa}</td>
      
      </>
    )}
      <td>
        <div className='iconosform'>
          {edit? (
          <>
          <Tooltip title='Confirmar cambios' arrow><i onClick={()=> actualizarVenta()} className='fas fa-check text-green-700 hover:text-green-500'/></Tooltip>
          <Tooltip title='Descartar cambios' arrow><i onClick={()=>setEdit(!edit)} className='fas fa-ban text-red-700 hover:text-red-500'/></Tooltip>
          </>
          ):(
          <>
            <Tooltip title='Editar informaci??n' arrow><i onClick={()=>setEdit(!edit)} className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'/></Tooltip>
            <Tooltip title='Eliminar vendedor' arrow><i onClick={()=>setOpenDialog(true)} className='fas fa-trash text-red-700 hover:text-red-500'/></Tooltip>
          </>
          )
        }
        </div>
        <Dialog open={openDialog}> 
          <div>
            <h3>??Est?? seguro de eliminar este registro?</h3>
            <button onClick={()=>eliminarVenta()}>S?? </button>
            <button onClick={()=>setOpenDialog(false)}>No</button>
          </div>
        </Dialog>
      </td>
    </tr>
  );
};


const Tabla=({ listaVentas, setEjecutarConsulta}) => { 

     /* useEffect(()=>{
       console.log("este es el listado de vendedores: ", ...listaVentas);
      }, [listaVentas]); //--> este useEffect es para ver en consola la lista de vendedores en la tabla */

  return (
    <div id="tablaVentas">
      <h2>VENTAS REALIZADAS</h2>
      
        <table className="tablitaventas">
          <thead>
            <tr>
              <th>id venta</th>
              <th>Fecha de venta</th>
              <th>Documento cliente</th>
              <th>Nombre cliente</th>
              <th>Precio x Und.</th>
              <th>unds. vendidas</th>
              <th>Valor total venta</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {listaVentas.map((ventas) => {
              return (<FilaVenta key={nanoid()} ventas={ventas} setEjecutarConsulta={setEjecutarConsulta}/>);
            })}
          </tbody>
        </table>
      
    </div>
  );
}


export default ConsultarVentas;