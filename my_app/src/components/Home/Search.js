import React from 'react'

const Search = ({search,hospitalName,setHospitalName,disease,setDisease}) => {
    const handlesubmit = (e)=>{
        e.preventDefault();
        search(hospitalName,disease);
    }
    return (
        <>
            <div className='header_ka_header'>
                <div className="header">
                    Search
                </div>
            </div>
            <div className="form">
                <form onSubmit={(e)=>{e.preventDefault()}}>
                    <div className="wrap-form">
                        <div className="form-group">
                            <label>Hospital Name:</label>
                            <input type="text" value={hospitalName} onChange={(e)=>{setHospitalName(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Disease:</label>
                            <input type="text" value={disease} onChange={(e)=>{setDisease(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className='btn_search' onClick={(e)=>handlesubmit(e)}>Search</button>
                        </div>
                    </div>
                </form>
            </div>
           
        </>
    )
}

export default Search
