import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useLogin } from './LoginContext';

export function Navbar() {

    // const {isLoggedIn} = useLogin();

    return (
        <>
        <div className="nav-hover">
         <div className='navbar-container'>
            <h2 className="nav-title">DemoAppTitle</h2>
            <div className='innerNav'>
            <Link to="/"><button className="nav-btn">首頁</button></Link>
            <Link to="/Safari"><button className="nav-btn">作品集</button></Link>
            <Link to="/Contact"><button className="nav-btn">聯絡我們</button></Link>
            {/* {isLoggedIn ? (
             <Link to="/profile"><button className="nav-btn">Profile</button></Link>
             ) : (
             <Link to="/login"><button className="nav-btn">Login</button></Link>
             )} */}
            </div>
         </div>
        </div>
        </>
    )
}