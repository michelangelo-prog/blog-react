import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { BlogPostContext } from "../contexts/BlogPostContext";
import PostView from "../components/PostView";
import CommentsList from "../components/CommentsList";
import CommentForm from "../components/CommentForm"

import { getPost, getPostComments } from "../api";

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

    dispatch({
      type: "FETCH_POST_COMMENTS_REQUEST",
    });
    getPostComments(slug)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "FETCH_POST_COMMENTS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "FETCH_POST_COMMENTS_FAILURE",
        });
      });
  }, [slug]);

  return (
    <main id="page-content">
      {state.post && (
        <article id="post" className="container">
          <PostView post={state.post} />
          <CommentsList comments={state.postComments} />
          <CommentForm />
        </article>
      )}
    </main>
  );
}

export default Post;
