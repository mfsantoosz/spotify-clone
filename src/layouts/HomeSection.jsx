import { PopularArtistsMap } from "../mocks/components/PopularArtistsMap";
import { PopularAlbumsMap } from "../mocks/components/PopularAlbumsMap";
import { PopularRadioMap } from "../mocks/components/PopularRadioMap";
import { FeatureChartsMap } from "../mocks/components/FeatureChartsMap";
import { SpotifyPlaylistMap } from "../mocks/components/SpotifyPlaylistMap";
import { SpotifyFooterLinks } from "../components/SpotifyFooterLinks";
import { Instagram, Twitter, Facebook, Globe } from "lucide-react";

export function HomeSection() {
  return (
    <>
      <div
        className="bg-[#121212] px-2 py-3 flex flex-col w-full overflow-y-auto overflow-x-auto md:overflow-x-hidden max-h-[100vh] lg:max-h-[calc(100vh-100px)] lg:rounded-lg lg:py-1"
        id="home-section"
      >
        <PopularArtistsMap />
        <PopularAlbumsMap />
        <PopularRadioMap />
        <FeatureChartsMap />
        <SpotifyPlaylistMap />

        <div className="flex flex-col gap-8 px-2 py-8  lg:flex-row lg:justify-between lg:py-10 lg:px-3">
          <SpotifyFooterLinks
            title="Company"
            text1="About"
            text2="Jobs"
            text3="For the Record"
          />

          <SpotifyFooterLinks
            title="Communities"
            text1="For Artists"
            text2="Developers"
            text3="Advertising"
            text4="Investors"
            text5="Vendors"
          />

          <SpotifyFooterLinks
            title="Useful links"
            text1="Support"
            text2="Free Mobile App"
          />

          <SpotifyFooterLinks
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
        <div className="flex flex-col py-8 px-4 lg:hidden">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span className="text-sm text-[#9b9b9b] font-medium">Legal</span>
            <span className="text-sm text-[#9b9b9b] font-medium">
              Safety & Privacy Center
            </span>
            <span className="text-sm text-[#9b9b9b] font-medium">
              Privacy Policy
            </span>
            <span className="text-sm text-[#9b9b9b] font-medium">Cookies</span>
            <span className="text-sm text-[#9b9b9b] font-medium">
              About Ads
            </span>
            <span className="text-sm text-[#9b9b9b] font-medium">
              Acessibility
            </span>
            <span className="text-sm text-[#9b9b9b] font-medium">
              &copy; 2024 Spotify AB
            </span>
          </div>
          <button className="max-w-24 mt-4 mb-8 flex gap-1.5 bg-transparent border border-[#9b9b9b] rounded-full p-1.5 font-bold text-sm text-white  hover:scale-105 hover:border hover:border-white">
            <Globe size={20} />
            English
          </button>
        </div>
        <span className="text-[#9b9b9b] text-sm font-bold px-4 py-10 hidden lg:flex">
          &copy; 2024 Spotify AB
        </span>
      </div>
    </>
  );
}
