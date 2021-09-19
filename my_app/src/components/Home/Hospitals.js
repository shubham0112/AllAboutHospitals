import React from 'react'


const Hospitals = ({data}) => {
    const Empty=()=>{
        return (<div className="cards"><h3>No hospitals found</h3></div>)
    }
    const Full=()=>{
        return (
            
                <div className="cards">
                    {
                       data.map(item=><div className="card">
                          
                       <h3>{item.name}</h3>
                       <h3>Contact</h3>
                       <button>more info</button>
                   </div>) 
                      }
                    </div>
                
        )
    }
    if(data.length===0)
    return <Empty/>
    else 
    return <Full/>
  
    // return (
    //     <>
    //     if(data.length==0){
    //     (<div className="cards"><h1>Empty</h1></div>)
    // }   else{
    //       <div className="cards">
    //           {
    //              data.map(item=><div className="card">
                    
    //              <h3>{item.name}</h3>
    //              <h3>Contact</h3>
    //              <button>more info</button>
    //          </div>) 
    //             }
    //           </div>
    //      }     
    //     </>
    
}

export default Hospitals
