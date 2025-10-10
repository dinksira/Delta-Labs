// src/app/page.tsx
import TopBar from '../components/Landing_page/TopBar';
import LeftSidebar from '../components/Landing_page/LeftSidebar';
import RightSidebar from '../components/Landing_page/RightSidebar';
import ShortVideo from '../components/Landing_page/ShortVideo';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <main className="flex-1 flex justify-center items-center bg-gray-100 overflow-auto p-4">
          <ShortVideo />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}
