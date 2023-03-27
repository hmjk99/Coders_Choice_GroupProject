const Post = (props) =>{
    return(
        <div>
            <h1>{props.post.date}</h1>
            <h1>{props.post.author}</h1>
            <img src={props.post.img}/>
            <h1>{props.post.body}</h1>
        </div>
    )
}

export default Post