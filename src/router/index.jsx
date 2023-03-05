import { createBrowserRouter } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import LayoutPublic from "../layout/LayoutPublic";
import Home from '../pages/Home';
import Form from '../pages/Form';
import Post from '../pages/Post';
import NotFound from "../pages/NotFound";
// import Searchbar from "../components/SearchBar/Searchbar"
import EditProduct from "../pages/EditProduct"
import SearchBarCard from "../components/SearchBarCard";


export const router = createBrowserRouter([
    { 
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />, 
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element:<Home />, 
                        loader: loaderAdvertisement,
                    },
                    {
                        path: '/form',
                        element: <Form />,
                    },
                    {
                        path: '/advertisement',
                        element: <SearchBarCard />,
                        loader: loaderAdvertisement,
                    },    
                    {
                        path: '/advertisement/:id',
                        element: <Post />,
                        loader: loaderPost
                    }, 
                    // {
                    //     path: '/searchbar',
                    //     element: <Searchbar />,
                    //     loader: loaderPost,
                    // },                     
                    {
                        path: "advertisement/editProduct/:id",
                        element: <EditProduct />,
                        loader: loaderPost, 
                    },
           
                ]
            },
         
        ]
    },   
]);

async function loaderPost  ({ params })  {
    const post = await productHandler.loadProduct(params.id)  
    return { post };
};

async function loaderAdvertisement () {
 const products = await productHandler.loadProducts()
    return { products };
 };

