import { Navbar } from "./layouts/Navbar"
import { Sidebar } from "./layouts/Sidebar"
import { GetPremiumMobileCard } from "./components/GetPremiumMobileCard"
import { HomeSection } from "./layouts/HomeSection"
import { PreviewOfSpotifyCard } from "./components/PreviewOfSpotifyCard"

export default function App() {
  return (
    <div className="bg-black w-full flex flex-col h-screen overflow-hidden md:p-2">
      <Navbar />
      <div className="flex flex-col md:flex-row md:gap-2">
        <Sidebar />
        <GetPremiumMobileCard />
        <HomeSection />
      </div>
      <PreviewOfSpotifyCard />
    </div>
  );
}
