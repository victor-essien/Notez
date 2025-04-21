"use client";
import Link from "next/link";
import clsx from "clsx";
import {
  HomeIcon,
  LightBulbIcon,
  BellIcon,
  PencilIcon,
  TrashIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useSideNavState } from "@/app/context/SideNavContext";

// Map of links to display in the sidebar

const links = [
  { name: "Notes", href: "/z/home", icon: LightBulbIcon },
  { name: "Reminders", href: "/z/reminders", icon: BellIcon },

  { name: "Archive", href: "/z/archive", icon: ArchiveBoxIcon },
  { name: "Edit", href: "/z/edit", icon: PencilIcon },
  { name: "Bin", href: "/z/bin", icon: TrashIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
const {isSideNavOpen} = useSideNavState()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-start gap-4 rounded-md  p-3 text-sm font-medium text-white hover:bg-gray-700 hover:text-gray-300 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "text-green-300 bg-gray-700": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-5" />
            <p className={clsx({ hidden: !isSideNavOpen  })}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
