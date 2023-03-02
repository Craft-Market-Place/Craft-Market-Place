import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";
import SearchBarCard from '../components/SearchBarCard'


function DeleteProduct() {
    const { products} = useLoaderData();
    
    const [productsData, setProductsData] = useState(products);
   
    const deleteProduct = async (id) => {
       await productHandler.deleteProduct(id);
      setProductsData(productsData.filter(post => post.id !== id))
  }

    return (
        <>
        {productsData.map((post) => (
            <SearchBarCard key={post.id} post={post} deleteProduct={deleteProduct} />
        ))}
      </>
    )
}

export default DeleteProduct;