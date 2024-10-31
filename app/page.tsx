import PostsLists from '@/lib/components/PostsList'

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl sm:text-4xl w-full">Posts</h1>
      <h4 className="text-sm sm:text-lg w-full text-right">So many users, they post once every 10 seconds!</h4>
      <PostsLists />
    </div>
  )
}
