"use client";

import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size on mount and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    // Run on mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex items-center w-full md:w-auto">
      {/* Search Icon for Small and Medium Screens */}
      {!isLargeScreen && (
        <button
          className="md:hidden p-2"
          onClick={() => setIsSearchVisible(!isSearchVisible)}
          aria-label="Toggle Search"
        >
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
        </button>
      )}

      {/* Search Bar */}
      {(isSearchVisible || isLargeScreen) && (
        <div className="relative flex w-full bg-gray-100 md:w-auto">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            type="text"
            className="block w-full rounded-md border py-[9px] px-96 pl-10 text-sm outline-2 placeholder:text-black"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      )}
    </div>
  );
}
