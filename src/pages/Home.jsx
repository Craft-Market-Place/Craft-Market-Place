import "./Home.css"
import product1 from '../../public/hecho a mano.jpg'
import product2 from '../../public/hecho a mano 2.jpg'
import product3 from'../../public/ropa.jpg'
import product4 from '../../public/consumo.jpg'
import product5 from '../../public/regalo.jpeg'


const Home = () => {
    return (
        <div className='section-container'>
            <section className="bloque"> <div id="servicesAnchor"> <h1>Sale and purchase of 
second-hand craft </h1> </div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={product1} className="img-fluid" alt="Responsive image"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={product2} className="img-fluid" alt="Responsive image"></img>     
                        </div>
                        <div className="carousel-item">
                            <img src={product3} className="img-fluid" alt="Responsive image"></img>     
                        </div>
                        <div className="carousel-item">
                            <img src={product4} className="img-fluid" alt="Responsive image"></img>     
                        </div>
                        <div className="carousel-item">
                            <img src={product5} className="img-fluid" alt="Responsive image"></img>     
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </section>

        </div>

    )
};
export default Home;
