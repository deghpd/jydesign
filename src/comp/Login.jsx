import { Link } from "react-router-dom";
import { useLogin } from './LoginContext';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";


export function Login() {
    const { setIsLoggedIn } = useLogin();
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      const expireDate = new Date(new Date().getTime() + 5 * 60 * 1000);
      Cookies.set('loggedIn', 'true', { expires: expireDate });

      setIsLoggedIn(true);
      navigate('/'); // redirect to home
    };
  
    
    return (
    <div className="login-container">
      <form className="form-container" onSubmit={handleLogin}>
        <h1>Login</h1>
        <p>Username:</p><input type="text" className="signTextBar" placeholder="Username" />
        <p>Password:</p><input type="password" className="signTextBar" placeholder="Password" />
        <div className="Btn-container">
          <button className="btn" type="submit">Sign In</button>
          <Link to="/Regi"><button className="btn" type="button">Sign Up</button></Link>
        </div>
      </form>
    </div>
    )
}