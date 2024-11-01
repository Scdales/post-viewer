import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Posts Galore')
})

test('browses to the bottom and loads the next page', async ({ page }) => {
  await page.goto('/')

  const loadingIndicator = page.getByTestId('loading-indicator-component')
  const newPostsResponse = page.waitForResponse(/dummyjson\.com\/posts\?select=id,title,body,userId&limit=20&skip=\d+/)
  await loadingIndicator.scrollIntoViewIfNeeded()
  await newPostsResponse

  const posts = page.getByTestId('post-component')
  await expect(posts).toHaveCount(40)
})

test('navigates to post and returns to same scroll point', async ({ page }) => {
  await page.goto('/')

  const post = page.getByText('Gabriel Hayes')
  await post.scrollIntoViewIfNeeded()
  await post.click()

  await expect(page).toHaveURL('/8')
  const backButton = page.getByTestId('back-arrow')
  await backButton.click()
  await expect(page).toHaveURL('/')
  await expect(post).toBeInViewport()
})

test('expect a notification within the first 11 seconds', async ({ page }) => {
  await page.goto('/')
  await page.waitForResponse(/dummyjson\.com\/posts\?select=id,title,body,userId&limit=1&skip=\d+/, { timeout: 30000 })
  const notification = page.getByTestId('notification-component')
  await expect(notification).toBeInViewport()
})
