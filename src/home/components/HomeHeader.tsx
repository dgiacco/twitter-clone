import { FiSettings } from "react-icons/fi";
import { HomeHeaderSections } from "./HomeHeaderSections";

const homeHeaderData = [
  {
    title: "For you",
    path: "/foryou"
  },
  {
    title: "Following",
    path: "/following"
  }
]

export const HomeHeader = () => {
  return (
    <div className="w-full flex">
      <div className="w-5/6 flex">
        {
          homeHeaderData.map(item => (<HomeHeaderSections key={item.path} {...item} />))
        }
      </div>
      <div className="w-1/6 flex items-center justify-center py-4">
        <FiSettings />
      </div>
    </div>
  )
}