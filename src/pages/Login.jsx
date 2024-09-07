import SpotifyWhite from "../assets/spotifyWhite.svg";
import GoogleLogo from "../assets/google.svg";
import FacebookLogo from "../assets/facebook.svg";
import AppleLogo from "../assets/apple.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-gradient-to-b from-[#2a2a2a] via-[#151515] to-black w-full h-screen flex items-center justify-center">
      <div className="bg-[#151515] flex flex-col items-center justify-center max-w-[734px] w-full rounded-lg">
        <img
          src={SpotifyWhite}
          alt="Spotify Logo"
          width={36}
          className="pt-8 pb-2"
        />
        <h1 className="font-bold text-white text-3xl mb-8">
          Log in to Spotify
        </h1>
        <div className="flex flex-col gap-2 max-w-[324px] w-full">
          <button className="bg-transparent px-8 py-2 border border-[#545454] rounded-full flex items-center gap-8 text-white font-semibold">
            {" "}
            <img src={GoogleLogo} alt="Google Logo" width={26} />
            Continue with Google
          </button>
          <button className="bg-transparent px-8 py-2 border border-[#545454] rounded-full flex items-center gap-8 text-white font-semibold">
            {" "}
            <img src={FacebookLogo} alt="Facebook Logo" width={26} />
            Continue with Facebook
          </button>
          <button className="bg-transparent px-8 py-2 border border-[#545454] rounded-full flex items-center gap-8 text-white font-semibold">
            {" "}
            <img src={AppleLogo} alt="Apple Logo" width={22} />
            Continue with Apple
          </button>
          <button className="bg-transparent px-8 py-2 border border-[#545454] rounded-full text-white font-semibold">
            Continue with phone number
          </button>
        </div>
        <hr className="my-8 border border-[#545454] w-[75%]" />
        <div className="max-w-[324px] w-full">
          <div className="flex flex-col">
            <label className="text-white text-sm font-semibold mb-2">
              Email or username
            </label>
            <input
              type="text"
              placeholder="Email or username"
              className="bg-transparent border border-[#545454] rounded-md p-2 outline-white text-white placeholder-[#ADB2B3]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent border border-[#545454] rounded-md p-2 outline-white text-white placeholder-[#ADB2B3]"
            />
          </div>
          <button className="bg-[#1ED760] px-8 py-2 rounded-full flex items-center gap-8 font-bold">
            Log In
          </button>
        </div>
        <Link className="underline text-white font-semibold">
          Forgot your password?
        </Link>
        <div className="pb-4">
          <span>Don't have an account?</span>
          <Link className="underline text-white font-semibold">
            Sign up for Spotify.
          </Link>
        </div>
      </div>
    </div>
  );
}
