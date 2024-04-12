'use client'

import React from 'react'
import MusicPlayer from '../player/MusicPlayer'
import Header from '../Header'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const path = usePathname()
  const session = useSession()
  const check =
    session.status === 'authenticated' && !['/login', 'join'].includes(path)

  return (
    <div className='relative flex justify-center'>
      {check ? (
        <div
          className={`innerBox min-h-[100vh] w-[388px] ${check ? 'mr-[-2.5rem]' : ''} z-[1]`}
        >
          <MusicPlayer />
        </div>
      ) : (
        ''
      )}
      <div className={`innerBox min-h-[100vh] w-[852px]`}>
        <Header />
        <div className={`${check ? 'pl-[5rem]' : 'pl-[2.5rem]'}  pr-[2.5rem]`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container
