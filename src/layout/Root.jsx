import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-[1180px] mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>          
            <Footer></Footer>
            
            
        </div>
    );
};

export default Root;