import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo_dark from "../assets/logo-dark.svg";
import Logo from "../assets/logo.svg";
import ConnectWalletButton from "./ConnectWalletButton";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, getUserDetails } from "redux/actions/userActions";
import { useRouter } from 'next/router'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const { currentUser, userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails(userToken));
    }
  }, [userToken, dispatch])
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 sticky top-0 ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="w-16" src={Logo.src} alt="logo" />
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Kryptonaut</h1>
        </div>
        <form className="w-[50%]">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-zinc-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search items, collections, and accounts"
              required
            />
          </div>
        </form>
        <div className="hidden md:flex pr-4">
          <ul className="hidden md:flex">
            <li className="p-4">
              <Link href={"/nft"} >
                <a>Explore</a>
              </Link>
            </li>
            <li className="p-4">
              <Link href="#">
                <a>Stats</a>
              </Link>
            </li>
            <li className="p-4">
              <Link href={"/nft/create"}>
                <a>Create</a>
              </Link>
            </li>
            {currentUser && currentUser.isAdmin ? (<li className="p-4">
              <Link href={"/auth/login"}>
                <a>Admin</a>
              </Link>
            </li>) : null}

            {/* <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
            <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li> */}
          </ul>
          {/* <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button> */}
          {/* <ConnectButton  moralisAuth={true} /> */}
          <ConnectWalletButton />
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="#">
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="#">
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="#">
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="#">
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link href="#">
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
