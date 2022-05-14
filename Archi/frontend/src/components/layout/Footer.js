
import '../../styles/components/layout/Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';


const Footer= (props)=>{
    return(
        <footer>
        <div className="contenedor-footer">        
            <img className="foto-footer" src="img/footer/footer2.jpg" alt=""/>
            <div className="texto-encima">Proyecto y Dirección de Obra</div>
        </div>
        <div className="footer">
            <div className="empresa" >
                <img className="logo" src="img/footer/logo3.png" alt=""/>
                <p text-align= "justify" >TR Estudio Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate neque non esse veniam. Saepe obcaecati ad non repellendus, incidunt placeat dolor, at possimus veritatis, maxime sunt fugit necessitatibus Libero.</p></div>
            <div >
                <ul>
                    <li > <strong>Contacto</strong></li><br/>
                    <li>Tel: (011) 15 3333-3333 / (011) 15 3333-3333</li>
                    <li><a href="mailto: info@trestudio.com ">E-mail: info@trestudio.com</a></li>
                    <li><a href="mailto: arqsebtr@gmail.com">E-mail: arqsebtr@gmail.com</a></li>
                    
                </ul>
            </div>
            <div >
                <ul>
                    <li> <strong>Links</strong> </li><br/>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="BIM.html">BIM</a></li>
                    <li><a href="planos.html">Planos</a></li>
                    <li><a href="reformas.html">Reformas</a></li>
                    <li><a href="novedades.html">Novedades</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a className="icono facebook" href="https://facebook.com" >
                            <FontAwesomeIcon icon={faFacebookSquare}/>
                        </a>
                            
                        
                    </li>
                    <li>
                        <a className="icono instagram" href="https://instagram.com">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                        
                    </li>
                    <li>
                        <a className="icono linkedin" href="https://linkedin.com">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        
                    </li>
                    <li>
                        <a className="icono pinterest" href="https://ar.pinterest.com">
                            <FontAwesomeIcon icon={faPinterest}/>
                        </a>
                    </li>                     
                </ul>
            </div>
        </div>

        </footer>
    );
};

export default Footer;