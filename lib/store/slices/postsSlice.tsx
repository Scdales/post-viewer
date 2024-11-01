import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TPost } from '@/lib/types'
import { getPosts } from '@/lib/services'
import { NEW_POST_POLL } from '@/lib/constants'
import { enqueueSnackbar } from 'notistack'
import Notification from '@/lib/components/Notification'

export interface IPostsState {
  value: TPost[]
  latestPost: null | TPost
  numPosts: number
}

const initialState: IPostsState = {
  value: [],
  latestPost: null,
  numPosts: 0
}

let interval: ReturnType<typeof setInterval> | null = null

export const fetchLatestPost = createAsyncThunk('posts/fetchLatestPost', async (_, thunkAPI) => {
  if (!interval) {
    interval = setInterval(async () => {
      const state = thunkAPI.getState() as { posts: IPostsState }
      const [latestPost] = await getPosts(state.posts.numPosts, 1)
      if (latestPost) {
        thunkAPI.dispatch(addLatestPost({ ...latestPost, latestPost: true }))
        enqueueSnackbar(<Notification post={latestPost} />)
      } else {
        enqueueSnackbar('No more posts to query!', { variant: 'warning' })
        if (interval) clearInterval(interval)
      }
    }, NEW_POST_POLL)
  }
})

export const fetchNextPostPage = createAsyncThunk('posts/fetchNextPostPage', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as { posts: IPostsState }
  const posts = await getPosts(state.posts.numPosts, 20)
  thunkAPI.dispatch(addPosts(posts))
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<TPost[]>) => {
      state.value = state.value.concat(action.payload)
      state.numPosts = state.value.length
    },
    addLatestPost: (state, action: PayloadAction<TPost>) => {
      state.value = [action.payload].concat(state.value)
      state.latestPost = action.payload
      state.numPosts = state.value.length
    }
  },
  selectors: {
    getPost: (posts, postId: number) => {
      return posts.value.find((post) => post.id === postId)
    },
    getLatestPost: (state) => {
      return state.latestPost
    }
  }
})

export const { addPosts, addLatestPost } = postsSlice.actions

export const { getPost } = postsSlice.selectors

export default postsSlice.reducer
