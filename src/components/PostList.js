import React from "react";

import PostDetails from "./PostDetails";

function PostList(props) {
  return (
    <ol className="post-preview-grid">
      {props.posts.length > 0 &&
        props.posts.map((post) => <PostDetails key={post.slug} post={post} />)}
    </ol>
  );
}

export default PostList;
