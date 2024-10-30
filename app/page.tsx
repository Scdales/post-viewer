import PostsLists from '@/lib/components/PostsList'

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <PostsLists />
    </div>
  )
}
