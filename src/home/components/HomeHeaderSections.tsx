'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

interface Props{
  title: string,
  path: string
}

export const HomeHeaderSections = ({title, path}: Props) => {

  const usePathName = usePathname()
  const currentPath = usePathName === path

  return (
    <div className="w-1/2 flex justify-center">
      <div className={`flex items-center justify-center ${currentPath && 'border-b-4 border-blue-500'}`}>
      <Link href={path} className="font-bold">
        {title}
      </Link>
      </div>
    </div>
  )
}

