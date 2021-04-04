import axios from 'axios';
import { PostType } from '../types/postType';

const instance = axios.create({
  baseURL: '/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

type getPostsType = {
  posts: Array<PostType>
}

export const mainApi = {
  async getPostApi() {
    return (await  instance.get<getPostsType>('/api/posts')).data;
  }
}