export const blogPostReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_POSTS_REQUEST":
            return {
                ...state,
                isFetching: true,
                hasError: false
            };
        case "FETCH_POSTS_SUCCESS":
            return {
                ...state,
                posts: action.payload.results,
                postsCount: action.payload.count,
                isFetching: false
            };
        case "FETCH_POSTS_FAILURE":
            return {
                ...state,
                hasError: true,
                isFetching: false
            };
        case "FETCH_POST_REQUEST":
            return {
                ...state,
                isFetching: true,
                postHasError: false
            };
        case "FETCH_POST_SUCCESS":
            return {
                ...state,
                isFetching: false,
                post: action.payload
            };
        case "FETCH_POST_FAILURE":
            return {
                ...state,
                hasError: true,
                isFetching: false
            };
        default:
            return state;
    }
}