import React from 'react'
import heroImage from '../images/open-positions.png';
import heroImageAnimate from '../images/open-positions.gif';

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-label">
                OPEN POSITIONS
            </div>
            <div className="hero-heading">Help us create the future of software</div>
            <div className="hero-description">The ability to make software opens up tremendous creative possibilities, and we want to empower people to bring these possibilities to life--no matter how ambitious. The good news is that creating software doesn't have to mean writing code. What will you create?</div>
            <div className="hero-image-section">
                <img 
                className="hero-image"
                alt="sharing"
                src={heroImage} 
                onMouseOver={e => (e.currentTarget.src = heroImageAnimate)}
                onMouseOut={e => (e.currentTarget.src = heroImage)}
                />
                </div>
        </div>
    )
}

