import "./Home.css"
import Slide from '../components/Slide';
// import Card from '../components/Card';
import {  useLoaderData } from 'react-router-dom'
import Trending from "../components/Trending";
const Home = () => {
    const {posts}  = useLoaderData();
    
    return (

<>

                <Slide/>
                <h2 className="title">Últimos anuncios</h2>

            <div className="anuncios">
                <Trending posts={posts}/>
            </div>
         


                </>


    )
};
export default Home;
