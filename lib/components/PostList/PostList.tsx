'use client'
import { useAppSelector } from '@/lib/hooks'
import Post from '@/lib/components/Post'

const FADE_IN_STEP = 25 // ms

const PostList = () => {
  const posts = useAppSelector((state) => state.posts.value)
  return (
    <div>
      {posts.map((post, idx) => (
        <Post key={post.id} post={post} fadeInDelay={idx * FADE_IN_STEP}/>
      ))}
    </div>
  )
}

export default PostList
