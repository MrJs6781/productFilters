import React from 'react'
import { SelectDemo } from './ui/SelectHeader'

export default function Header() {
  return (
    <header className='w-full flex gap-4 md:gap-0 md:items-end md:justify-between flex-col md:flex-row justify-center items-center px-4 py-8 border-b border-[#eee]'>
        <h3 className='text-xl sm:text-4xl font-black'>
            High-quality collor selection
        </h3>
        <SelectDemo />
    </header>
  )
}
