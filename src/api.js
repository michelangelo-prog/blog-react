import axios from 'axios';

const API = "http://0.0.0.0:8000/api/v1";


export function getPosts(limit, offset) {
  return axios.get(`${API}/posts/`, {
      params: {
        limit: limit,
        offset: offset,
      }
  })
}