import React from 'react';
import './Department.css'

function Departments({hospital}) {
    const {id,departments}=hospital;
    return (
        <div className="wrapper">
            <div className="hospital__departments">
                {
                    departments.map((department)=>{
                        return <h3 key={id} className="hospital__department">{department}</h3>
                    })
                }
            </div>
        </div>
    );
}

export default Departments
