import { PopularRadioMocks } from "../mocks/radio-mocks"

export const PopularRadioMocksMap = () => {
  return (
    <>
      <div className="flex justify-between items-center md:mt-6">
        <h1 className="text-white text-xl md:text-2xl font-bold p-1 md:px-2 md:py-1 cursor-pointer md:hover:underline">
          Popular Radio
        </h1>
        <span className="text-white text-sm font-bold px-3 py-1 cursor-pointer hover:underline hidden md:flex ">
          Show all
        </span>
      </div>
      <div className="flex items-center ">
        {PopularRadioMocks.map((item) => (
          <div className="flex flex-col cursor-pointer rounded-lg p-2 transition duration-300 h-60 hover:bg-[#222] md:px-3 md:pt-3 md:pb-5">
            <img
              src={item.radioCover}
              alt={item.radioName}
              className="rounded-lg shadow-2xl shadow-black max-w-40 min-h-40 md:w-full md:h-full object-cover"
            />
            <h1 className="text-white mt-3 font-medium hover:underline max-w-40 md:hidden">
              {item.radioName}
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