import axios from 'axios';

const API = "http://0.0.0.0:8000/api/v1";


export function getPosts(page) {
  return axios.get(`${API}/posts/`, {
      params: {
        page: page
      }
  })
}