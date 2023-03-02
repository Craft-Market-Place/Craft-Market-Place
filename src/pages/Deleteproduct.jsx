import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";
//import Product from '../components/Product'
import Post from '../pages/Post'


function DeleteProduct() {
    const { products} = useLoaderData();
    //const id = post.id;
    const [productsData, setProductsData] = useState(products);
   
    
    

    const deleteProduct = async (id) => {
        
      await productHandler.deleteProduct(id);
      setProductsData(productsData.filter(post => post.id !== id))
  }

    return (
        <>
        {productsData.map((post) => (
            <Post key={post.id} post={post} deleteProduct={deleteProduct} />
        ))}
      </>
    )
}

export default DeleteProduct;