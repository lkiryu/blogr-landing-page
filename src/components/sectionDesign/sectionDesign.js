import React from "react";

import './sectionDesign.css'

const SectionDesign = () => {
    return (
        <section className="design">
            <h2 className="title">Designed for the future</h2>
            <div className="info-content">
                <div className="info">
                    <h3 className="info-title">Introducing an extensible editor</h3>
                    <p className="description">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                        change the looks of a blog.</p>
                </div>
                <div className="info">
                    <h3 className="info-title">Robust content management</h3>
                    <p className="description">Flexible content management enables users to easily move through posts. Increase the usability of your blog
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                </div>
            </div>
        </section>
    )
}

export default SectionDesign