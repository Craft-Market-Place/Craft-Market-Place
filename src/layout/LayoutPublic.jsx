import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Searchbar from "../components/SearchBar/Searchbar";
// import Slide from "../components/Slide";
// import FeaturedAd from "../components/FeaturedAd";
// import index from '../router/index';

import "./LayoutPublic.css"


const LayoutPublic = () => {

    const navigation = useNavigation()

    return (
        <>
        <Navbar/>
        {/* <Slide /> */}
        <main>
           {navigation.state === "loading" && (
               <div className="alert alert-info my-S">Loading...</div>
           )}  
               <Outlet />
           </main> 
             <Footer/>
        
        </>
    );
};

export default LayoutPublic;
