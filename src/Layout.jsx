import { Navbar } from "./comp/Navbar"
import { Outlet } from "react-router-dom"

export function Layout() {

    return(
        <>
        <Navbar/>
        <main className="main-container">
            <Outlet/>
        </main>
        </>
        
    )
}