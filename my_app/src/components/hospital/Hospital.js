import React from 'react'
import Departments from '../departments/Departments';
import Doctor from '../doctors/Doctor';
import data from '../../data';
import './Hospital.css'

//props mein id aayegi required hospital ki..
//then search for that particular hospital and display details 

const Hospital=({id}) =>{
    let req_hospital=data.find((obj)=>obj.id===id);
    return (
        <div className='hospital__wrap'>

            <h1 className='hospital__name'>{req_hospital.name}</h1>

            <div className='hospital__row'>
                {/* departments component*/}
                <Departments hospital={req_hospital}/>
            </div>

            <div className='hospital__row'>
                {/* hospital component*/}
                <Doctor hospital={req_hospital}/>
            </div>

            <div>
                <h1>I am rating component</h1>
                {/* rating component*/}
            </div>
            <div>
                <h1>I am amenities component</h1>
                {/* amenities component*/}
            </div>
            <div>
                <h1>I am gallery component</h1>
                {/* gallery component*/}
            </div>
            <div>
                <h1>I am number of beds available component</h1>
                {/* available number of beds component*/}
            </div>
        </div>
    );
}

export default Hospital