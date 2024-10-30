import { TPost } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Post = ({ post, fadeInDelay = 0, displayFull = false }: { post: TPost; fadeInDelay?: number; displayFull?: boolean }) => {
  const [show, setShow] = useState(false)
  const href = `/${post.id}`
  const imageUrl = `https://dummyjson.com/icon/${post.userId}/100`

  const showPost = () => {
    setTimeout(() => setShow(true), fadeInDelay)
  }

  const postClassName = `border-2 border-amber-100 my-8 ${show ? 'animate-fade' : 'opacity-0'}`

  return (
    <>
      {displayFull && 'FULL DISPLAY'}
      <Link href={href}>
        <div className={postClassName} key={post.id}>
          <Image src={imageUrl} alt={`User: ${post.userId}`} width={100} height={100} priority onLoad={showPost} />
          <div>{JSON.stringify(post, null, 4)}</div>
        </div>
      </Link>
    </>
  )
}

export default Post
