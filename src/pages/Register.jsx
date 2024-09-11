import spotifyWhite from "../assets/spotifyWhite.svg";
import GoogleLogo from "../assets/google.svg";
import FacebookLogo from "../assets/facebook.svg";
import AppleLogo from "../assets/apple.svg";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="w-full h-screen bg-[#121212] flex justify-center">
      <div className="flex flex-col items-center justify-center w-80">
        <img
          src={spotifyWhite}
          alt="Spotify White Logo"
          width={40}
        />
        <h1 className="font-bold text-white text-5xl text-center leading-tight pt-8">
          Sign up to <br /> start listening
        </h1>
        <div className="flex flex-col pt-8 w-full">
          <label className="text-white text-sm font-bold pb-2">
            Email adress
          </label>
          <input
            type="email"
            placeholder="name@domain.com"
            className="bg-transparent border border-[#b3b3b3] rounded-md placeholder-[#b3b3b3] p-3 text-white font-medium"
          />
          <Link className="text-[#1ED760] text-sm font-semibold underline pt-2">
            Use phone number instead.
          </Link>
          <button className="bg-[#1ed760] rounded-full font-bold p-3 mt-6 hover:bg-[#3be477]">
            Next
          </button>
        </div>
        <div className="flex items-center pt-8 w-full">
          <div className="bg-[#b3b3b3] h-px flex-grow"></div>
          <span className="font-semibold text-white mx-4">or</span>
          <div className="bg-[#b3b3b3] h-px flex-grow"></div>
        </div>
        <div className="flex flex-col gap-2 w-full pt-8">
          <button className="bg-transparent px-8 py-2 border border-[#adb2b3] rounded-full flex items-center gap-8 text-white font-bold hover:border-white h-12">
            {" "}
            <img src={GoogleLogo} alt="Google Logo" width={26} />
            Sign up with Google
          </button>
          <button className="bg-transparent px-8 py-2 border border-[#adb2b3] rounded-full flex items-center gap-8 text-white font-bold hover:border-white h-12">
            {" "}
            <img src={FacebookLogo} alt="Facebook Logo" width={26} />
            Sign up with Facebook
          </button>
          <button className="bg-transparent px-8 py-2 border border-[#adb2b3] rounded-full flex items-center gap-8 text-white  font-bold hover:border-white h-12">
            {" "}
            <img src={AppleLogo} alt="Apple Logo" width={22} />
            Sign up with Apple
          </button>
        </div>
        <div className="w-full bg-[#292929] h-px mt-8"></div>
        <span className="text-[#b3b3b3] font-medium mt-8">
          Already have an account?{" "}
          <Link className="text-white underline" to="/login">
            Log in here
          </Link>
          .
        </span>
        <footer className="mt-28">
          <p className="text-[#b3b3b3] text-center text-xs">
            This site is protected by reCAPTCHA and the Google <br /><span className="underline">Privacy Policy </span>
            and <span className="underline">Terms of Service</span> apply.
          </p>
        </footer>
      </div>
    </div>
  );
}
