import React from 'react';
import './Doctor.css';


function DisplayDoctor(props){
    const {name,img,specialization,years}=props.doctor;
    return(
        <div className='wrapper'>
            <div className='hospital__doctor'>
                <img className="hospital__doctorImage" src={img} alt=" imagee here" />
                <div className='column2'>
                    <div>
                        <span className='bold'>Name : </span>
                        <span>{name}</span>
                    </div>
                    <div>
                        <span className='bold'>Speciality : </span>
                        <span>{specialization}</span>
                    </div>
                    <div>
                        <span className='bold'>Experience : </span>
                        <span>{years} years</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Doctor({hospital}) {
    const {doctors}=hospital;
    return (
        <div className='wrapper'>
            <div className='hospital__doctors'>
                {
                    doctors.map((doctor)=>{
                        return <DisplayDoctor doctor={doctor}/>
                    })
                }
            </div>
        </div>
    );
}

export default Doctor
