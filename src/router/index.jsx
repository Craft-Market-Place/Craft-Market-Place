import { createBrowserRouter } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import LayoutPublic from "../layout/LayoutPublic";
import Home from '../pages/Home';
import Form from '../pages/Form';
import Advertisement from '../pages/Advertisement';
import Post from '../pages/Post';
import NotFound from "../pages/NotFound";
import Searchbar from "../components/SearchBar/Searchbar"
import EditService from "../pages/EditProduct";
import Cookies from "../pages/Cookies";
import Warning from "../pages/Warning";
// import Navbar from "../components/Navbar";
// import Cards from "../components/Card";


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
                        element: <Advertisement />,
                        loader: loaderAdvertisement,
                    },    
                    {
                        path: '/advertisement/:id',
                        element: <Post />,
                        loader: loaderPost
                    }, 
                    {
                        path: '/searchbar',
                        element: <Searchbar />,
                        loader: loaderPost
                    }, 
                    {
                        path: '/editadvertisement/:id',
                        element: <EditService />,
                        loader: loaderPost
                    }, 
                    
                    {
                        path: '/cookies',
                        element: <Cookies />,
                    }
                    , 
                    
                    {
                        path: '/warning',
                        element: <Warning />,
                    }
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
 const posts = await productHandler.loadProducts()
    console.log (posts)
    return { posts };
 };

