import "./Home.css"
<<<<<<< HEAD
import product1 from '../../public/hecho a mano.jpg'
import product2 from '../../public/hecho a mano 2.jpg'
import product3 from '../../public/ropa.jpg'
import product4 from '../../public/consumo.jpg'
import product5 from '../../public/regalo.jpeg'
import Carousel from 'react-bootstrap/Carousel'


=======
import Slide from '../components/Slide';
// import Card from '../components/Card';
import {  useLoaderData } from 'react-router-dom'
import Trending from "../components/Trending";
>>>>>>> deploy
const Home = () => {
    const {posts}  = useLoaderData();
    
    return (
<<<<<<< HEAD
        <div className='section-container'>
            <section className="bloque"> <div id="servicesAnchor"> <h1>Sale and purchase of
                second-hand craft </h1> </div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={product1} className="img-fluid" alt="Responsive image"></img>
                            <Carousel.Caption>
                                <h3>Hand Made</h3>
                                <p>
                                With much love and dedication
                                </p>
                            </Carousel.Caption>
                        </div>
                        <div className="carousel-item">
                            <img src={product2} className="img-fluid" alt="Responsive image"></img>
                           
                        </div>
                        <div className="carousel-item">
                            <img src={product3} className="img-fluid" alt="Responsive image"></img>
                            
                          
                        </div>
                        <div className="carousel-item">
                            <img src={product4} className="img-fluid" alt="Responsive image"></img>
                            <Carousel.Caption>
                                <h3>Ethical consumption</h3>
                                <p>
                                   
                                   With the second hand, the extraction of new raw materials, the environmental impact associated with manufacturing and the generation of waste are avoided.
                                </p>
                            </Carousel.Caption>
                        </div>
                        <div className="carousel-item">
                            <img src={product5} className="img-fluid" alt="Responsive image"></img>
                            <Carousel.Caption>
                                <h3>Unique garments</h3>
                                <p>
                                Exclusive and very original gifts
                                </p>
                            </Carousel.Caption>
                           
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
=======
>>>>>>> deploy

<>

                <Slide/>
                <h1 className="title">Últimos anuncios</h1>

            <div className="anuncios">
                <Trending posts={posts}/>
            </div>
         


                </>


    )
};
export default Home;
