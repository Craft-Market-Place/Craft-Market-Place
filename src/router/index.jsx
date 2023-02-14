import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../layout/LayoutPublic";

import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile, { loaderProfile} from '../pages/Profile';
import Product,  { loaderProduct  }  from '../pages/Product';
import NotFound from "../pages/NotFound";

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
                        element: <Product />,
                        loader: loaderProduct
                    }, 
                ]
            },
         
        ]
    },   
]);