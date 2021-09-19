import React,{useState} from 'react'

function AddReview() {
    const [review,setReview]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        //add to database data
        setReview('');
    }
    return (
        <>
            <div className='header_ka_header'>
                <div className="header">
                    Enter your review
                </div>
            </div>
            <div className='form'>
                <form action="" onSubmit={handleSubmit}>
                    <div className="wrap-form">
                        <div className="form-group">
                            <label htmlFor="review">Review:</label>
                            <textarea type='' review="review" id="review" value={review} onChange={(e)=>setReview(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className='btn_search'>Done</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddReview
