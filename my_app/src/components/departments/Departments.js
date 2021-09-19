import React from 'react';
import './Department.css'

function Departments({hospital}) {
    const {departments}=hospital;
    return (
        <div className="wrapper">
            <div className="hospital__departments">
                {
                    departments.map((department)=>{
                        return <h3 className="hospital__department">{department}</h3>
                    })
                }
            </div>
        </div>
    );
}

export default Departments
