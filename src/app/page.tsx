import SideBar from './sidebar';
import { Dashboard } from './dashboard';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212] py-5">

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8">
        {/* Sidebar */}
        <div className="w-full p-5">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <Dashboard />
        </div>
      </div>

      </main>
    </>
  );
}
