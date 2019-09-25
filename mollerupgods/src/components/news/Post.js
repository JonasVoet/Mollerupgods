import React from 'react'

const Post = (props) => {
    return (
        <figure className="posts-item">
            <img src={props.postProps.image} alt="" />
            <figcaption>{props.postProps.title}</figcaption>
            <p>{props.postProps.p}</p>
            <a href="/">{props.postProps.link}</a>
        </figure>
    )
}

export default Post
