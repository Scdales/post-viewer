'use client'
import { useAppSelector } from '@/lib/hooks/redux'
import Post from '@/lib/components/Post'
import LoadingIndicator from '@/lib/components/LoadingIndicator' // ms

const PostList = () => {
  const posts = useAppSelector((state) => state.posts.value)
  return (
    <div id="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <LoadingIndicator />
    </div>
  )
}

export default PostList
