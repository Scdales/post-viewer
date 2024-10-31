import { TPost } from '@/lib/types'

export const mockPost: TPost = {
  id: 0,
  title: 'He wandered down the stairs and into the basement',
  body: 'He wandered down the stairs and into the basement. The damp, musty smell of un-use hung in the air. A single, small window let in a glimmer of light, but this simply made the shadows in the basement deeper. He inhaled deeply and looked around at a mess that had been accumulating for over 25 years. He was positive that this was the place he wanted to live.',
  userId: 0,
  author: 'John Smith'
}

export const mockPosts: TPost[] = Array.from({ length: 5 }).map((_, i) => ({ ...mockPost, id: i, author: `${mockPost.author}-${i}`, userId: i }))
