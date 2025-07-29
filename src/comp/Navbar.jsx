import { useState } from "react";
import { Link } from "react-router-dom";
// import { useLogin } from './LoginContext';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const { isLoggedIn } = useLogin();

  return (
    <>
      <h2 className="nav-title-mobile">DemoAppTitle</h2>
      <div className="nav-hover">
        {/* Desktop Navbar */}
        <div className="navbar-container">
          <h2 className="nav-title">DemoAppTitle</h2>
          <div className="innerNav">
            <Link to="/"><button className="nav-btn">首頁</button></Link>
            <Link to="/Safari"><button className="nav-btn">作品集</button></Link>
            <Link to="/Contact"><button className="nav-btn">聯絡我們</button></Link>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/"><button className="nav-btn-mobile" onClick={() => setMobileMenuOpen(false)}>首頁</button></Link>
            <Link to="/Safari"><button className="nav-btn-mobile" onClick={() => setMobileMenuOpen(false)}>作品集</button></Link>
            <Link to="/Contact"><button className="nav-btn-mobile" onClick={() => setMobileMenuOpen(false)}>聯絡我們</button></Link>
          </div>
        )}
      </div>
    </>
  );
}