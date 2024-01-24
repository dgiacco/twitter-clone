import { redirect } from "../../node_modules/next/navigation"
import { HomeHeader } from '../home/components/HomeHeader';


export default function HomePage() {

  redirect('/for-you')

  return (
    <>
    </>
  );
}
