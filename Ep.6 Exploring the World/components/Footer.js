import { LOGO_URL } from "../utils/constants";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img className="footerlogo-img" src={LOGO_URL}></img>
            </div>
            <div className="quick-links">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Team</li>
                </ul>
            </div>

            <div className="contact-us">
                <ul>
                    <li>Help & Support</li>
                    <li>Partner with us</li>
                    <li>Ride with us</li>
                </ul>
            </div>


            <div className="disclaimer">Copyright © 2025 Foody Wave - All Rights Reserved</div>
        </div>
    )
};

export default Footer;