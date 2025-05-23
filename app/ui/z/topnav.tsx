"use client";

import { useState } from "react";
import {
  Bars3Icon,
  ArrowPathIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import Logo from "../notez-logo";
import Search from "../search";
import { useSideNavState } from "@/app/context/SideNavContext";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function TopNav() {
  const { isSideNavOpen, setIsSideNavOpen } = useSideNavState();
  const { data: session } = useSession();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <div className="flex w-full flex-row px-3 py-4 md:px-2 bg-gray-900 text-white">
      {/* Left Section: Menu Icon and Logo */}
      {!isSearchVisible && (
        <div className="flex flex-row items-center gap-3 lg:gap-9">
          <div className="relative group">
            <Bars3Icon
              className="h-6 w-6 text-center cursor-pointer"
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Menu
            </span>
          </div>
          <div className="flex flex-row gap-30">
            <Logo />
          <div className="hidden lg:block md:block">
          <Search />
          </div>

          </div>
        </div>
      )}

      {/* Right Section: Search and Icons */}
      <div className="flex gap-4 items-center justify-center md:ml-auto ml-auto">
        <div className="block md:hidden">
          <Search
            onSearchToggle={(visible) => setIsSearchVisible(visible)}
          />
        </div>

        {!isSearchVisible && (
          <>
            <div className="relative group">
              <ArrowPathIcon className="h-6 w-6 cursor-pointer" />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                Refresh
              </span>
            </div>
            <div className="relative group">
              <Squares2X2Icon className="h-6 w-6 cursor-pointer" />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                Column
              </span>
            </div>
            <div className="relative group">
              <Cog6ToothIcon className="h-6 w-6 cursor-pointer" />
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                Setting
              </span>
            </div>
            <div className="relative group">
              <div className="h-9 w-9 rounded-full overflow-hidden">
                <Image
                  src={session?.user?.image || "/default-avatar.png"}
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="absolute  top-full left-0 transform -translate-x-2/2 mt-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 text-center whitespace-nowrap">
                {session?.user?.name || "User Name"} <br />
                {session?.user?.email || "User Email"}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}