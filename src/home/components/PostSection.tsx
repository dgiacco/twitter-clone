import Image from 'next/image';
import React from 'react';
import { FaRegImage } from "react-icons/fa6"
import { HiOutlineGif } from "react-icons/hi2";
import { FaPollH } from "react-icons/fa";
import { PiSmileyFill } from "react-icons/pi";
import { TbCalendarStats } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

const icons = [
  {
    icon: <FaRegImage size={16}/>,
    title: 'media'
  },
  {
    icon: <HiOutlineGif size={16}/>,
    title: 'gif'
  },
  {
    icon: <FaPollH size={16}/>,
    title: 'poll'
  },
  {
    icon: <PiSmileyFill size={16}/>,
    title: 'smiley'
  },
  {
    icon: <TbCalendarStats size={16}/>,
    title: 'schedule'
  },
  {
    icon: <FaLocationDot size={16}/>,
    title: 'location'
  }
]

export const PostSection = () => {
  return (
    <div className="w-full border-b border-slate-700 flex  p-4">
      <div className="w-1/12">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <Image
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Proflie pic"
            width={12}
            height={12}
            layout="responsive"
          />
         </div>
      </div>
      <div className="w-11/12">
        <div className='text-slate-500 text-2xl p-2'>
          What is happening?!
        </div>
        <div className="flex items-center justify-between mt-4 pl-2">
          <div className="flex items-center space-x-4">
            {icons.map((item) => (
              <div key={item.title}>
                {React.cloneElement(item.icon, { className: 'text-blue-500' })}
              </div>
            ))}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full">
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

