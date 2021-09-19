import React from 'react'
import './Gallery.css'

function Gallery({hospital}) {
    const {id,gallery}=hospital;
    return (
        <div className='wrapper'>
            <div className="hospital__gallery">
                {
                    gallery.map((image)=>{
                        return <img key={id} className="hospital__img" src={image} alt="this is an imagee" />
                    })
                }
            </div>
        </div>
    );
}

export default Gallery
