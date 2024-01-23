import Link from 'next/link'
import React from 'react'

interface Props {
  path: string,
  icon: JSX.Element,
  title: string
}

export const SidebarMenuItem = ({path, icon, title}: Props) => {
  return (
    <Link href={path} className="flex items-center my-6">
      <div className='mr-4'>
        {icon}
      </div>
      <div>
        {title}
      </div>
    </Link>
  )
}
