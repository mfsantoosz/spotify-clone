import { PopularArtistsMocks } from "../PopularArtistsMocks"

export const PopularArtistsMap = () => {
  return (
    <>
      <div className="flex justify-between items-center lg:mt-2">
        <h1 className="text-white text-xl font-bold px-2 py-3 cursor-pointer lg:hover:underline lg:text-2xl lg:px-2 lg:py-1">
          Popular artists
        </h1>
        <span className="text-white text-sm font-bold px-3 py-1 cursor-pointer hover:underline hidden lg:flex ">
          Show all
        </span>
      </div>
      <div className="flex items-center">
        {PopularArtistsMocks.map((item) => (
          <div className="flex flex-col cursor-pointer rounded-lg p-2 transition duration-300 hover:bg-[#222] lg:hover:bg-gradient-to-t lg:hover:from-[#222] lg:hover:to-transparent lg:px-3 lg:pt-3 lg:pb-4">
            <img
              src={item.artistPhoto}
              alt={item.artistName}
              className="rounded-lg shadow-2xl shadow-black max-w-40 max-h-40 lg:rounded-full lg:max-w-48 lg:max-h-48 lg:object-cover"
              width={360}
            />
            <h1 className="text-white mt-3 font-medium  max-w-40 lg:max-w-48 lg:hover:no-underline">
              {item.artistName}
            </h1>
            <span className="text-[#9b9b9b] text-sm font-semibold hidden lg:flex">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
