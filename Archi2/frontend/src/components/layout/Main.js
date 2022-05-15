import '../../styles/components/layout/Main.css'

const Main= (props)=>{
    return(
        <main>
            <section className="contenedor">
                <img src="./img/main/portada2.jpg" width="100%" alt=""/>
                <h1 className="titulo">PROYECTO ARQUITECTÓNICO</h1>        
                
            </section>  
                  
            <div className="img-main" >
                <img className="plano01" src="img/main/planning-1.jpg" height="100%" margin="30px 0px 10px 0px " alt="plano" />
                
                <div className="texto">
                    <p>
                        <h1 >Quienes Somos</h1>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, explicabo harum. Ipsum laudantium magnam eius</h3><br/>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor maiores voluptatem unde provident, quaerat sequi incidunt fugiat. Numquam nemo ex animi commodi fugit sint pariatur modi maiores possimus ea!<br/><br/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente tempora eligendi facilis neque ea iste nulla quibusdam numquam fugit. Id molestias nobis, dicta sunt quo esse commodi at a inventore.<br/><br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, reprehenderit ipsum facere impedit ut officia perspiciatis, necessitatibus sit iure qui explicabo quibusdam nostrum fugit nesciunt molestiae quae animi obcaecati quo..</span>
                    </p>
                </div>
            </div>
            <div className="titulo2">Qué hacemos</div>
            <div   div className="items" >
                <div className="items2 concepto">
                    <img className="cuadradas" src="img/main/concepto.png" alt=""/>
                    <p >
                        <h3>Concepto</h3><br/>
                        Lorem ipsum dolor sit amet consectetur
                    </p>
                </div>
                <div className="items2">
                    <img className="cuadradas" src="img/main/proyecto.png" alt=""/>
                    <p>
                        <h3>Proyecto</h3><br/>
                        Lorem ipsum dolor sit amet consectetur 
                    </p>
                </div>
                <div className="items2">
                    <img className="cuadradas" src="img/main/direccion.png" alt=""/>
                    <p>
                        <h3>Dirección de obra</h3><br/>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                 <div className="items2">
                    <img className="cuadradas" src="img/main/ejecucion.png" alt=""/>
                    <p >
                        <h3>Ejecución</h3><br/>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                <div className="items2" >
                    <img className="cuadradas" src="img/main/planos.png" alt=""/>
                    <p>
                        <h3>Planos Municipales</h3><br/>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Main;