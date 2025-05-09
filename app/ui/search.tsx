"use client";

import { useState, useEffect } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface SearchProps {
  onSearchToggle?: (visible: boolean) => void;
}

export default function Search({ onSearchToggle }: SearchProps) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Check screen size on mount and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Medium breakpoint (768px)
    };

    // Run on mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Add your search logic here
  };

  const toggleSearchVisibility = (visible: boolean) => {
    setIsSearchVisible(visible);
    if (onSearchToggle) {
      onSearchToggle(visible);
    }
  };

  return (
    <div className="relative flex items-center w-full md:w-auto">
      {/* Search Icon for Small Screens */}
      {!isLargeScreen && !isSearchVisible && (
        <button
          className="p-2"
          onClick={() => toggleSearchVisibility(true)}
          aria-label="Open Search"
        >
          <MagnifyingGlassIcon className="w-6 h-6 text-white  cursor-pointer" />
        </button>
      )}

      {/* Search Bar */}
      {(isSearchVisible || isLargeScreen) && (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center w-full md:w-auto"
        >
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full md:w-96 rounded-md border border-gray-300 bg-gray-100 py-2 pl-10 pr-10 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
          </div>
          {isSearchVisible && !isLargeScreen && (
            <button
              type="button"
              onClick={() => toggleSearchVisibility(false)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              aria-label="Close Search"
            >
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          )}
        </form>
      )}
    </div>
  );
}