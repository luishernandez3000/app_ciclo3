import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Login from 'Pages/interface1/login';
import Registro from 'Pages/interface1/registrar';
import Modulos from 'Pages/interface1/modulos';
import PaginaPrincipal from 'Pages/interface_vendedores/PaginaPpal';
import Registrar from 'Pages/interface_vendedores/registrar';
import Consultar from 'Pages/interface_vendedores/consultar';
import Ventas from 'Pages/interface_ventas/ventas'
import RegistrarVentas from 'Pages/interface_ventas/registrarventas'
import ConsultarVentas from 'Pages/interface_ventas/consultarventas';
import ProductForm from 'Pages/interface_productos/registrar/ProductForm';
import ProductView from 'Pages/interface_productos/listar/ProductView';
import Productos from 'Pages/interface_productos/Productos';


function App() {
  return (
    <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login/>} exact />
            <Route path="/registro" element={<Registro/>} exact/>
            <Route path="/modulos" element={<Modulos/>} exact/> 
            <Route path="/vendedores" element={<PaginaPrincipal/>} exact/>
            <Route path="/registrar_vendedores" element={<Registrar/>} exact/>
            <Route path="/consultar_vendedores" element={<Consultar/>} exact/>
            <Route path="/ventas" element={<Ventas/>} exact/>
            <Route path="/registrar_ventas" element={<RegistrarVentas/>} exact/>
            <Route path="/consultar_ventas" element={<ConsultarVentas/>} exact/>
            <Route path="/productos" element={<Productos/>} exact/>
            <Route path="/registrar_productos" element={<ProductForm/>} exact/>
            <Route path="/consultar_productos" element={<ProductView/>} exact/>

         </Routes>
    </BrowserRouter>
  );
}

export default App;
