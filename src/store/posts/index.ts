import {createSlice} from '@reduxjs/toolkit';
import {IPostsState} from '@/types/state';
import {deletePosts, getPosts, postPosts, putPosts} from './actions';

const initialState: IPostsState = {
  data: [],
  loading: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, {payload}) => {
        state.data = payload;
        state.loading = false;
      })
      .addCase(getPosts.rejected, (state, {payload}) => {
        state.loading = false;
        console.log(payload);
      });

    builder
      .addCase(postPosts.pending, state => {
        state.loading = true;
      })
      .addCase(postPosts.fulfilled, (state, {payload}) => {
        state.data.push(payload);
        state.loading = false;
      })
      .addCase(postPosts.rejected, (state, {payload}) => {
        state.loading = false;
        console.log(payload);
      });

    builder
      .addCase(putPosts.pending, state => {
        state.loading = true;
      })
      .addCase(putPosts.fulfilled, (state, {payload}) => {
        const index = state.data.findIndex(e => e.id === payload.id);
        state.data[index] = payload;
        state.loading = false;
      })
      .addCase(putPosts.rejected, (state, {payload}) => {
        state.loading = false;
        console.log(payload);
      });

    builder
      .addCase(deletePosts.pending, state => {
        state.loading = true;
      })
      .addCase(deletePosts.fulfilled, (state, {payload}) => {
        state.data = state.data.filter(e => e.id !== payload);
        state.loading = false;
      })
      .addCase(deletePosts.rejected, (state, {payload}) => {
        state.loading = false;
        console.log(payload);
      });
  },
});

export default postsSlice.reducer;
