import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-900">
      <div className="flex flex-col gap-2 ">
        <NavLinks />
      </div>
    </div>
  );
}
