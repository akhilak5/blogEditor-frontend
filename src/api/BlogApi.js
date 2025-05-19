
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/blogs'; 

export const saveDraft = (data) => {
  return axios.post(`${BASE_URL}/save-draft`, data);
};

export const publishBlog = (data) => {
  return axios.post(`${BASE_URL}/publish`, data);
};
