import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import StoreProvider from '@/lib/components/StoreProvider'
import '@testing-library/jest-dom'
import { mockPosts } from '@/lib/test/mocks'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider posts={mockPosts}>{children}</StoreProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
