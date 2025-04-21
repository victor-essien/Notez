"use client";

import {
  Bars3Icon,
  ArrowPathIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Logo from "../notez-logo";
import Search from "../search";
import { useSideNavState } from "@/app/context/SideNavContext";
import { useSession } from "next-auth/react";

export default function TopNav() {
  const { isSideNavOpen, setIsSideNavOpen } = useSideNavState();
  const { data: session, status } = useSession();
  return (
    <div className="flex w-full flex-row px-3 py-4  md:px-2 bg-gray-900 text-white">
      <div className="flex flex-row gap-2 lg:gap-32 ">
        <div className="flex flex-row items-center justify-center gap-3 lg:gap-9 ">
          <div className="relative group">
            <Bars3Icon
              className="h-6 w-6 text-center cursor-pointer"
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Menu
            </span>
          </div>
          <Logo />
        </div>
        <Search />

        <div className="flex gap-4 items-center">
          <div className="relative group">
            <ArrowPathIcon className="h-6 w-6 cursor-pointer" />{" "}
            {/* Refresh Icon */}
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Refresh
            </span>
          </div>
          <div className="relative group">
            <Squares2X2Icon className="h-6 w-6 cursor-pointer" />{" "}
            {/* Column Icon */}
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Column
            </span>
          </div>
          <div className="relative group">
            <Cog6ToothIcon className="h-6 w-6 cursor-pointer" />{" "}
            {/* Setting Icon */}
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Setting
            </span>
          </div>

          <div className="relative group">
            <img
              src={session?.user?.image || "/default-avatar.png"}
              alt="User Avatar"
              className="h-6 w-6  rounded-full cursor-pointer object-cover"
            />
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 text-center whitespace-nowrap">
              {session?.user?.name || "User Name"} <br />
              {session?.user?.email || "User Email"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
