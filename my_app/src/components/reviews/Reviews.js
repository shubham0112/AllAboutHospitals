import React from 'react';
import {Link} from 'react-router-dom';
import './Reviews.css';

function DisplayUserReview(props){
    const {email,img,text}=props.user;
    return(
        <div className='wrapper'>
            <div className='hospital__review'>
                <img className='hospital__userImage' src={img} alt=" imagee here" />
                <div className='column2'>
                    <div className='give_padding'>
                        <h3>Email : </h3>
                        <span>{email}</span>
                    </div>
                    <p className='bold'>"{text}"</p>
                </div>
            </div>
        </div>
    )
}

function Reviews({hospital}) {
    const {id,reviews}=hospital;
    return (
        <div className='wrapper'>
            <div className="hospital__reviews">
                {
                    reviews.map((user)=>{
                        return <DisplayUserReview key={id} user={user}/>
                    })
                }
            </div>
            {/* if signed in already then add review comp otherwise... */}
            <button className='btn'>{true?<Link className='text-link' to='/AddReview'> Add review </Link>:<Link className='text-link' to='/SignUp' > Add review </Link>} </button>
        </div>
    )
}

export default Reviews
