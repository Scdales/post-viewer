'use client'
import PostList from '../lib/components/PostList'
import { useAppDispatch } from '@/lib/hooks/redux'
import { useEffect } from 'react'
import { fetchLatestPost } from '@/lib/store/slices'
import SnackbarProvider from '@/lib/components/SnackbarProvider'

export default function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchLatestPost())
  }, [dispatch])

  return (
    <SnackbarProvider>
      <div className="items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl sm:text-4xl w-full">Posts</h1>
        <h4 className="text-sm sm:text-lg w-full text-right">So many users, we receive a new post every 10 seconds!</h4>
        <PostList />
      </div>
    </SnackbarProvider>
  )
}
