import { X } from "lucide-react"

export const GetPremiumMobileCard = () => {
  return (
    <>
      <div
        className="w-full bg-red-200 px-4 py-7 md:hidden"
        id="premiumCardMobile"
      >
        <X
          color="#2b2b2b"
          size={30}
          strokeWidth={1}
          className="absolute right-5"
          onClick={() =>
            (document.getElementById("premiumCardMobile").style.display =
              "none")
          }
        />
        <h1 className="font-bold text-3xl">Get Premium</h1>
        <p className="mb-2">
          Take control of your listening with ad-free music. <br />
          Cancel any time.
        </p>
        <button className="bg-black px-4 py-1.5 text-sm text-white font-bold rounded-full hover:scale-105">
          Get Premium
        </button>
      </div>
    </>
  );
};
