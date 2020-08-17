import React from "react";

import {useParams} from "react-router-dom";

function Post() {
    let { slug } = useParams();

    return (
        <div className="post">
            <h1>Slug: {slug}</h1>
        </div>
    )
}

export default Post;