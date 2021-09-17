import React from 'react';
import './Doctor.css';


function Display_doctor(props){
    const {name,img,specialization,years}=props.doctor;
    return(
        <div className='hospital__doctor'>
            <img src={img} alt="image here" />
            <h3>Name : {name}</h3>
            <h3>Field of Specialization : {specialization}</h3>
            <h3>Experience : {years} years</h3>
        </div>
    )
}

function Doctor({hospital}) {
    const {doctors}=hospital;
    return (
        <div>
            <h3 className='hospital__doctorName'>List of Doctors</h3>
            <div className='hospital__doctors'>
                {
                    doctors.map((doctor)=>{
                        return <Display_doctor doctor={doctor}/>
                    })
                }
            </div>
        </div>
    );
}

export default Doctor
