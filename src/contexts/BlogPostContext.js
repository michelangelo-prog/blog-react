import React, { createContext, useReducer } from "react";
import { blogPostReducer } from "../reducers/blogPostReducer";

export const BlogPostContext = createContext()

const initialState = {
    page: 1,
    posts: [],
    postsCount: 0,
    post: null, 
    isFetching: false,
    hasError: false,
    postHasError: false,
  };

function BlogPostContextProvider(props) {
    const [state, dispatch] = useReducer(blogPostReducer, initialState)
    return (
        <BlogPostContext.Provider value={{ state, dispatch }}>
            {props.children}
        </BlogPostContext.Provider>
    )
}

export default BlogPostContextProvider;
