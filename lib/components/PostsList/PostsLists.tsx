import {TPost} from "@/lib/types/posts";

const PostsLists = ({ posts }: {posts: TPost[] }) => {
  return <div>{posts.map((post) => <div>{JSON.stringify(post, null, 4)}</div>)}</div>
}

export default PostsLists
