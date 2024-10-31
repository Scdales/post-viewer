import { getPosts } from './getPosts'
import { POSTS_URL, USERS_URL } from '@/lib/constants'

const mockPostsResponse = {
  posts: [
    { id: '1', userId: 'user1', body: 'Post 1 body' },
    { id: '2', userId: 'user2', body: 'Post 2 body' }
  ]
}

const mockUsersResponses = {
  user1: { firstName: 'John', lastName: 'Doe' },
  user2: { firstName: 'Jane', lastName: 'Smith' }
}

describe('getPosts service', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('fetches posts and users and returns posts with authors', async () => {
    global.fetch
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockPostsResponse)
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockUsersResponses.user1)
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockUsersResponses.user2)
      })
    const posts = await getPosts()

    expect(global.fetch).toHaveBeenCalledWith(`${POSTS_URL}&limit=20`, { cache: 'force-cache' })
    expect(global.fetch).toHaveBeenCalledWith(`${USERS_URL}/user1`, { cache: 'force-cache' })
    expect(global.fetch).toHaveBeenCalledWith(`${USERS_URL}/user2`, { cache: 'force-cache' })
    expect(posts).toEqual([
      { id: '1', userId: 'user1', body: 'Post 1 body', author: 'John Doe' },
      { id: '2', userId: 'user2', body: 'Post 2 body', author: 'Jane Smith' }
    ])
  })

  it('handles empty posts response gracefully', async () => {
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue({ posts: [] })
    })
    const posts = await getPosts()

    expect(global.fetch).toHaveBeenCalledWith(`${POSTS_URL}&limit=20`, { cache: 'force-cache' })
    expect(posts).toEqual([])
  })

  it('applies the correct skip and limit parameters', async () => {
    const skip = 10
    const limit = 5

    global.fetch
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockPostsResponse)
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockUsersResponses.user1)
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockUsersResponses.user2)
      })
    await getPosts(skip, limit)

    expect(global.fetch).toHaveBeenCalledWith(`${POSTS_URL}&limit=5&skip=10`, { cache: 'force-cache' })
  })
})
