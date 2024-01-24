import { redirect } from "../../node_modules/next/navigation"
import { HomeHeader } from '../home/components/HomeHeader';


export default function HomePage() {

  redirect('/foryou')

  return (
    <div className="flex">
      <HomeHeader />
    </div>
  );
}
