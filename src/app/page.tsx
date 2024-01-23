import { Sidebar } from "@/components/index";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="flex-1">
        <span>Main</span>
      </div>
    </div>
  );
}
