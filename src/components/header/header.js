import React from "react";
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <a href="/">
                <img src={logo} alt="logo"></img>
            </a>

            <nav>
                <ul className="nav-list">
                    <li className="nav-link">
                        <h2 className="title">Product</h2>
                        <ul className="links">
                            <li><a href="/">Overview</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="/">Marketplace</a></li>
                            <li><a href="/">Features</a></li>
                            <li><a href="/">Integrations</a></li>
                        </ul>
                    </li>
                    <li className="nav-link">
                        <h2 className="title">Company</h2>
                        <ul className="links">
                            <li><a href="/">About</a></li>
                            <li><a href="/">Team</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Careers</a></li>
                        </ul>
                    </li>
                    <li className="nav-link">
                        <h2 className="title">Connect</h2>
                        <ul className="links">
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Newsletter</a></li>
                            <li><a href="/">LinkedIn</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="nav-list login">
                    <li className="nav-link"><a href="/">Login</a></li>
                    <li className="nav-link"><a href="/">Sign Up</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header