import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-16"> 
                <Outlet /> 
            </div>
        </div>
    );
};

export default MainLayout;