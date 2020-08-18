import React from "react";

function PostDetails(props) {
    return (
        <div className="postdetails">
            <hr/>
                <p>Title: {props.post.title}</p>
                <p>Summary: {props.post.summary}</p>
                <p>published: {props.post.publish_date}</p>
            <hr/>
        </div>
    )
}

export default PostDetails;