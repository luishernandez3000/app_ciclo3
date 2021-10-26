
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Inicio from './Pages/interface1/Inicio';
import Registro from './Pages/interface1/registrar';
import Modulos from './Pages/interface1/modulos';

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
          <Route path="" exact>
             <Inicio/>
          </Route>
          

          
       </Switch>
   </Router>

  );
}

export default App;
