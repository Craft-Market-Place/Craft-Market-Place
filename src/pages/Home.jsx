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
                <h1 className="title">Últimos anuncios</h1>

            <div className="anuncios">
                <Trending posts={posts}/>
            </div>
         


                </>


    )
};
export default Home;
