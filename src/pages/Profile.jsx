import { useLogin } from "../comp/LoginContext"
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"

export function Profile() {

    const { setIsLoggedIn } = useLogin();
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('loggedIn'); // remove the cookie
        setIsLoggedIn(false); // update state
        navigate('/'); // redirect to home
    };

    return(
        <>
        <div className="context-container" > 
           <div className="context-Wrapper">
            <h1 className="profile-title">Profile</h1>
            <p className="profile-text">your personal info</p>
            <form className="form-container" onSubmit={handleLogout}>
            <button className="base-btn" type="submit">Sign Out</button></form>
           </div>
        </div>
        </>
    )
}