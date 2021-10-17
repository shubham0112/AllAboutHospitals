// import React from 'react'
// import Hospitals from './Hospitals.js'
// import Search from './Search'
// import '../Home/Home.css'
// const Home = () => {
//     return (
//         <>
           
//             <Search/>
//             <Hospitals/>
//         </>
//     )
// }

// export default Home

import {useState} from 'react'
import Hospitals from './Hospitals.js'
import Search from './Search'

import '../Home/Home.css'
import data from '../../data'
const Home = () => {
    const [disease,setDisease] =useState('');
    const [hospitalName,setHospitalName] =useState('');
    const [filtered, setFiltered] =useState([]);
    const search=(hospitalName,disease)=>{
        filtered.splice(0,filtered.length)
        const x=(data.filter(item => item.name===hospitalName&&disease===item.disease));
        // console.log(x);
        setFiltered(x);
        setHospitalName('');
        setDisease('');
    }
    return (
        <div className="Home">
            <Search search={search} hospitalName={hospitalName} setHospitalName={setHospitalName} disease={disease} setDisease={setDisease}/> 
    
            <Hospitals data={filtered}/>
            
        </div>
    )
}

export default Home