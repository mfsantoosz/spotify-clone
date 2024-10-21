import { FeatureChartsMocks } from "../FeatureChartsMocks"

export const FeatureChartsMap = () => {
  return (
    <>
      <div className="flex justify-between items-center lg:mt-8">
        <h1 className="text-white text-xl font-bold px-2 py-3 cursor-pointer lg:hover:underline lg:text-2xl lg:px-2 lg:py-1">
          Featured Charts
        </h1>
        <span className="text-white text-sm font-bold px-3 py-1 cursor-pointer hover:underline hidden lg:flex ">
          Show all
        </span>
      </div>
      <div className="flex items-center">
        {FeatureChartsMocks.map((item) => (
          <div className="flex flex-col cursor-pointer rounded-lg p-2 transition duration-300 h-60 hover:bg-[#222] lg:h-72 lg:p-3">
          <div className="w-40 h-40 lg:w-48 lg:h-48">
            <img
              src={item.cover}
              alt={item.name}
              className="rounded-lg shadow-2xl shadow-black w-full h-full object-cover"   
            />
          </div>
          <h1 className="text-white mt-2 font-medium hover:underline max-w-40 lg:hidden">
            {item.name}
          </h1>
          <span className="hidden lg:text-[#9b9b9b] lg:text-sm lg:font-semibold lg:mt-3 lg:flex lg:w-48">
            {item.description}
          </span>
        </div>
        ))}
      </div>
    </>
  );
};
