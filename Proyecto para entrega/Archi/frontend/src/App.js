
//import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import HomePage from "./pages/HomePage";
import BimPage from "./pages/BimPage";
import PlanosPage from "./pages/PlanosPage";
import ReformasPage from "./pages/ReformasPage";
import NovedadesPage from "./pages/NovedadesPage";
import ContactoPage from "./pages/ContactoPage";

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
     <Header/>
     <Main/>
     <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/Bim" exact component={BimPage}/>
        <Route path="/Planos" exact component={PlanosPage}/>
        <Route path="/Reformas" exact component={ReformasPage}/>
        <Route path="/novedades" exact component={NovedadesPage}/>
        <Route path="/contacto" exact component={ContactoPage}/>
      </Switch>
     <Footer/>      
      
    </Router>
  );
}

export default App;
