import {useState} from 'react'

const Edit = (props) =>{
const [post, setPost] = useState({...props.post})
const handleChange = (event) => {
  setPost({...post, [event.target.name]: event.target.value})
}
const handleSubmit = (event) =>{
    event.preventDefault()
    props.handleEdit(post)
    props.showEdit()
}
    return (
      <div id='edit'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            name="date"
            onChange={handleChange}
            value={post.date}
          />
          <br />
          <br />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={post.author}
          />
          <br />
          <br />
          <label htmlFor="img">Image URL:</label>
          <input
            type="text"
            name="img"
            onChange={handleChange}
            value={post.img}
          />
          <br />
          <br />
          <label htmlFor="body"> Post:</label>
          <textarea
            name="body"
            value={post.body}
            onChange={handleChange}
          ></textarea>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
}

export default Edit