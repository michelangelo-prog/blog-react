import React from "react";
import { Link } from "react-router-dom";

function PostDetails(props) {
  const publish_date = new Date(props.post.publish_date);
  const month_name = publish_date.toLocaleString("en-us", { month: "short" });
  const month = publish_date.getUTCMonth();
  const day = publish_date.getUTCDate();
  const year = publish_date.getUTCFullYear();

  const linkToPost = `post/${props.post.slug}`;
  return (
    <li className="post-preview post-card">
      <h2 className="post-preview-title">
        <Link to={linkToPost} className="underlined-link">
          {props.post.title}
        </Link>
      </h2>

      <p className="post-date-published">
        <time
          dateTime={`${year}-${month}-${day}`}
        >{`${month_name} ${day}, ${year}`}</time>
      </p>

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
