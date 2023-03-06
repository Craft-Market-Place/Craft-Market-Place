import './Advertisement.css'
import Dashboard from '../components/Dashboard'


const Advertisement = () => { 
    

    return (
        <>
        {productsData.map((post) => (
            <Dashboard key={post.id} post={post} deleteProduct={deleteProduct} />
        ))}
      </>
    )
 };
 export default Advertisement;


