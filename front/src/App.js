import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'

const App=()=>{
const [posts, setPosts] = useState([])

const getPosts = () => {
  axios.get('http://localhost:3000/').then((response) => {
    setPosts(response)
  }).catch((error) => {
    console.log(error)
  })
}

const handleCreate = (createdModel) => {
  axios.post("http://locahost:3000/", createdModel).then((response) => {
    let newPosts = [...posts, response.createdModel]
    setPosts(newPosts)
  })
};

const handleDelete = (deletedModel) =>{
  axios.delete('http://localhost:3000/' + deletedModel._id).then((response) => {
    let newModel = [posts.filter((post) => {
      return post._id !== deletedModel._id     
    })]
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
  
  useEffect(() => {
    getPosts()
  })
  
  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

export default App;
