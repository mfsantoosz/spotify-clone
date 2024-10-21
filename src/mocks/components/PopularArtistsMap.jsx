import { PopularArtistsMocks } from "../PopularArtistsMocks"

export const PopularArtistsMap = () => {
  return (
    <>
      <div className="flex justify-between items-center md:mt-2">
        <h1 className="text-white text-xl font-bold px-2 pt-2 cursor-pointer md:hover:underline md:text-2xl md:px-2 md:py-1">
          Popular artists
        </h1>
        <span className="text-white text-sm font-bold px-3 py-1 cursor-pointer hover:underline hidden md:flex ">
          Show all
        </span>
      </div>
      <div className="flex items-center">
        {PopularArtistsMocks.map((item) => (
          <div className="flex flex-col cursor-pointer rounded-lg p-2 transition duration-300 hover:bg-[#222] md:hover:bg-gradient-to-t md:hover:from-[#222] md:hover:to-transparent md:px-3 md:pt-3 md:pb-4">
            <img
              src={item.artistPhoto}
              alt={item.artistName}
              className="rounded-lg shadow-2xl shadow-black md:rounded-full max-w-40 max-h-40 md:w-48 md:h-48 md:object-cover"
            />
            <h1 className="text-white mt-3 font-medium hover:underline max-w-40 md:max-w-48">
              {item.artistName}
            </h1>
            <span className="text-[#9b9b9b] text-sm font-semibold hidden md:flex">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
