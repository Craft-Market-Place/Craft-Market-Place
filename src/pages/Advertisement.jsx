import './Advertisement.css'
import SearchBarCard from '../components/SearchBarCard'


const Advertisement = () => { 
    

    return (
        <>
        {productsData.map((post) => (
            <SearchBarCard key={post.id} post={post} deleteProduct={deleteProduct} />
        ))}
      </>
    )
 };
 export default Advertisement;


