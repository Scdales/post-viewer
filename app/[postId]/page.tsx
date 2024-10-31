'use client'
import { useAppSelector } from '@/lib/hooks'
import { getPost } from '@/lib/store/slices'
import { use } from 'react'
import Post from '@/lib/components/Post'

export default function Page({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = use(params)
  const post = useAppSelector((state) => getPost(state, Number(postId)))

  if (!post) {
    return <div>Post not found.</div>
  }

  return <Post post={post} displayFull />
}
