import React, { useContext } from "react";
import { BlogPostContext } from "../contexts/BlogPostContext"
import PostList from "../components/PostList";

import { getPosts } from "../api"

function Home() {
    const { state, dispatch } = useContext(BlogPostContext)

    React.useEffect(() => {
        dispatch({
            type: "FETCH_POSTS_REQUEST"
        });
        getPosts(state.page)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: "FETCH_POSTS_SUCCESS",
                    payload: response.data
                });
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: "FETCH_POSTS_FAILURE"
                });
            })    
        }
    , [state.page])

    return (
        <div className="Home">
            <PostList posts={state.posts}/>
        </div>
    )
}

export default Home;