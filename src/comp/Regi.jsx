import { Link } from "react-router-dom"

export function Regi() {
    return (
        <div className="regi-container">
            <form className="form-container">
            <h1>Sign Up</h1>
                <p>Email:</p>
                <input type="text" className="signTextBar" placeholder="example@.gmail.com" />
                <p>Username:</p>
                <input type="text" className="signTextBar" placeholder="Username" />
                <p>Password:</p>
                <input type="password" className="signTextBar" placeholder="Password" />
                <p>Comfirmation:</p>
                <input type="password" className="signTextBar" placeholder="Password" />
                <div className="Btn-container">
                <Link to="/Login"><button className="btn">Sign In</button></Link>
                    <Link to="/"><button className="btn">Sign Up</button></Link>
                </div>
            </form>
        </div>
    )
}