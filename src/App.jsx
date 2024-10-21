import { PreviewOfSpotifyCard } from "../components/PreviewOfSpotifyCard";
import { Sidebar } from "../layouts/Sidebar";
import { Navbar } from "../layouts/Navbar";
import { PopularArtistsMocksMap } from "../components/PopularArtistsMocksMap";
import { PopularAlbumsMocksMap } from "../components/PopularAlbumsMocksMap";
import { PopularRadioMocksMap } from "../components/PopularRadioMocksMap";
import { FeatureChartsMocksMap } from "../components/FeatureChartsMocksMap";
import { SpotifyPlaylistMocksMap } from "../components/SpotifyPlaylistMocksMap";
import { SpotifyInfos } from "../components/SpotifyInfos";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { GetPremiumCardMobile } from "../components/GetPremiumCardMobile";
export default function App() {
  return (
    <div className="bg-black w-full flex flex-col h-screen overflow-hidden md:p-2">
      <Navbar />
      <div className="flex flex-col md:flex-row md:gap-2">
        <Sidebar />
        <GetPremiumCardMobile />

        <div
          className="bg-[#121212] px-2 py-3 flex flex-col w-full overflow-y-auto overflow-x-hidden max-h-[calc(100vh-100px)] md:bg-gradient-to-t md:from-[#121212] md:to-[#222] md:rounded-lg md:py-1"
          id="section-with-scrollbar"
        >
          <PopularArtistsMocksMap />
          <PopularAlbumsMocksMap />
          <PopularRadioMocksMap />
          <FeatureChartsMocksMap />
          <SpotifyPlaylistMocksMap />
          <div className="flex flex-col gap-8 px-2 py-8  md:flex-row md:justify-between md:py-10 md:px-3">
            <SpotifyInfos
              title="Company"
              text1="About"
              text2="Jobs"
              text3="For the Record"
            />
            <SpotifyInfos
              title="Communities"
              text1="For Artists"
              text2="Developers"
              text3="Advertising"
              text4="Investors"
              text5="Vendors"
            />
            <SpotifyInfos
              title="Useful links"
              text1="Support"
              text2="Free Mobile App"
            />
            <SpotifyInfos
              title="Spotify Plans"
              text1="Premium Individual"
              text2="Premium Duo"
              text3="Premium Family"
              text4="Premium Student"
              text5="Spotify Free"
            />
            <div className="flex gap-4">
              <Instagram
                className="bg-[#292929] p-2 rounded-full hover:bg-[#5a5a5a]"
                size={36}
                color="#fff"
              />
              <Twitter
                className="bg-[#292929] p-2 rounded-full hover:bg-[#5a5a5a]"
                size={36}
                color="#fff"
              />
              <Facebook
                className="bg-[#292929] p-2 rounded-full hover:bg-[#5a5a5a]"
                size={36}
                color="#fff"
              />
            </div>
          </div>
          <div className="border-t-[0.5px] border-[#292929] mx-4 "></div>
          <span className="text-[#9b9b9b] text-sm font-bold px-4 py-10 hidden md:flex">
            &copy; 2024 Spotify AB
          </span>
        </div>
      </div>
      <PreviewOfSpotifyCard />
    </div>
  );
}
