import './App.css'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/home';
import { Safari } from './pages/Safari';
import { Layout } from './Layout';
import { Login } from './comp/Login';
import { Contact } from './pages/Contact';
import { useLogin } from './comp/LoginContext';
import Cookies from "js-cookie";
import { Regi } from './comp/Regi';
import { Profile } from './pages/Profile';
import { useEffect } from "react";


function App() {
    // const { setIsLoggedIn } = useLogin();

    // useEffect(() => {
    //     const cookie = Cookies.get('loggedIn');
    //     setIsLoggedIn(cookie === 'true');
    //   }, []);
    return(
    <>
        <Router>
            <Routes>
                <Route element={ <Layout/> }>
                    <Route path='/' element={ <Home/> }/>
                    <Route path='/Safari' element={ <Safari/> }/>
                    <Route path='/Safari' element={ <Safari/> }/>
                    <Route path='/Regi' element={ <Regi/> }/>
                    <Route path='/Login' element={ <Login/> }/>
                    <Route path='/Profile' element={ <Profile/> }/>
                    <Route path='Contact' element={ <Contact/> }/>
                </Route>
            </Routes>
        </Router> 
    </>
    );
}

export default App;
