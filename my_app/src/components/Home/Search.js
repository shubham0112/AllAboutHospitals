import React from 'react'


const Search = ({search,hospitalName,setHospitalName,disease,setDisease}) => {

    const handlesubmit = (e)=>{
        e.preventDefault();
        search(hospitalName,disease);
    }
    
    return (
        <>
            <div className="form">
            <form >
                <div className="form-group">
                <label>Hospital Name:</label>
                <input type="text" value={hospitalName} onChange={(e)=>{setHospitalName(e.target.value)}}/>
                </div>
                <div className="form-group">
                <label>Disease:</label>
                <input type="text" value={disease} onChange={(e)=>{setDisease(e.target.value)}}/>
                </div>
                <div className="form-group">
                <button type="submit" onClick={(e)=>handlesubmit(e)}>Search</button>
                </div>
            </form>
            </div>
           
        </>
    )
}

export default Search
