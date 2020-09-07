import axios from "axios";

const API = "http://0.0.0.0:8000/api/v1";

export function getPosts(limit, offset) {
  return axios.get(`${API}/posts/`, {
    params: {
      limit: limit,
      offset: offset,
    },
  });
}

export function getPost(slug) {
  return axios.get(`${API}/posts/${slug}`);
}

export function getPostComments(slug) {
  return axios.get(`${API}/posts/${slug}/comments`);
}

export function addPostComment(slug, data) {
  return axios.post(`${API}/posts/${slug}/comments`, (data = data));
}
