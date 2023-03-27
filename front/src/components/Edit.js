import {useState} from 'react'

const Edit = (props) =>{
const [post, setPost] = useState({...props.post})
const handleChange = (event) => {
  setPost({...post, [event.target.name]: event.target.value})
}
const handleSubmit = (event) =>{
    event.preventDefault()
    props.handleEdit(post)
}
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date: </label>
          <input
            type="text"
            name="date"
            onChange={handleChange}
            value={post.date}
          />
          <br />
          <br />
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={post.author}
          />
          <br /> <br />
          <label htmlFor="img">image URL: </label>
          <input
            type="text"
            name="img"
            onChange={handleChange}
            value={post.img}
          />
          <label htmlFor="body"> Post </label>
          <textarea
            name="reservedForAdoption"
            value={post.body}
            onChange={handleChange}
          ></textarea>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
}

export default Edit