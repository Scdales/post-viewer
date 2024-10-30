import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TPost } from '@/lib/types'

export interface IPostsState {
  value: TPost[]
}

const initialState: IPostsState = {
  value: []
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<TPost[]>) => {
      state.value = state.value.concat(action.payload)
    }
  },
  selectors: {
    getPost: (posts, postId: number) => {
      return posts.value.find((post) => post.id === postId)
    }
  }
})

export const { addPosts } = postsSlice.actions

export const { getPost } = postsSlice.selectors

export default postsSlice.reducer
