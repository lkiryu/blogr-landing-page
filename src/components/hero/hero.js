import React from "react";
import './hero.css'

const Hero = () => {
    return(
        <section className="hero">
            <h1 className="title">A modern publishing platform</h1>
            <p className="description">Grow your audience and build your online brand</p>
            <div className="buttons">
                <a href="/">Start for Free</a>
                <a href="/">Learn More</a>
            </div>
        </section>
    )
}

export default Hero