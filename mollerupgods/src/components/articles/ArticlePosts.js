import React from 'react';
import ArticlePost from './ArticlePost';


const ArticlePosts = (props) => {
    const allArticles = props.allArticleProps.map(s => {

        return (
            <ArticlePost articleProps={s} />
        )
    });




    return (
        <div>
            {allArticles}
        </div>
    )
}

export default ArticlePosts
