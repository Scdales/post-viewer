export type TPost = {
  id: number
  title: string
  body: string
  userId: number
  author: string
  latestPost?: boolean
}

export type TPostsResponse = {
  limit: number
  posts: TPost[]
  skip: 0
  total: 251
}
