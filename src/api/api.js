import axios from 'axios';

const instance = axios.create({
  baseURL: '/data',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const mainApi = {
  async getPostApi() {
    return (await  instance.get('/post.json')).data;
  }
}