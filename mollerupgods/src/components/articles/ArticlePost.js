import React from 'react'

const ArticlePost = (props) => {
    return (
        <figure className="articlePosts">
            <img src={props.articleProps.img} alt="Hamp" />
            <figcaption>{props.articleProps.title}</figcaption>
            <p>{props.articleProps.p}</p>
            <a href="#">{props.articleProps.link}</a>

        </figure>
    )
}

export default ArticlePost;
