'use client'

import { EMPTY, LOGO } from '@/images'
import { EmptyTableProps } from '@/types'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'

const EmptyTable:FC<EmptyTableProps> = ({ emptyText }) => {
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoad(false)
        }, 2500)

        return () => clearTimeout(timeoutId)
    }, [])

    return (
        load ?
        <div className='w-full h-[80vh] skeleton dark:bg-black'></div>
            :
        <div className='flex flex-col items-center my-14'>
            <h1 className='font-bold text-4xl mb-32'>{emptyText}</h1>
            <Image
                alt='No Table'
                src={LOGO}
                width={500}
                height={500}
                priority
                className='h-full'
            />
        </div>
    )
}

export default EmptyTable