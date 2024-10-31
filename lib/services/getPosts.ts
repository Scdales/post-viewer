import { TPost, TPostsResponse } from '@/lib/types'
import { TUsersResponse } from '@/lib/types/users'
import { POSTS_URL, USERS_URL } from '@/lib/constants'

export const getPosts = async (skip = 0, limit = 20): Promise<TPost[]> => {
  const postsUrl = `${POSTS_URL}&limit=${limit}${skip ? `&skip=${skip}` : ''}`
  const postsReq = await fetch(postsUrl, { cache: 'force-cache' })
  const postsData: TPostsResponse = await postsReq.json()

  const userIds = postsData.posts.map((post) => post.userId)
  const userNames = await Promise.all(
    userIds.map(async (userId) => {
      const userUrl = `${USERS_URL}/${userId}`
      const userReq = await fetch(userUrl, { cache: 'force-cache' })
      const userData: TUsersResponse = await userReq.json()
      return `${userData.firstName} ${userData.lastName}`
    })
  )

  return postsData.posts.map((post, idx) => ({ ...post, author: userNames[idx] }))
}
