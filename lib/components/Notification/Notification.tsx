import { TPost } from '@/lib/types'
import Image from 'next/image'
import { ICON_URL } from '@/lib/constants'
import Link from 'next/link'

const Notification = ({ post }: { post: TPost }) => {
  const href = `/${post.id}`
  const imageUrl = `${ICON_URL}/${post.userId}/25`

  return (
    <div className="flex items-center" data-testid="notification-component">
      <Image src={imageUrl} alt={`User: ${post.userId}`} width={25} height={25} priority className="m-1" />
      <span className="font-bold" data-testid="notification-author">
        {post.author}
      </span>
      &nbsp;has just posted!
      <Link href={href} passHref>
        <button className="my-2 mx-4 px-2 py-1 rounded-md bg-200 text-600 font-bold text-xs" data-testid="notification-button">
          View
        </button>
      </Link>
    </div>
  )
}

export default Notification
