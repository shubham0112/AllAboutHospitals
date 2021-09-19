import React from 'react';
import './Reviews.css';

function DisplayUserReview(props){
    const {email,img,text}=props.user;
    return(
        <div className='wrapper'>
            <div className='hospital__review'>
                <img className='hospital__userImage' src={img} alt=" imagee here" />
                <div className='column2'>
                    <h3>email : </h3>
                    <span>{email}</span>
                    <p className='bold'>"{text}"</p>
                </div>
            </div>
        </div>
    )
}

function Reviews({hospital}) {
    const {reviews}=hospital;
    return (
        <div className='wrapper'>
            <h3 className='hospital__UserHeading'>Reviews by our users</h3>
            <div className="hospital__reviews">
                {
                    reviews.map((user)=>{
                        return <DisplayUserReview user={user}/>
                    })
                }
            </div>
            <button className='btn'>Add review</button>
        </div>
    )
}

export default Reviews