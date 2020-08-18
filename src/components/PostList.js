import React from "react";

import PostDetails from "./PostDetails"

function PostList(props) {
    return (
        <div>
            {props.posts.length > 0 && props.posts.map(post => (<PostDetails key={post.slug} post={post} />))}
        </div>
    );
}

export default PostList;