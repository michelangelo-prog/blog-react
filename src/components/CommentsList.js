import React from "react";

import CommentView from "./CommentView";

function CommentsList(props) {
  return (
    <ol className="comment-view-grid comments-card">
      <p className="comment-title">{props.comments.length} comments</p>
      {props.comments.length > 0 && (
        <>
          <hr className="comment-title-bottom-line" />
          {props.comments.map((comment, index) => (
            <CommentView key={index} data={comment} />
          ))}
        </>
      )}
    </ol>
  );
}

export default CommentsList;
