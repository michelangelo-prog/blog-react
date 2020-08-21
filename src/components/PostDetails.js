import React from "react";
import { Link } from "react-router-dom";

function PostDetails(props) {
  return (
    <div className="postdetails">
      <hr />
      <p>Title: {props.post.title}</p>
      <p>Summary: {props.post.summary}</p>
      <p>published: {props.post.publish_date}</p>

      <span>
        <Link to={`post/${props.post.slug}`}>Read More</Link>
      </span>

      <hr />
    </div>
  );
}

export default PostDetails;
