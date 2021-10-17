import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Departments from '../departments/Departments';
import Doctor from '../doctors/Doctor';
import Amenities from '../amenities/Amenities';
import Gallery from '../gallery/Gallery';
import Reviews from "../reviews/Reviews";
import data from '../../data';
import './Hospital.css'
import queryString from 'query-string'

//props mein id aayegi required hospital ki..
//then search for that particular hospital and display details 

const Hospital=({location}) =>{
    const [req_hospital,setReqHospital]=useState({
        id:829048982,
        disease:'corona',
        name:"Multiply hospital",
        departments:["cardiology","neurology","pediatrics"],
        doctors:[{name:"Siddhant",img:"",specialization:"Heart",years:5},{name:"Jon",img:"",specialization:"Eye",years:6},{name:"Anna",img:"",specialization:"Brain",years:15}],
        beds:20,
        amenities:["ac","tv"],
        reviews:[{img:"",text:""}],
    });
    const [id_received,setId_received]=useState('');
   
    
    useEffect(()=>{
        
        const dat=queryString.parse(location.search);
        const {id}=dat;
        setId_received(id);
        console.log(id_received)
        const newHospital=data.find((obj)=>obj.id.toString()===id_received);
        console.log(newHospital);
        if(newHospital)
        setReqHospital(newHospital);
    },[location.search,id_received,location]);

    return (
        <div className='hospital__wrap'>

            <div className='hospital__name_ka_header'>
                <div className="hospital__name">
                    {req_hospital.name}
                </div>
            </div>

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