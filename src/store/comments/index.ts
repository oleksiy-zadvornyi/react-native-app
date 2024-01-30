import {createSlice} from '@reduxjs/toolkit';
import {ICommentsState} from '@/types/state';
import {
  deleteCommentsById,
  getCommentsByPostId,
  postCommentsByPostId,
} from './actions';

const initialState: ICommentsState = {
  data: [],
  loading: false,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCommentsByPostId.pending, state => {
        state.loading = true;
      })
      .addCase(getCommentsByPostId.fulfilled, (state, {payload}) => {
        state.data = payload;
        state.loading = false;
      })
      .addCase(getCommentsByPostId.rejected, (state, {payload}) => {
        state.loading = false;
        console.log(payload);
      });

    builder
      .addCase(postCommentsByPostId.pending, state => {
        state.loading = true;
      })
      .addCase(postCommentsByPostId.fulfilled, (state, {payload}) => {
        state.data.push(payload);
        state.loading = false;
      })
      .addCase(postCommentsByPostId.rejected, (state, {payload}) => {
        state.loading = false;
        console.log(payload);
      });

    builder
      .addCase(deleteCommentsById.pending, state => {
        state.loading = true;
      })
      .addCase(deleteCommentsById.fulfilled, (state, {payload}) => {
        state.data = state.data.filter(e => e.id !== payload);
        state.loading = false;
      })
      .addCase(deleteCommentsById.rejected, (state, {payload}) => {
        state.loading = false;
        console.log(payload);
      });
  },
});

export default commentsSlice.reducer;
