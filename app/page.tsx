import {POSTS_URL} from "@/lib/constants/endpoints";
import {TPostsResponse} from "@/lib/types/posts";
import PostsLists from "@/lib/components/PostsList";

const INITIAL_POSTS_URL = POSTS_URL + '&limit=20'

export default async function Home() {

  const postsReq = await fetch(INITIAL_POSTS_URL)
  const postsData: TPostsResponse = await postsReq.json()

  return (
    <div className="items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <PostsLists posts={postsData.posts} />
    </div>
  );
}
