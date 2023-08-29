import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type AxiosError } from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const initialState = {
  posts: [],
  loading: false,
  error: null,
} as {
  posts: Post[];
  loading: boolean;
  error: null | string;
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.posts = [];
      state.loading = true;
      state.error = null;
    },
    getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },
    getPostsError: (state, action: PayloadAction<AxiosError>) => {
      state.posts = [];
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { getPosts, getPostsError, getPostsSuccess } = postsSlice.actions;

export default postsSlice.reducer;
