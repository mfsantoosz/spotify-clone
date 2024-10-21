export const SpotifyFooterLinks = ({title, text1, text2, text3, text4, text5}) => {
  return (
    <>
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-bold">{title}</h1>
          <span className="text-[#9b9b9b] font-medium hover:underline cursor-pointer hover:text-white">
            {text1}
          </span>
          <span className="text-[#9b9b9b] font-medium hover:underline cursor-pointer hover:text-white">
            {text2}
          </span>
          <span className="text-[#9b9b9b] font-medium hover:underline cursor-pointer hover:text-white">
            {text3}
          </span>
          <span className="text-[#9b9b9b] font-medium hover:underline cursor-pointer hover:text-white">
            {text4}
          </span>
          <span className="text-[#9b9b9b] font-medium hover:underline cursor-pointer hover:text-white">
            {text5}
          </span>
        </div>
    </>
  );
};
