import React from "react";
import phones from '../../images/illustration-phones.svg'

import './sectionState.css'

const SectionState = () => {
    return (
        <section className="state">
            <div className="state-content">
                <img src={phones} alt="phones"></img>

                <div className="info">
                    <h2 className="title">State of the Art Infrastructure</h2>
                    <p className="description">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </div>
        </section>
    )
}

export default SectionState