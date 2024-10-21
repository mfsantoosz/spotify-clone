export const PreviewOfSpotifyCard = () => {
  return (
    <div className="py-2 mt-auto w-full hidden lg:flex">
      <div className="flex justify-between items-center w-full bg-gradient-to-r from-[#A7339F] via-[#7B68CB] to-[#5B8EEA] py-2 pl-4 pr-6">
      <div className="flex flex-col mb-1">
        <h1 className="text-white text-sm font-bold">Preview of Spotify</h1>
        <p className="text-white font-medium">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <button className="bg-white py-3 px-8 font-bold rounded-full hover:scale-105">
        Sign up free
      </button>
    </div>
    </div>
  );
};
