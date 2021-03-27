import axios from 'axios';
import {PostType} from "../types/types";

const instance = axios.create({
  baseURL: '/data',
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
    return (await  instance.get<getPostsType>('/post.json')).data;
  }
}