import { SpotifyPlaylistMocks } from "../mocks/spotify-playlist-mocks"

export const SpotifyPlaylistMocksMap = () => {
  return (
    <>
      <div className="flex justify-between items-center md:mt-6">
        <h1 className="text-white text-xl md:text-2xl font-bold p-1 md:px-2 md:py-1 cursor-pointer md:hover:underline">
          Spotify Playlists
        </h1>
      </div>
      <div className="flex items-center ">
        {SpotifyPlaylistMocks.map((item) => (
          <div className="flex flex-col cursor-pointer rounded-lg p-2 transition duration-300 h-60 hover:bg-[#222] md:px-3 md:pt-3 md:pb-5 md:h-72 ">
            <div className="md:w-48 md:h-48">
              <img
                src={item.playlistCover}
                alt={item.name}
                className="rounded-lg shadow-2xl shadow-black max-w-40 min-h-40 md:w-full md:h-full object-cover"
              />
            </div>
            <h1 className="text-white mt-3 font-medium hover:underline max-w-40 md:hidden">
              {item.name}
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
