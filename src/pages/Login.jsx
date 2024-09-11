import SpotifyWhite from "../assets/spotifyWhite.svg";
import GoogleLogo from "../assets/google.svg";
import FacebookLogo from "../assets/facebook.svg";
import AppleLogo from "../assets/apple.svg";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [isShowingPassword, setIsShowingPassword] = useState();

  return (
    <div>
      <div className="bg-gradient-to-b from-[#2a2a2a] via-[#151515] to-black w-full h-screen flex flex-col items-center justify-center p-8">
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
          <div className="flex flex-col gap-2 max-w-[324px] w-full pb-4">
            <button className="bg-transparent px-8 py-2 border border-[#adb2b3] rounded-full flex items-center gap-8 text-white font-semibold hover:border-white h-12">
              {" "}
              <img src={GoogleLogo} alt="Google Logo" width={26} />
              Continue with Google
            </button>
            <button className="bg-transparent px-8 py-2 border border-[#adb2b3] rounded-full flex items-center gap-8 text-white font-semibold hover:border-white h-12">
              {" "}
              <img src={FacebookLogo} alt="Facebook Logo" width={26} />
              Continue with Facebook
            </button>
            <button className="bg-transparent px-8 py-2 border border-[#adb2b3] rounded-full flex items-center gap-8 text-white font-semibold hover:border-white h-12">
              {" "}
              <img src={AppleLogo} alt="Apple Logo" width={22} />
              Continue with Apple
            </button>
            <button className="bg-transparent px-8 py-2 border border-[#adb2b3] rounded-full text-white font-semibold hover:border-white h-12">
              Continue with phone number
            </button>
          </div>
          <hr className="my-8 border border-[#545454] w-3/4" />
          {/* input group */}
       
          <Link className="underline text-white font-semibold p-8 hover:text-[#1ed760]">
            Forgot your password?
          </Link>
          <div className="mb-16 flex items-center gap-2">
            <span className="text-[#adb2b3] font-medium">
              Don't have an account?
            </span>
            <Link className="underline text-white font-semibold hover:text-[#1ed760]">
              Sign up for Spotify.
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-[#121212] w-full p-8 text-center">
        <p className="text-[#afafaf] text-xs">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
          <span className="underline cursor-pointer">Terms of Service</span>{" "}
          apply.
        </p>
      </footer>
    </div>
  );
}
