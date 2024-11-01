'use client'
import { ReactNode } from 'react'
import backArrow from '@/public/arrow-back.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import SnackbarProvider from '@/lib/components/SnackbarProvider'

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <SnackbarProvider>
      <div className="flex flex-col h-dvh justify-center p-2 sm:p-24">
        <div>
          <Image className="cursor-pointer" onClick={() => router.back()} src={backArrow} alt="Back to Home" data-testid="back-arrow" />
        </div>
        {children}
      </div>
    </SnackbarProvider>
  )
}
