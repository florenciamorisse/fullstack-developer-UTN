

const BimPage=(props)=>{
    return(
        <main>
            <section className="contenedor">
                <img src="./img/main/portada2.jpg" width="100%" alt=""/>
                <h1 className="titulo">PROYECTO ARQUITECTÓNICO</h1>        
                
            </section>  
             <div className="galeria"> 
            <section id="galeriabim" className="container">
                <div className="text-center pt-5">
                    <h1>Con BIM reducí el consumo energético de tu vivienda</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut fugiat temporibus aspernatur, necessitatibus at, possimus consequatur magni explicabo, non sequi labore! Omnis nulla facilis perspiciatis, ex deserunt accusantium cumque illo?</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12"><img src="img/main/bim06.jpg" alt=""/></div>
                    <div className="col-lg-4 col-md-6 col-sm-12"><img src="img/main/bim.jpg" alt=""/></div>
                    <div className="col-lg-4 col-md-6 col-sm-12"><img src="img/main/planning-1.jpg" alt=""/></div>
                    <div className="col-lg-4 col-md-6 col-sm-12"><img src="img/main/bim05.jpg" alt=""/></div>
                    <div className="col-lg-4 col-md-6 col-sm-12"><img src="img/main/Revit-MEP-1.jpg" alt=""/></div>
                    <div class="col-lg-4 col-md-6 col-sm-12"><img src="img/main/bim02.jpg" alt=""/></div>
                </div>
            </section> 
        </div>      
        </main>
    )
}

export default BimPage;