import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ChatBox from "./chat-box/ChatBox";



export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <ChatBox />
            <Footer />
        </>
    )
}