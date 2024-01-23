import Image from "next/image"
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";

import { SidebarMenuItem } from "./SidebarMenuItem"

const menuItems = [
  {
    path: '/',
    icon: <GoHomeFill size={30}/>,
    title: 'Home',
  },
  {
    path: '/explore',
    icon: <FiSearch size={30}/>,
    title: 'Explore',
  },
  {
    path: '/notifications',
    icon: <IoNotificationsOutline size={30}/>,
    title: 'Notifications',
  },
  {
    path: '/messages',
    icon: <MdOutlineMailOutline size={30}/>,
    title: 'Messages',
  },
  {
    path: '/lists',
    icon: <RiFileListLine size={30}/>,
    title: 'Lists',
  },
  {
    path: '/profile',
    icon: <FaRegUser size={30}/>,
    title: 'Profile',
  },
  {
    path: '/more',
    icon: <CgMoreO size={30}/>,
    title: 'More',
  },
]

export const Sidebar = () => {
  return (
    <div className="p-2 bg-gray-700">
      <div className="p-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={30}
          height={30}
        />
        {
          menuItems.map(item => <SidebarMenuItem key={item.title} {...item}/>)
        }
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full w-5/6">
        Post
      </button>
    </div>
  )
}
