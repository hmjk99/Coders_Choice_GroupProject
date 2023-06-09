import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import Posts from './components/Posts'

const App=()=>{
const [posts, setPosts] = useState([])
const [displayEdit, setEdit] = useState(false)
const [displayAdd, setDisplayAdd] = useState(false)


const getPosts = () => {
  axios.get('http://localhost:3000/').then((response) => {
    setPosts(response.data)
  }).catch((error) => {
    console.log(error)
  })
}
const showAdd = () => {
setDisplayAdd(!displayAdd)
}
const handleCreate = (createdModel) => {

  axios.post("http://localhost:3000/", createdModel).then((response) => {
    let newPosts = [...posts, response.data]

    setPosts(newPosts)
  })
};

const handleDelete = (deletedModel) =>{
  axios.delete('http://localhost:3000/' + deletedModel._id).then((response) => {
    let newModel = posts.filter((post) => {
      return post._id !== deletedModel._id     
    })
    setPosts(newModel)
  })
}

const handleEdit = (updatedModel) => {
  axios.put('http://localhost:3000/' + updatedModel._id, updatedModel).then((response) => {
    let newModel = posts.map((post) => {
      return post._id !== updatedModel._id ? post : updatedModel
    })
    setPosts(newModel)
  })
}

const showEdit = () =>{
  setEdit(!displayEdit)
}
  
  useEffect(() => {
    getPosts()

  },[])
  
  return (
    <div id='content'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@400;700&display=swap');
      </style>
      <h1>Snacker!</h1>
      <button onClick={showAdd}>Add New Post</button>
      { displayAdd ? 
      <Add showAdd={showAdd} handleCreate={handleCreate} />
      : null}
      {posts.map((post) => {
        return (
          <div className='indv'>
            <Posts post={post}/>
            <button onClick={showEdit}>Edit</button>
            {displayEdit ? <Edit post={post} handleEdit={handleEdit} showEdit={showEdit}/> : null}
            <button onClick={()=>{handleDelete(post)}}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
