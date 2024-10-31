import PostList from './PostList'
import { render } from '@/lib/test/test-utils'
import { mockPosts } from '@/lib/test/mocks'

describe('PostList.tsx', () => {
  it('renders correctly', () => {
    const { getAllByTestId } = render(<PostList />)

    const postElements = getAllByTestId('post-author')
    expect(postElements.length).toBe(mockPosts.length)
  })

  it('renders the correct number of Post components', () => {
    const { getAllByTestId } = render(<PostList />)
    const postElements = getAllByTestId('post-author')
    expect(postElements.length).toBe(mockPosts.length)
  })
})
