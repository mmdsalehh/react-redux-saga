import { all } from "redux-saga/effects";
import { watchGetPostsAsync } from "./posts/postsSaga";

export function* rootSage() {
  yield all([watchGetPostsAsync()]);
}
