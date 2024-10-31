import { TPost } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ICON_URL } from '@/lib/constants'

const Post = ({ post, fadeInDelay = 0, displayFull = false }: { post: TPost; fadeInDelay?: number; displayFull?: boolean }) => {
  const [show, setShow] = useState(false)
  const href = `/${post.id}`
  const imageUrl = `${ICON_URL}/${post.userId}/75`

  const showPost = () => {
    setTimeout(() => setShow(true), fadeInDelay)
  }

  const postClassName = `flex items-center p-1 sm:p-2 rounded-md transition-colors bg-500 my-6${displayFull ? ' flex-col items-center' : ' duration-300 hover:bg-transparent'} ${show ? 'animate-fade' : 'opacity-0'}`
  const postBody = displayFull ? post.body : post.body.slice(0, 100) + '...'

  const PostComponent = (
    <div className={postClassName} key={post.id}>
      <Image
        src={imageUrl}
        style={{ height: '75px', width: '75px' }}
        alt={`User: ${post.userId}`}
        width={75}
        height={75}
        onLoad={showPost}
      />
      <div className="w-full">
        <div className="text-lg sm:text-xl font-bold">{post.author}</div>
        <div className="my-2 text-sn">{postBody}</div>
      </div>
    </div>
  )

  return displayFull ? PostComponent : <Link href={href}>{PostComponent}</Link>
}

export default Post
