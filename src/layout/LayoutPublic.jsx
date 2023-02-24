import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




import "./LayoutPublic.css"


const LayoutPublic = () => {

    const navigation = useNavigation()

    return (
        <>
            <Navbar />

           
           <main className="Cuerpo">
           
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
