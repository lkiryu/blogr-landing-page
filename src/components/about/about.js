import React from "react";

const About = () => {
    return(
        <section className="about">
            <div className="infos">
                <div className="info">
                    <h2 className="title">Free, open, simple</h2>
                    <p className="description">Blogr is a free and open source application backed by a large community of helpful developers. It supports
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </div>
                <div className="info">
                    <h2 className="title">Powerful tooling</h2>
                    <p className="description">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.</p>
                </div>
            </div>
        </section>
    )
}

export default About