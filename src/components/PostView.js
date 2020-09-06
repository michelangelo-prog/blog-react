import React from "react";

import PostPublishDate from "./PostPublishDate";

function PostView(props) {
  return (
    <>
      <header className="post-header">
        <h1 className="post-title">{props.post.title}</h1>
        <PostPublishDate publishDate={props.post.publish_date} />
      </header>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: props.post.content }}
      />
    </>
  );
}

export default PostView;
