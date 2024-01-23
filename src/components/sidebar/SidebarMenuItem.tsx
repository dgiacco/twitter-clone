'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

interface Props {
  path: string,
  activeIcon: JSX.Element,
  inactiveIcon: JSX.Element,
  title: string
}

export const SidebarMenuItem = ({path, activeIcon, inactiveIcon, title}: Props) => {

  const usePathName = usePathname()
  const currentPath = usePathName === path

  return (
    <Link href={path} className={`flex items-center transition duration-300 ease-in-out transform group ${currentPath && 'font-bold'}`}>
      
      <div className="flex group-hover:bg-gray-500 rounded-full p-3 pr-6">
        { currentPath ? (
          <div className='mr-4'>
            {activeIcon}
          </div>
        ) : (
          <div className='mr-4'>
            {inactiveIcon}
          </div>
        ) }
        
        <span className='text-lg'>
          {title}
        </span>
      </div>
    </Link>
  )
}
