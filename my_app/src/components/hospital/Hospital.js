import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Departments from '../departments/Departments';
import Doctor from '../doctors/Doctor';
import Amenities from '../amenities/Amenities';
import Gallery from '../gallery/Gallery';
import Reviews from "../reviews/Reviews";
import data from '../../data';
import './Hospital.css'

//props mein id aayegi required hospital ki..
//then search for that particular hospital and display details 

const Hospital=() =>{
    const [req_hospital,setReqHospital]=useState({});
    // const [name,setName]=useState('Shubham');
    
    // setName('aufhbu');
    // console.log(name);
    const {id:id_received}=useParams();
    console.log(id_received);
    
    useEffect(()=>{
        // console.log(id_received);
        console.log("inside useEffect");
        const newHospital=data.find((obj)=>obj.id===parseInt(id_received));
        setReqHospital(newHospital);
        console.log(req_hospital);
    },[]);

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