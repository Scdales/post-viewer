import Post from './Post'
import { render } from '@/lib/test/jest/test-utils'
import { ICON_URL } from '@/lib/constants'
import { fireEvent, waitFor } from '@testing-library/dom'
import { ImageProps } from 'next/image'
import { act } from '@testing-library/react'
import { mockPost } from '@/lib/test/jest/mocks'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImageProps & { src: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  }
}))

describe('Post.tsx', () => {
  it('renders post with truncated body when displayFull is false', () => {
    const { getByTestId } = render(<Post post={mockPost} />)

    const authorElement = getByTestId('post-author')
    const bodyElement = getByTestId('post-body')
    expect(authorElement).toHaveTextContent(mockPost.author)
    expect(bodyElement).toHaveTextContent(`${mockPost.body.slice(0, 100)}...`)
    expect(bodyElement).not.toHaveTextContent(mockPost.body)
  })

  it('renders full post body when displayFull is true', () => {
    const { getByTestId } = render(<Post post={mockPost} displayFull />)

    const bodyElement = getByTestId('post-body')
    expect(bodyElement).toHaveTextContent(mockPost.body)
  })

  it('renders link when displayFull is false', () => {
    const { getByRole } = render(<Post post={mockPost} />)

    const linkElement = getByRole('link')
    expect(linkElement).toHaveAttribute('href', `/${mockPost.id}`)
  })

  it('does not render link when displayFull is true', () => {
    const { queryByRole } = render(<Post post={mockPost} displayFull />)

    expect(queryByRole('link')).not.toBeInTheDocument()
  })

  it('renders image with correct src and alt attributes', () => {
    const { getByAltText } = render(<Post post={mockPost} />)

    const imageElement = getByAltText(`User: ${mockPost.userId}`)
    expect(imageElement).toHaveAttribute('src', `${ICON_URL}/${mockPost.userId}/75`)
    expect(imageElement).toHaveAttribute('width', '75')
    expect(imageElement).toHaveAttribute('height', '75')
  })

  it('applies fade-in animation delay when fadeInDelay is set', async () => {
    jest.useFakeTimers()

    const { getByAltText, getByTestId } = render(<Post post={mockPost} />)
    const imageElement = getByAltText(`User: ${mockPost.userId}`)
    const postElement = getByTestId('post-component-container')
    expect(postElement).toHaveClass('opacity-0')

    act(() => {
      fireEvent.load(imageElement)
      jest.advanceTimersByTime(100)
    })
    await waitFor(() => expect(postElement).toHaveClass('animate-fade'))

    jest.useRealTimers()
  })
})
