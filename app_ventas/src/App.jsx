
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Login from 'Pages/interface1/login';
import Registro from 'Pages/interface1/registrar';
import Modulos from 'Pages/interface1/modulos';


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
          <Route path="/" exact>
             <Login/>
          </Route>
          

          
       </Switch>
   </Router>

  );
}

export default App;
