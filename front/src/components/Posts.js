const Post = (props) =>{
    return(
        <div className="food">
            <h3>Date: {props.post.date}</h3>
            <h3>Author: {props.post.author}</h3>
            <img src={props.post.img}/>
            <p>{props.post.body}</p>
        </div>
    )
}

export default Post