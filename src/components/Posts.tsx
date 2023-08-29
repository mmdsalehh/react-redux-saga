import { useEffect, useRef } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { getPostsAsyncAction } from "../sagas/posts/postsActions";

const Posts = () => {
  const { posts, error, loading } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const isFetchedPosts = useRef<boolean>(false);

  useEffect(() => {
    if (!isFetchedPosts.current) {
      isFetchedPosts.current = true;
      dispatch(getPostsAsyncAction());
    }
  }, []);

  return (
    <section>
      {loading && (
        <div className="bg-red-600 text-center font-bold">
          <p className="animate-pulse text-white">Loading</p>
        </div>
      )}
      {error && (
        <p className="bg-red-600 text-center font-bold text-white">{error}</p>
      )}
      {!!posts.length && (
        <div className="cursor-pointer rounded border border-black px-1.5">
          {posts.map((post) => (
            <div
              className="border-b border-black p-1 pt-2 last:border-b-0 hover:bg-slate-200"
              key={post.id}
            >
              <h3 className="text-lg font-semibold">{post.title}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Posts;
