import {
  CirclePlus,
  Folders,
  Globe,
  House,
  Library,
  Plus,
  Search,
  X,
} from "lucide-react";
import SpotifyWhite from "../assets/spotifyWhite.svg";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  const clearSearchText = () => {
    setSearchText("");
    inputRef.current.focus();
  };

  return (
    <div className=" bg-black w-full h-screen p-2 flex flex-col gap-6">
      <div className="flex justify-between items-center pb-2 px-4">
        <div className="cursor-pointer">
          <img src={SpotifyWhite} alt="Spotify White Logo" width={32} />
        </div>
        <div className="flex gap-2">
          <button className="bg-[#1f1f1f] p-2 rounded-full hover:scale-105">
            <House
              size={32}
              strokeWidth={1.5}
              className=" text-[#b3b3b3] focus:text-white"
            />
          </button>
          <div className="relative">
            <Search size={24} strokeWidth={2} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b3b3b3]" />
            <input
              ref={inputRef}
              type="text"
              className="text-white rounded-full py-3 px-12 w-[468px] bg-[#1f1f1f] border border-[#1f1f1f] hover:bg-[#2a2a2a] hover:border hover:border-[#3d3d3d] appearance-none font-medium "
              placeholder="What do you want to play?"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <button
                onClick={clearSearchText}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X
                  size={32}
                  strokeWidth={1.5}
                  className="text-[#b3b3b3] hover:text-white"
                />
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/register" className=" text-[#b3b3b3] hover:text-white hover:scale-105 font-bold">Sign up</Link>
          <Link
            to="/login"
            className="bg-white py-3 px-7 font-bold rounded-full hover:scale-105"
          >
            Log in
          </Link>
        </div>
      </div>
      <div className="bg-[#121212] rounded-lg max-w-[360px] w-full p-2 flex flex-col">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-2 text-[#b3b3b3] hover:text-white cursor-pointer transition duration-300">
            <Library strokeWidth={1.8} size={24} />
            <span className="font-bold text-lg">Your Library</span>
          </div>
          <button className="bg-transparent hover:bg-[#b3b3b310] p-1 rounded-full">
            <Plus color="#b3b3b3" />
          </button>
        </div>
        <div className="bg-[#1f1f1f] flex flex-col py-4 px-5 rounded-lg gap-2 mt-6 mb-6 ">
          <h1 className="text-white font-bold">Create your first playlist</h1>
          <span className="text-white text-sm font-medium">
            It's easy, we'll help you
          </span>
          <button className="bg-white rounded-full p-1.5 font-bold text-sm mt-4 max-w-[126px] hover:scale-105">
            Create playlist
          </button>
        </div>
        <div className="bg-[#1f1f1f] flex flex-col py-4 px-5 rounded-lg gap-2 ">
          <h1 className="text-white font-bold">
            Let's find some podcasts to follow
          </h1>
          <span className="text-white text-sm font-medium">
            We'll keep you updated on new episodes
          </span>
          <button className="bg-white rounded-full p-1.5 font-bold text-sm mt-4 max-w-[142px] hover:scale-105">
            Browse podcasts
          </button>
        </div>
        <div className="flex flex-wrap px-6 gap-4 mb-8 mt-44">
          <span className="text-xs text-[#b3b3b3]">Legal</span>
          <span className="text-xs text-[#b3b3b3]">
            Safety & Privacy Center
          </span>
          <span className="text-xs text-[#b3b3b3]">Privacy Policy</span>
          <span className="text-xs text-[#b3b3b3]">Cookies</span>
          <span className="text-xs text-[#b3b3b3]">About Ads</span>
          <span className="text-xs text-[#b3b3b3]">Acessibility</span>
        </div>
        <button className="max-w-24 flex gap-1.5 bg-transparent border border-[#b3b3b3] rounded-full p-1.5 font-bold text-sm text-white mx-6 mb-8 hover:scale-105 hover:border hover:border-white">
          <Globe size={20} />
          English
        </button>
      </div>
      <div className="flex justify-between w-full bg-gradient-to-r from-[#A7339F] via-[#7B68CB] to-[#5B8EEA] pt-3 pl-4 pr-6 pb-2">
        <div className="flex flex-col mb-1">
          <h1 className="text-white text-sm font-bold">Preview of Spotify</h1>
          <p className="text-white font-medium">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <button className="bg-white py-4 px-8 font-bold rounded-full hover:scale-105">
          Sign up free
        </button>
      </div>
    </div>
  );
}
