import React from "react";

function CommentView(props) {
  const publishDate = new Date(props.data.publish_date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formatedDate = publishDate.toLocaleDateString("en-us", options);

  return (
    <li className="comment-view">
      <p className="comment-view-author">{props.data.name}</p>
      <p className="comment-view-date">
        <time dateTime={props.data.publish_date}>{formatedDate}</time>
      </p>
      <p className="comment-view-body">{props.data.body}</p>
    </li>
  );
}

export default CommentView;
