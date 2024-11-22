import { LOGO } from '@/images'
import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <main className={`flex w-full bg-white dark:bg-black h-[100vh] items-center justify-center`}>
        <span className="bg-transparent">
          <Image 
            width={100} 
            height={100} 
            alt='Logo' 
            className='animate-spinner-ease-spin' 
            src={LOGO}
            priority
          />
        </span>
    </main>
  )
}

export default Loader