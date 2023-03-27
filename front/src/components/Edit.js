import {useState} from 'react'

const Edit = (props) =>{
    return (
      <div>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="date">Date: </label>
          <input
            type="text"
            name="date"
            onChange={props.handleChange}
            value={post.date}
          />
          <br />
          <br />
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            onChange={props.handleChange}
            value={post.author}
          />
          <br /> <br />
          <label htmlFor="img">image URL: </label>
          <input
            type="text"
            name="img"
            onChange={props.handleChange}
            value={post.img}
          />
          <label htmlFor="body"> Post </label>
          <textarea
            name="reservedForAdoption"
            placeholder='post.body'
            onChange={props.handleChange}
          ></textarea>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
}

export default Edit