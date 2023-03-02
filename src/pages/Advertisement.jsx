import './Advertisement.css'
import SearchBarCard from '../components/SearchBarCard'
import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";

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


