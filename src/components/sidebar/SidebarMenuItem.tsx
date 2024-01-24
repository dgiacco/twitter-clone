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
    <Link href={path} className={`flex items-center ${currentPath && 'font-bold'}`}>
      
      <div className="flex hover:bg-slate-900 rounded-full p-3 pr-6">
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
