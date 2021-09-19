import React from 'react';
import './Amenities.css'

function Amenities({hospital}) {
    const {id,amenities}=hospital;
    return (
        <div className="wrapper">
            <div className="hospital__amenities">
                {
                    amenities.map((amenity)=>{
                        return <h3 key={id} className="hospital__amenity">{amenity}</h3>
                    })
                }
            </div>
        </div>
    );
}

export default Amenities
