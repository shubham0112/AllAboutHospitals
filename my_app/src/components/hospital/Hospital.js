import React from 'react'
import Departments from '../Departments';
import {data} from '../../data';

//props mein id aayegi required hospital ki..
//then search for that particular hospital and display details 

const Hospital=({id}) =>{
    return (
        <div>
            <h1>xyz Hospital</h1>
            <div>
                <Departments/>
            </div>
            <div>
                <h1>I am doctors component</h1>
                {/* doctor component*/}
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