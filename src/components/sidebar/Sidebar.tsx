import Image from "next/image"
import { GoHome, GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoNotifications, IoNotificationsOutline } from "react-icons/io5";
import { MdMail, MdMailOutline } from "react-icons/md";
import { RiFileListLine, RiFileListFill } from "react-icons/ri";
import { FaUser, FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";

import { SidebarMenuItem } from "./SidebarMenuItem"

const menuItems = [
  {
    path: '/for-you',
    activeIcon: <GoHomeFill size={30}/>,
    inactiveIcon: <GoHome size={30}/>,
    title: 'Home',
  },
  {
    path: '/explore',
    activeIcon: <FiSearch size={30}/>,
    inactiveIcon: <FiSearch size={30}/>,
    title: 'Explore',
  },
  {
    path: '/notifications',
    activeIcon: <IoNotifications size={30}/>,
    inactiveIcon: <IoNotificationsOutline size={30}/>,
    title: 'Notifications',
  },
  {
    path: '/messages',
    activeIcon: <MdMail size={30}/>,
    inactiveIcon: <MdMailOutline size={30}/>,
    title: 'Messages',
  },
  {
    path: '/lists',
    activeIcon: <RiFileListFill size={30}/>,
    inactiveIcon: <RiFileListLine size={30}/>,
    title: 'Lists',
  },
  {
    path: '/profile',
    activeIcon: <FaUser size={30}/>,
    inactiveIcon: <FaRegUser size={30}/>,
    title: 'Profile',
  },
  {
    path: '/more',
    activeIcon: <CgMoreO size={30}/>,
    inactiveIcon: <CgMoreO size={30}/>,
    title: 'More',
  },
]

export const Sidebar = () => {
  return (
    <div className="p-2">
      <div className="p-2">
        <div className="pl-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="mb-4"
          />
        </div>
        
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
