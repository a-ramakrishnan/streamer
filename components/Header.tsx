import { BellIcon, SearchIcon, UserIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      {/*Left side*/}
      <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-10">
        <img
          src="/streamerAssets/netflix.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="Streamer Logo"
        />
        <ul className="hidden space-x-4 sm:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      {/*Right side*/}
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden md:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/my-account">
          <UserIcon className="h-6 w-6 cursor-pointer rounded" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
