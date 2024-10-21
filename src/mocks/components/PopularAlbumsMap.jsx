import { PopularAlbumsMocks } from "../mocks/albums-mocks"

export const PopularAlbumsMocksMap = () => {
  return (
    <>
      <div className="flex justify-between items-center md:mt-2">
        <h1 className="text-white text-xl font-bold px-2 py-3 cursor-pointer md:hover:underline md:text-2xl md:px-2 md:py-1">
          Popular albums
        </h1>
        <span className="text-white text-sm font-bold px-3 py-1 cursor-pointer hover:underline hidden md:flex ">
          Show all
        </span>
      </div>
      <div className="flex items-center">
        {PopularAlbumsMocks.map((item) => (
          <div className="flex flex-col cursor-pointer rounded-lg p-2 transition duration-300 h-60 hover:bg-[#222] md:px-3 md:pt-3 md:pb-5 md:h-72 ">
          <div className="md:w-48 md:h-48">
            <img
              src={item.albumCover}
              alt={item.albumName}
              className="rounded-lg shadow-2xl shadow-black max-w-40 min-h-40 md:w-full md:h-full object-cover"   
            />
          </div>
          <h1 className="text-white mt-3 font-medium hover:underline max-w-40 md:hidden">
            {item.albumName}
          </h1>
          <span className="text-[#9b9b9b] text-sm font-semibold mt-4 hidden md:flex md:w-48">
            {item.description}
          </span>
        </div>
        ))}
      </div>
    </>
  );
};
