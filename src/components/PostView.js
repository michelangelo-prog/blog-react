import React from "react";

function PostView(props) {
  return (
    <div className="postview">
      <p>Title: {props.post.title}</p>
      <p>published: {props.post.publish_date}</p>
      <p>Content: {props.post.content}</p>
    </div>
  );
}

export default PostView;
