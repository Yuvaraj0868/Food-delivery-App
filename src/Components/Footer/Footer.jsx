import React from "react";
import "./Footer.css"
import { assets } from "../../assets/assets";

const Footer = () =>{
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab reprehenderit repellendus veritatis iure? numquam iure nobis veniam? Distinctio eveniet minima reiciendis laboriosam quas totam rerum vero cumque voluptate, dolores explicabo fuga optio quia.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privicy Policy</li>
                </div>
                <div className="footer-content-right">
                    <ul>
                        <h2>GET IN TOUCH</h2>
                        <li>+ 91 6379342095</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="fooer-copy-right">Copyright 2024 © Tomato.com - All Right Reserved. </p>
        </div>
    )
}

export default Footer;