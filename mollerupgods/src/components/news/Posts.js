import React from 'react';
import Post from './Post';

const Posts = (props) => {

    const allPosts = props.allPostsProps.map(s => {

        return (
            <Post postProps={s} />
        )

    });


    return (
        <div>
            {allPosts}
        </div>
    )
}

export default Posts
