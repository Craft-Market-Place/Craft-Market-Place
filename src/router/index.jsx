import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from '../pages/Home';
import Login from '../pages/Uploadproduct';
import Profile, { loaderProfile } from '../pages/DashBoard';
import Post,  { loaderPost  }  from '../pages/Post';
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


