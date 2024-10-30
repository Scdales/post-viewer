'use client'
import { useAppSelector } from '@/lib/hooks'
import Post from '@/lib/components/Post'

const PostsLists = () => {
  const posts = useAppSelector((state) => state.posts.value)
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostsLists
