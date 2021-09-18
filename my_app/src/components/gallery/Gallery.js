import React from 'react'
import './Gallery.css'

function Gallery({hospital}) {
    const {gallery}=hospital;
    return (
        <div className='wrapper'>
            <h3 className="hospital__galleryName">Photo Gallery of the Hospital</h3>
            <div className="hospital__gallery">
                {
                    gallery.map((image)=>{
                        return <img className="hospital__img" src={image} alt="this is an imagee" />
                    })
                }
            </div>
        </div>
    );
}

export default Gallery
