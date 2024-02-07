import { FiSettings } from "react-icons/fi";
import { HomeHeaderSections } from "./HomeHeaderSections";

const homeHeaderData = [
  {
    title: "For you",
    path: "/for-you"
  },
  {
    title: "Following",
    path: "/following"
  }
]

export const HomeHeader = () => {
  return (
    <div className="w-full flex border-l border-r border-slate-700">
      <div className="w-5/6 flex">
        {
          homeHeaderData.map(item => (<HomeHeaderSections key={item.path} {...item} />))
        }
      </div>
      <div className="w-1/6 flex items-center justify-center py-2">
        <button className="p-2 rounded-full hover:bg-slate-900">
          <FiSettings size={18}/>
        </button>
      </div>
    </div>
  )
}