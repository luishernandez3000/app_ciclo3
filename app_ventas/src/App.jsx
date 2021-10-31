
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Login from 'Pages/interface1/login';
import Registro from 'Pages/interface1/registrar';
import Modulos from 'Pages/interface1/modulos';
import PaginaPrincipal from 'Pages/interface_vendedores/PaginaPpal';
import Registrar from 'Pages/interface_vendedores/registrar';
import Consultar from 'Pages/interface_vendedores/consultar';

function App() {
  return (
    
<Router>
      <Switch> 
         
          <Route path="/registro" exact>
             <Registro/>
          </Route>
          <Route path="/modulos" exact>
             <Modulos/>
          </Route>
          <Route path="/vendedores" exact>
             <PaginaPrincipal/>
          </Route>
          <Route path="/registrar_vendedores" exact>
             <Registrar/>
          </Route>
          <Route path="/consultar_vendedores" exact>
             <Consultar/>
          </Route>
          <Route path="/" exact>
             <Login/>
          </Route>
          

          
       </Switch>
   </Router>

  );
}

export default App;
