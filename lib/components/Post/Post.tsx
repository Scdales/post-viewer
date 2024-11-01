import { TPost } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ICON_URL } from '@/lib/constants'

const Post = ({ post, displayFull = false }: { post: TPost; displayFull?: boolean }) => {
  const [show, setShow] = useState(false)
  const href = `/${post.id}`
  const imageUrl = `${ICON_URL}/${post.userId}/75`

  const postClassName = 'flex items-center p-1 sm:p-2 rounded-md transition-colors bg-500 my-6' +
    `${displayFull ? ' flex-col items-center' : ' hover:bg-transparent'}` +
    `${post.latestPost ? ' animate-highlight' : ''}`

  const postBody = displayFull ? post.body : post.body.slice(0, 100) + '...'

  const PostComponent = (
    <div className={show ? 'duration-300 animate-fade' : 'opacity-0'}>
      <div className={postClassName} key={post.id} data-testid="post-component">
        <Image
          src={imageUrl}
          style={{ height: '75px', width: '75px' }}
          alt={`User: ${post.userId}`}
          width={75}
          height={75}
          onLoad={() => setShow(true)}
          blurDataURL="/blur.png"
        />
        <div className="w-full">
          <div className="text-lg sm:text-xl font-bold" data-testid="post-author">
            {post.author}
          </div>
          <div className="my-2 text-sn" data-testid="post-body">
            {postBody}
          </div>
        </div>
      </div>
    </div>
  )

  return displayFull ? PostComponent : <Link href={href}>{PostComponent}</Link>
}

export default Post
