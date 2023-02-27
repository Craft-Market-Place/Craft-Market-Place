import { createBrowserRouter } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import LayoutPublic from "../layout/LayoutPublic";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Post from '../pages/Post';
import NotFound from "../pages/NotFound";
import Aboutcraft from "../pages/Aboutcraft";
import EditProduct from "../pages/EditProduct";

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
                        element: <Home />, 
                    },
                    {
                        path: '/login',
                        element: <Login />,
                    },
                    {
                        path: '/profile',
                        element: <Profile />,
                        loader: loaderProfile,
                    },    
                    {
                        path: '/profile/:id',
                        element: <Post />,
                        loader: loaderPost
                    }, 
                    {
                        path: '/aboutcraft',
                        element: <Aboutcraft />,
                        
                    }, 
                    {
                        path: "editProduct/:id",
                        element: <EditProduct />,
                        loader: loaderPost
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

async function loaderProfile () {
 const posts = await productHandler.loadProducts()
    console.log (posts)
    return { posts };
 };
