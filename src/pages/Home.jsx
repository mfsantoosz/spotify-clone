import {
  CirclePlus,
  Folders,
  Globe,
  House,
  Library,
  Plus,
  Search,
} from "lucide-react";
import SpotifyLogo from "../assets/SpotifyLogo.png";

function Home() {
  return (
    <div className=" bg-black w-full h-screen p-2 flex flex-col gap-6">
      <div className="flex justify-between items-center py-2 px-4">
        <div>
          <img src={SpotifyLogo} alt="Spotify Logo" width={32} />
        </div>
        <div className="flex gap-2">
          <button className="bg-[#1f1f1f] p-2 rounded-full hover:scale-105">
            <House color="#b3b3b3" size={32} strokeWidth={1.5} />
          </button>
          <input
            type="search"
            className="text-white rounded-full p-3 w-[430px] bg-[#1f1f1f] border border-[#1f1f1f] hover:bg-[#2a2a2a] hover:border hover:border-[#3d3d3d]"
            placeholder="What do you want to play?"
          />
        </div>
        <div className="flex gap-8">
          <button className="bg-transparent text-[#b3b3b3] hover:text-white hover:scale-105 font-bold  rounded-full">
            Sign up
          </button>
          <button className="bg-white py-3 px-7 font-bold rounded-full hover:scale-105">
            Log in
          </button>
        </div>
      </div>
      <div className="bg-[#121212] rounded-lg max-w-[360px] max-h-[712px] w-full h-full p-2 flex flex-col">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-2 text-[#b3b3b3] hover:text-white cursor-pointer transition duration-300">
            <Library strokeWidth={1.8} size={24} />
            <span className="font-bold text-lg">Your Library</span>
          </div>
          <button className="bg-transparent hover:bg-[#b3b3b310] p-1 rounded-full">
            <Plus color="#b3b3b3" />
          </button>
        </div>
        <div className="bg-[#1f1f1f] flex flex-col p-4 rounded-lg gap-2 mt-6 mb-6 ">
          <h1 className="text-white font-bold">Create your first playlist</h1>
          <span className="text-white text-sm font-medium">
            It's easy, we'll help you
          </span>
          <button className="bg-white rounded-full p-1.5 font-bold text-sm mt-4 max-w-[126px] hover:scale-105">
            Create playlist
          </button>
        </div>
        <div className="bg-[#1f1f1f] flex flex-col p-4 rounded-lg gap-2 ">
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
        <div className="flex flex-wrap p-4 gap-4 mt-auto">
          <span className="text-xs text-[#b3b3b3]">Legal</span>
          <span className="text-xs text-[#b3b3b3]">
            Safety & Privacy Center
          </span>
          <span className="text-xs text-[#b3b3b3]">Privacy Policy</span>
          <span className="text-xs text-[#b3b3b3]">Cookies</span>
          <span className="text-xs text-[#b3b3b3]">About Ads</span>
          <span className="text-xs text-[#b3b3b3]">Acessibility</span>
        </div>
        <button className="max-w-24 flex gap-1.5 bg-transparent border border-[#b3b3b3] rounded-full p-1.5 font-bold text-sm text-white m-4 hover:scale-105 hover:border hover:border-white">
          <Globe size={20} />
          English
        </button>
      </div>
      <div className="flex justify-between w-full bg-gradient-to-r from-[#A7339F] via-[#7B68CB] to-[#5B8EEA]">
        <div className="flex flex-col">
          <h1>Preview of Spotify</h1>
          <p>
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <button className="bg-white py-3 px-7 font-bold rounded-full hover:scale-105">
          Sign up free
        </button>
      </div>
    </div>
  );
}

export default Home;
