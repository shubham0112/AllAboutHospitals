import React from 'react'

const Search = () => {
    return (
        <>
            <div className='header_ka_header'>
                <div className="header">
                    Search
                </div>
            </div>
            <div className="form">
                <form onSubmit={(e)=>{e.preventDefault();}}>
                    <div className="wrap-form">
                        <div className="form-group">
                            <label>Hospital Name:</label>
                            <input type="text"/>
                        </div>
                        <div className="form-group">
                            <label>Disease:</label>
                            <input type="text"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className='btn_search'>Search</button>
                        </div>
                    </div>
                </form>
            </div>
           
        </>
    )
}

export default Search
