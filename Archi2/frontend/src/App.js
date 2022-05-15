import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import BimPage from "./pages/BimPage";
import ContactoPage from "./pages/ContactoPage";
import NovedadesPage from "./pages/NovedadesPage";
import PlanosPage from "./pages/PlanosPage";
import ReformasPage from "./pages/ReformasPage";



function App() {
  return (
    <Router>
     <Header></Header>
     <Main/>
     <Switch>
       <Route path="/" exact component={HomePage}/>
       <Route path="/bim" exact component={BimPage}/>
       <Route path="/contacto" exact component={ContactoPage}/>
       <Route path="/novedades" exact component={NovedadesPage}/>
       <Route path="/planos" exact component={PlanosPage}/>
       <Route path="/reformas" exact component={ReformasPage}/>
     </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
