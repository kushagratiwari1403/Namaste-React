import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    // let btnLogin = "Log In";
    const [btnLogin, setBtnLogIn] = useState('Login')

    return (
        <div id="header">
            <div id="logo">
                <img className="logo-img" src={LOGO_URL}></img>
            </div>
            <div id="nav-items">
                <ul>
                    <li> <Link to={"/"}> Home </Link></li>
                    <li> <Link to={"/about-us"}> About Us</Link></li>
                    <li> <Link to={"/contact-us"}>Contact Us</Link></li>
                    <li> <Link to={"/cart"}> Cart </Link></li>
                    <button className="login-btn" onClick={() => { btnLogin === 'Login' ? setBtnLogIn('Logout') : setBtnLogIn('Login') }}
                    >
                        {btnLogin}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;