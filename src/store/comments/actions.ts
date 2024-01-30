import {createAsyncThunk} from '@reduxjs/toolkit';

import http from '../http';
import {CommentRequestType, CommentType} from '@/types/state';

export const getCommentsByPostId = createAsyncThunk<
  CommentType[],
  string,
  {rejectValue: string}
>('comments/getCommentsByPostId', async (id, apiThunk) => {
  try {
    const response = await http.get(`/posts/${id}/comments`);

    return response.data;
  } catch (e: any) {
    return apiThunk.rejectWithValue(e.message);
  }
});

export const postCommentsByPostId = createAsyncThunk<
  CommentType,
  CommentRequestType,
  {rejectValue: string}
>('comments/postCommentsByPostId', async ({postId, text}, apiThunk) => {
  try {
    const response = await http.post(`/posts/${postId}/comments`, {
      postId,
      text,
    });

    return response.data;
  } catch (e: any) {
    return apiThunk.rejectWithValue(e.message);
  }
});

export const deleteCommentsById = createAsyncThunk<
  string,
  string,
  {rejectValue: string}
>('comments/deleteCommentsById', async (id, apiThunk) => {
  try {
    await http.delete(`/comments/${id}`);

    return id;
  } catch (e: any) {
    return apiThunk.rejectWithValue(e.message);
  }
});
