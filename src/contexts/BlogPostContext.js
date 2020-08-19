import React, { createContext, useReducer } from "react";
import { blogPostReducer } from "../reducers/blogPostReducer";

export const BlogPostContext = createContext();

const initialState = {
  posts: [],
  postsCount: 0,
  currentPage: 0,
  perPage: 6,
  post: null,
  isFetching: false,
  hasError: false,
  postHasError: false,
};

function BlogPostContextProvider(props) {
  const [state, dispatch] = useReducer(blogPostReducer, initialState);
  return (
    <BlogPostContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BlogPostContext.Provider>
  );
}

export default BlogPostContextProvider;
