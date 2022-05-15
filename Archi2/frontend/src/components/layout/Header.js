import {NavLink} from 'react-router-dom';
import '../../styles/components/layout/Header.css'


const Header = (props) =>{

    return(
        <header className="header">        
            <nav className="nav">
                
                <img className="logo" src="img/header/logo3.png" alt=""/>
                                
                <ul className="nav-menu ">
                    <li className="nav-menu-item">
                        <NavLink className="nav-menu-link nav-link active" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-menu-item">
                        <a className="nav-menu-link nav-link" href="BIM.html">BIM</a>
                    </li>
                    <li className="nav-menu-item">
                        <a className="nav-menu-link nav-link" href="planos.html">Planos</a>
                    </li>
                    <li className="nav-menu-item">
                        <a className="nav-menu-link nav-link" href="reformas.html">Reformas</a>
                    </li>
                   <li className="nav-menu-item">
                        <a className="nav-menu-link nav-link" href="novedades.html">Novedades</a>
                    </li>
                    <li className="nav-menu-item">
                        <a className="nav-menu-link nav-link" href="contacto.html">Contacto</a>
                    </li>
                </ul>
            </nav>  
               
            
        </header>
    );
};


export default Header;