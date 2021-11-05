
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Login from 'Pages/interface1/login';
import Registro from 'Pages/interface1/registrar';
import Modulos from 'Pages/interface1/modulos';
import PaginaPrincipal from 'Pages/interface_vendedores/PaginaPpal';
import Registrar from 'Pages/interface_vendedores/registrar';
import Consultar from 'Pages/interface_vendedores/consultar';

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
         </Routes>
    </BrowserRouter>
  );
}

export default App;
