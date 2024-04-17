import React from "react";
import logo from '../../images/logo.svg'

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="/">
                    <img src={logo} alt="logo"></img>
                </a>
                <div>
                    <p className="title">Product</p>
                    <ul className="links">
                        <li><a href="/">Overview</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Marketplace</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Integrations</a></li>
                    </ul>
                </div>
                <div>
                    <p className="title">Company</p>
                    <ul className="links">
                        <li><a href="/">About</a></li>
                        <li><a href="/">Team</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <p className="title">Connect</p>
                    <ul className="links">
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Newsletter</a></li>
                        <li><a href="/">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer