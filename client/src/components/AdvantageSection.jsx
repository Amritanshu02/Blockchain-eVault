import React from 'react';
import AdvantageCard from "./AdvantageCard";
import { advCard } from '../data';
import "../styles/AdvantageSection.css";

const AdvantageSection = () => {
    return (
        <div className='advantage-section-main-container'>
            <h1 className="advantage-section-title">Our Competitive <span>Advantages</span></h1>
            <div className="advantage-section-content">
                {advCard && advCard.map((item) => {
                    return <AdvantageCard title={item.title} content={item.content} />
                })}
            </div>
        </div>
    )
}

export default AdvantageSection;