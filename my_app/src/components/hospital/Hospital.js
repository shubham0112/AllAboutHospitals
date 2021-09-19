import React from 'react'
import Departments from '../departments/Departments';
import Doctor from '../doctors/Doctor';
import Amenities from '../amenities/Amenities';
import Gallery from '../gallery/Gallery';
import Reviews from "../reviews/Reviews";
import data from '../../data';
import './Hospital.css'

//props mein id aayegi required hospital ki..
//then search for that particular hospital and display details 

const Hospital=({id}) =>{
    let req_hospital=data.find((obj)=>obj.id===id);
    return (
        <div className='hospital__wrap'>

            <div className='hospital__name_ka_header'>
                <div className="hospital__name">
                    {req_hospital.name}
                </div>
            </div>

            {/* <h1 className='hospital__name'>{req_hospital.name}</h1> */}

            <p className={req_hospital.beds>0?"green":"red"}>(No. of beds available : {req_hospital.beds})</p>

            <div className='phirse_header_ka_header'>
                <div className="phirse_header">
                    Available departments
                </div>
            </div>
            <div className='hospital__row'>
                <Departments hospital={req_hospital}/>
            </div>

            <div className='phirse_header_ka_header'>
                <div className="phirse_header">
                    List of Doctors
                </div>
            </div>
            <div className='hospital__row'>
                <Doctor hospital={req_hospital}/>
            </div>

            <div className='phirse_header_ka_header'>
                <div className="phirse_header">
                    Amenities provided by the hospital
                </div>
            </div>
            <div className='hospital__row'>
                <Amenities hospital={req_hospital}/>
            </div>


            <div className='phirse_header_ka_header'>
                <div className="phirse_header">
                    Photo Gallery of the Hospital
                </div>
            </div>
            <div className='hospital__row'>
                <Gallery hospital={req_hospital}/>
            </div>

            <div className='phirse_header_ka_header'>
                <div className="phirse_header">
                    Reviews by our users
                </div>
            </div>
            <div className='hospital__row'>
                <Reviews hospital={req_hospital}/>
            </div>
        </div>
    );
}

export default Hospital