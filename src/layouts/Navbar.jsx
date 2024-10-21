import SpotifyWhite from "../assets/spotifyWhite.svg";
import { Search, House, Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-4 lg:pb-2">
      <div className="cursor-pointer">
        <img src={SpotifyWhite} alt="Spotify White Logo" width={32} />
      </div>
      <div className="hidden gap-2 items-center lg:flex">
        <button className="bg-[#1f1f1f] p-2 rounded-full hover:scale-105">
          <House
            size={32}
            strokeWidth={1.5}
            className="text-[#b3b3b3] focus:text-white"
          />
        </button>
        <div className="relative">
          <Search
            size={24}
            strokeWidth={2}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b3b3b3]"
          />
          <input
            type="text"
            className="text-white rounded-full py-3 px-12 w-[468px] bg-[#1f1f1f] border border-[#1f1f1f] hover:bg-[#2a2a2a] hover:border hover:border-[#3d3d3d] appearance-none font-medium cursor-pointer"
            disabled={true}
            placeholder="What do you want to play?"
          />
        </div>
      </div>
      <div className="items-center gap-6 hidden lg:flex">
        <button className="text-[#b3b3b3] font-bold hover:text-white hover:scale-105">
          Sign up
        </button>
        <button className="bg-white py-3 px-7 font-bold rounded-full hover:scale-105">
          Log in
        </button>
      </div>
      <div className="flex items-center gap-4 my-2 lg:hidden">
        <Search color="#fff" size={20} />
        <button className="bg-white px-4 py-1.5 text-sm font-bold rounded-full">
          Open App
        </button>
        <Menu color="#fff" size={28} />
      </div>
    </div>
  );
};
