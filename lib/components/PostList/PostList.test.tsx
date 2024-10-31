import PostList from './PostList'
import { render } from '@/lib/test/test-utils'
import { mockPosts } from '@/lib/test/mocks'
import { useAppSelector } from '@/lib/hooks'

jest.mock('../../hooks', () => ({
  useAppSelector: jest.fn()
}))

describe('PostList.tsx', () => {
  beforeEach(() => {
    useAppSelector.mockReturnValue(mockPosts)
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

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
