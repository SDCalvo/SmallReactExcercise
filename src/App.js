import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './Components/Navbar/Navbar'
import Admin from './Components/Admin/Admin';
import Listado from './Components/Listado/Listado';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Contacto from './Components/Contacto/Contacto';


function App() {
  return (
    <Router>
      <Navbar/>

      <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/listado">
            <Listado/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path='*'>
            <div className="container my-5">
              <div className="row text-center">
                <div className="col-md-12">
                  <h1>Página no encontrada</h1>
                  <p>Por favor, inténtelo de nuevo.</p>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
