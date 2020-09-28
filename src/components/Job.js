import React from 'react';

export default function Job({job}) {
    const { offices, title } = job;
    
    return (
        <div className="job-container">
            {offices.map((val, index) => {
                return (
                <div className="job-location-title" key={index}>
                    { index > 0 ? <span> , {val.name}</span>: <span>{val.name}</span> }
                    </div>
                    );
            })}
            <div className="job-position-title">{title}</div>
        </div>
    )
}


