import Notification from './Notification'
import { render } from '@/lib/test/jest/test-utils'
import { mockPost } from '@/lib/test/jest/mocks'

describe('Notification.tsx', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Notification post={mockPost} />)
    expect(getByText(mockPost.author)).toBeInTheDocument()
    expect(getByText('has just posted!')).toBeInTheDocument()
  })

  it('formats the author name correctly', () => {
    const { getByTestId } = render(<Notification post={mockPost} />)
    const authorElement = getByTestId('notification-author')
    expect(authorElement).toBeInTheDocument()
    expect(authorElement).toHaveClass('font-bold')
  })

  it('renders the view button with correct link', () => {
    const { getByRole, getByTestId } = render(<Notification post={mockPost} />)
    const linkElement = getByRole('link')
    expect(linkElement).toHaveAttribute('href', `/${mockPost.id}`)
    const buttonElement = getByTestId('notification-button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('my-2 mx-4 px-2 py-1 rounded-md bg-200 text-600 font-bold text-xs')
  })
})
