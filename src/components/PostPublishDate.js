import React from "react";

function PostPublishDate(props) {
  const publishDate = new Date(props.publishDate);
  const monthName = publishDate.toLocaleString("en-us", { month: "short" });
  const month = publishDate.getUTCMonth();
  const day = publishDate.getUTCDate();
  const year = publishDate.getUTCFullYear();

  return (
    <p className="post-date-published">
      <time
        dateTime={`${year}-${month}-${day}`}
      >{`${monthName} ${day}, ${year}`}</time>
    </p>
  );
}

export default PostPublishDate;
