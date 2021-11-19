import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <div className=" footer bg-warning">
            <div className="container footer-text text-center">
                <div className="text-white">
                    <h2 className="text-danger">Languages</h2>
                    <p>Bangla</p>
                    <p>English</p>
                    <p>Hindi</p>
                    <p>ESP</p>
                </div>

                <div className="text-white ">
                    <h2 className="text-danger">Under Service</h2>
                    <p>Dhaka</p>
                    <p>Chittagong</p>
                    <p>Khulna</p>
                </div>
                <div className="text-white">
                    <h2 className="text-danger">Services</h2>
                    <p>Service</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className="text-white mt-4 font-awsome">
                    <p><Link to="/" className="fa fa-facebook"></Link></p>
                    <p><Link to="/" className="fa fa-twitter"></Link></p>
                    <p><Link to="/" className="fa fa-linkedin"></Link></p>
                    <p><Link to="/" className="fa fa-youtube"></Link></p>
                    <p><Link to="/" className="fa fa-printerest"></Link></p>
                </div>
            </div>
            <div className="bg-light">
                <h6 className="text-dark text-center p-4">© Copyright 1999-2021 by Refsnes Data. All Rights Reserved.</h6></div>
        </div>
    );
};

export default Footer;