import {useState} from 'react'

const Add = (props) =>{
    const [posts, setPosts]= useState({date: '', author: '', img: '', body: ''})

    const handleChange = (event) => {
        setPosts({...posts, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(posts)
        props.showAdd()
    }

    return(
        <div id='add'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='date'>Date:</label>
                <input type='text' name='date' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='author'>Author:</label>
                <input type='text' name='author' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='img'>Image:</label>
                <input type='text' name='img' onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor='body'>Content:</label>
                <input type='text' name='body' onChange={handleChange}/>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Add