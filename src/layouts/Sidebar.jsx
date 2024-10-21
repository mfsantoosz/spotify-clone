import { Library, Plus, Globe } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="hidden lg:bg-[#121212] lg:rounded-lg lg:max-w-[360px] lg:w-full lg:p-2 lg:flex lg:flex-col">
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
      <div className="flex flex-col gap-8 mt-auto">
        <div className="flex flex-wrap px-6 gap-3 ">
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
    </div>
  );
};
