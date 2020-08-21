import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { BlogPostContext } from "../contexts/BlogPostContext";
import PostView from "../components/PostView";

import { getPost } from "../api";

function Post() {
  const { state, dispatch } = useContext(BlogPostContext);
  const { slug } = useParams();

  React.useEffect(() => {
    dispatch({
      type: "FETCH_POST_REQUEST",
    });
    getPost(slug)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "FETCH_POST_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "FETCH_POST_FAILURE",
        });
      });
  }, [slug]);

  return (
    <div className="post">
      {state.isFetching ? (
        <span className="loader">LOADING...</span>
      ) : state.hasError ? (
        <span className="error">AN ERROR HAS OCCURED</span>
      ) : (
        state.post && <PostView post={state.post} />
      )}
    </div>
  );
}

export default Post;
