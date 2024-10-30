import { TPost } from '@/lib/types'
import Link from 'next/link'

const Post = ({ post, displayFull = false }: { post: TPost; displayFull?: boolean }) => {
  const href = `/${post.id}`
  return (
    <>
      {displayFull && 'FULL DISPLAY'}
      <Link href={href}>
        <div className="border-2 border-amber-100 my-8" key={post.id}>
          {JSON.stringify(post, null, 4)}
        </div>
      </Link>
    </>
  )
}

export default Post
