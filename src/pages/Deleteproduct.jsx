import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";
//import Product from '../components/Product'
import SearchBarCard from '../components/SearchBarCard'


function DeleteProduct() {
    const { products} = useLoaderData();
    //const id = post.id;
    const [productsData, setProductsData] = useState(products);
   
    const deleteProduct = async (id) => {
        console.log("hola");
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