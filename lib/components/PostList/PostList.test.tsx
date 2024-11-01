import PostList from './PostList'
import { render } from '@/lib/test/jest/test-utils'
import { mockPosts } from '@/lib/test/jest/mocks'

// mock the IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    private callback: (props: { isIntersecting: boolean }[]) => void
    constructor(callback: (props: { isIntersecting: boolean }[]) => void) {
      this.callback = callback
    }
    observe() {
      this.callback([{ isIntersecting: true }])
    }
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver
})

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
