import React from 'react'

const Search = () => {
    return (
        <>
            <h1>Search</h1>
            <div className="form">
                <form onSubmit={(e)=>{e.preventDefault();}}>
                    <div className="form-group">
                    <label>Hospital Name:</label>
                    <input type="text"/>
                    </div>
                    <div className="form-group">
                    <label>Disease:</label>
                    <input type="text"/>
                    </div>
                    <div className="form-group">
                    <button type="submit">Search</button>
                    </div>
                </form>
            </div>
           
        </>
    )
}

export default Search
