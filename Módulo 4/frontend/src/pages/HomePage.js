const HomePage =(props)=>{
    return(
        <main class="holder">
            <div class="homeimg">
                <img src="img/home/img01.jpg" alt="Avion"/>
            </div>
            <div class="columnas">
                <div class="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quia ipsam sit omnis recusandae cum consectetur odio, expedita explicabo, autem ratione sunt, eum fugit quos velit asperiores consequuntur quae libero!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum tempore fuga amet, ratione corrupti eius magni unde fugiat numquam nobis culpa sit dicta, quos illum suscipit? Quia, ab eos!</p>   
                </div>
                <div class="testimonios right">
                    <h2>Testimonios </h2>
                    <div class="testimonio" style="margin-bottom: 30px">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
             </div>
        </main>
    );
}

export default HomePage;