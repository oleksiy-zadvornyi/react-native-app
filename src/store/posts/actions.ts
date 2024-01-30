import {createAsyncThunk} from '@reduxjs/toolkit';

import http from '../http';
import {PostRequestType, PostType} from '@/types/state';

export const getPosts = createAsyncThunk<
  PostType[],
  undefined,
  {rejectValue: string}
>('posts/getPosts', async (_, apiThunk) => {
  try {
    const response = await http.get('/posts');

    return response.data;
  } catch (e: any) {
    return apiThunk.rejectWithValue(e.message);
  }
});

export const postPosts = createAsyncThunk<
  PostType,
  PostRequestType,
  {rejectValue: string}
>('posts/postPosts', async (post, apiThunk) => {
  try {
    const response = await http.post('/posts', post);

    return response.data;
  } catch (e: any) {
    return apiThunk.rejectWithValue(e.message);
  }
});

export const putPosts = createAsyncThunk<
  PostType,
  PostType,
  {rejectValue: string}
>('posts/putPosts', async ({id, ...post}, apiThunk) => {
  try {
    const response = await http.put(`/posts/${id}`, post);

    return response.data;
  } catch (e: any) {
    return apiThunk.rejectWithValue(e.message);
  }
});

export const deletePosts = createAsyncThunk<
  string,
  string,
  {rejectValue: string}
>('posts/deletePosts', async (id, apiThunk) => {
  try {
    await http.delete(`/posts/${id}`);

    return id;
  } catch (e: any) {
    return apiThunk.rejectWithValue(e.message);
  }
});
