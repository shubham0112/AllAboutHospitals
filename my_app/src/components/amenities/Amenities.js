import React from 'react';
import './Amenities.css'

function Amenities({hospital}) {
    const {amenities}=hospital;
    return (
        <div className="wrapper">
            <h3 className="hospital__amenityHeading">Amenities provided by the hospital</h3>
            <div className="hospital__amenities">
                {
                    amenities.map((amenity)=>{
                        return <h3 className="hospital__amenity">{amenity}</h3>
                    })
                }
            </div>
        </div>
    );
}

export default Amenities