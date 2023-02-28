import { Link, useLoaderData } from 'react-router-dom'
import './Advertisement.css'
import SearchbarCard from '../components/SearchBarCard'
const Advertisement = () => { 
    // const {posts} = useLoaderData();
    

    return (
        <>
        <div className='container-cards'>
        <SearchbarCard />
        </div>
       
        </>
    );
 };
 export default Advertisement;


