import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CounterProvider } from "../Context/counterContext";

function RootLayout(){
    return <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
}

export default RootLayout;