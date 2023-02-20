import { createBrowserRouter } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import LayoutPublic from "../layout/LayoutPublic";
import Home from '../pages/Home';

import Profile from '../pages/';
import Post from '../pages/Post';
import NotFound from "../pages/NotFound";
import Aboutcraft from "../pages/Aboutcraft";

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

    return { posts };
 };
