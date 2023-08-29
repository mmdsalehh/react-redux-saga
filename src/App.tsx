import { useRef } from "react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { getPostsAsyncAction } from "./sagas/posts/postsActions";

function App() {
  const { posts, error, loading } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const isFetchedPosts = useRef<boolean>(false);

  return (
    <div className="p-2">
      {loading ? (
        <p>loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>{posts.length}</p>
      )}
      <button
        className={`rounded border px-4 py-2 font-semibold active:scale-95 ${
          !isFetchedPosts.current
            ? "bg-emerald-700 text-white"
            : "border-emerald-700 text-emerald-700"
        }`}
        onClick={() => {
          if (!isFetchedPosts.current) {
            isFetchedPosts.current = true;
          }
          dispatch(getPostsAsyncAction());
        }}
      >
        Fetch Posts
      </button>
    </div>
  );
}

export default App;
