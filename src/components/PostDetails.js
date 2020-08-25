import React from "react";
import { Link } from "react-router-dom";

function PostDetails(props) {
  const linkToPost = `post/${props.post.slug}`;
  return (
    <li className="post-preview post-card">
      <h2 className="post-preview-title">
        <Link to={linkToPost} className="underlined-link">
          {props.post.title}
        </Link>
      </h2>

      <p>{props.post.summary}</p>
      <p>published: {props.post.publish_date}</p>

      <span>
        <Link to={linkToPost} className="underlined-link">
          Read this post &#8594;
        </Link>
      </span>
    </li>
  );
}

export default PostDetails;
