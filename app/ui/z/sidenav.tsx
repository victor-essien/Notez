"use client"
import NavLinks from "./nav-links";
import { useSideNavState } from "@/app/context/SideNavContext";


export default function SideNav() {
  const {isSideNavOpen} = useSideNavState()
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-900">
      {/* For small screens, show NavLinks only if isSideNavOpen is true */}
      {isSideNavOpen && (
        <div className="flex flex-col gap-2 md:hidden">
          <NavLinks />
        </div>
      )}

      {/* For medium and large screens, always show NavLinks */}
      <div className="hidden md:flex flex-col gap-2">
        <NavLinks />
      </div>
    </div>
  );
}
