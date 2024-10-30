'use client'
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/lib/store'
import { TPost } from "@/lib/types";
import { addPosts } from "@/lib/store/slices";

export default function StoreProvider({ children, posts }: { children: ReactNode; posts: TPost[] }) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
    if (posts) {
      storeRef.current.dispatch(addPosts(posts))
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
