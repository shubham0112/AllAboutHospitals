import React from 'react'
import {Link} from 'react-router-dom';

const Hospitals = ({data}) => {
    const Empty=()=>{
        return (<div className="cards"><h3>No hospitals found</h3></div>)
    }
    const Full=()=>{
        return (
            <>
                <div className='card_ka_header_ka_header'>
                    <div className="card_ka_header">Hospitals</div>
                </div>
                <div className="cards">
                    {
                        data.map(
                            item=><div className="card">
                            
                                <h3>{item.name}</h3>
                                <h3>Contact</h3>
                                <button>
                                    <Link className='text-link' onClick={e => (!data) ? e.preventDefault() : null} to={`/Hospital?id=${data[0].id}`}>
                                        More info 
                                    </Link>
                                </button>
                            </div>
                        ) 
                    }   
                             
                </div>
            </>        
        )
    }
    if(data.length===0)
    return <Empty/>
    else 
    return <Full/>
    
}

export default Hospitals