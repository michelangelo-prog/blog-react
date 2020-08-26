import React from "react";
import { Link } from "react-router-dom";

import PostPublishDate from "./PostPublishDate";

function PostDetails(props) {
  const linkToPost = `post/${props.post.slug}`;

  return (
    <li className="post-preview post-card">
      <h2 className="post-preview-title">
        <Link to={linkToPost} className="underlined-link">
          {props.post.title}
        </Link>
      </h2>

      <PostPublishDate publishDate={props.post.publish_date} />

      <p className="post-preview-description">{props.post.summary}</p>

      <span>
        <Link to={linkToPost} className="underlined-link">
          Read this post &#8594;
        </Link>
      </span>
    </li>
  );
}

export default PostDetails;
