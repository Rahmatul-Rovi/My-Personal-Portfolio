import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <main>
                <Outlet /> 
            </main>
        </div>
    );
};
export default MainLayout;