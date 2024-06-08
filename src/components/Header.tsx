import React from 'react'
import { SelectDemo } from './ui/SelectHeader'

export default function Header() {
  return (
    <header className='w-full flex items-end justify-between px-4 py-8 border-b border-[#eee]'>
        <h3 className='text-4xl font-bold'>
            High-quality collor selection
        </h3>
        <SelectDemo />
    </header>
  )
}
