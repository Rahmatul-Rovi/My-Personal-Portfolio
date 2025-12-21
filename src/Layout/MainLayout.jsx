import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar> {/* Eikhane Navbar thakbe */}
            <main>
                <Outlet /> {/* Eikhane Home page er section gulo ashbe */}
            </main>
        </div>
    );
};
export default MainLayout;