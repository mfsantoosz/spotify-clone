import { Navbar } from "./layouts/Navbar"
import { Sidebar } from "./layouts/Sidebar"
import { HomeSection } from "./layouts/HomeSection"
import { PreviewOfSpotifyCard } from "./components/PreviewOfSpotifyCard"

export default function App() {
  return (
    <div className="bg-black w-full flex flex-col overflow-hidden lg:p-2">
      <Navbar />
      <div className="flex flex-col lg:flex-row lg:gap-2 lg:h-[800px]">
        <Sidebar />
        <HomeSection />
      </div>
      <PreviewOfSpotifyCard />
    </div>
  );
}
