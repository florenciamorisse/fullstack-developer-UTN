import '../../styles/components/layout/Header.css'

const Header =(props)=>{
    return(
        <header className="header">        
            <nav className="nav">
                <a href="#" className="logo">
                    <img className="logo" src="img/logo3.png" />
                </a>
            <button className="nav-toggle">
                <i className="fa-solid fa-bars"></i>
            </button>
            <ul className="nav-menu ">
                <li className="nav-menu-item">
                    <a className="nav-menu-link nav-link active" href="index.html">Home</a>
                </li>
                <li clasNames="nav-menu-item">
                    <a clasNames="nav-menu-link nav-link" href="BIM.html">BIM</a>
                </li>
                <li className="nav-menu-item">
                    <a className="nav-menu-link nav-link" href="planos.html">Planos</a>
                </li>
                <li className="nav-menu-item">
                    <a className="nav-menu-link nav-link" href="reformas.html">Reformas</a>
                </li>                
                <li className="nav-menu-item">
                    <a className="nav-menu-link nav-link" href="contacto.html">Contacto</a>
                </li>
            </ul>
        </nav>  
           
        
    </header>
    );
}
export default Header;