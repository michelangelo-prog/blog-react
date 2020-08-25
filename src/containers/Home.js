import React, { useContext } from "react";
import { BlogPostContext } from "../contexts/BlogPostContext";
import PostList from "../components/PostList";
import Paginate from "../components/Paginate";

import { getPosts } from "../api";

function Home() {
  const { state, dispatch } = useContext(BlogPostContext);

  React.useEffect(() => {
    dispatch({
      type: "FETCH_POSTS_REQUEST",
    });
    let offset = state.currentPage * state.perPage;
    getPosts(state.perPage, offset)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "FETCH_POSTS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: "FETCH_POSTS_FAILURE",
        });
      });
  }, [state.currentPage]);

  const setCurrentPage = (page) => {
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: page - 1,
    });
  };

  return (
    <main id="page-content">
      <section className="container">
        <h1 className="blog-page-title">All Blog Posts</h1>
        <p>Welcome to my food blog !</p>

        {state.isFetching ? (
          <span className="loader">LOADING...</span>
        ) : state.hasError ? (
          <span className="error">AN ERROR HAS OCCURED</span>
        ) : (
          <>
            <PostList posts={state.posts} />
            <Paginate
              currentPage={state.currentPage + 1}
              pages={Math.ceil(state.postsCount / state.perPage)}
              setPage={setCurrentPage}
            />
          </>
        )}
      </section>
    </main>
  );
}

export default Home;
