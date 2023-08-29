import { put, takeLatest } from "redux-saga/effects";
import postService from "../../services/postService";
import {
  getPosts,
  getPostsError,
  getPostsSuccess,
} from "../../features/posts/postsSlice";
import { isAxiosError } from "axios";
import { GET_POSTS_ASYNC } from "./postsTypes";

function* getPostsAsync() {
  yield put(getPosts());
  try {
    const { data } = yield postService.getAll();
    yield put(getPostsSuccess(data));
  } catch (err) {
    if (isAxiosError(err)) {
      yield put(getPostsError(err));
    }
  }
}

export function* watchGetPostsAsync() {
  yield takeLatest(GET_POSTS_ASYNC, getPostsAsync);
}
