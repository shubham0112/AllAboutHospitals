import React,{useState} from 'react'

//if user is not already signed in then we will show signup page
//find a way to go back to add review page (/AddReview/:id might work)

function SignUp() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        //add to database data
        setName('');
        setPassword('');
        setEmail('');
    }
    return (
        <>
            <div className='header_ka_header'>
                    <div className="header">
                        Enter details
                    </div>
            </div>
            <div className='form'>
                <form action="" onSubmit={handleSubmit}>
                    <div className="wrap-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className='btn_search'>Sign Up / Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp