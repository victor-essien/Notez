import SideNav from "../ui/z/sidenav";
import TopNav from "../ui/z/topnav";
import { SideNavProvider } from "../context/SideNavContext";
import ProtectedPage from "../ui/ProtectedPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    //     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    //     <div className="w-full flex-none md:w-64">
    //       <SideNav />
    //     </div>
    //     <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    //   </div>
    <ProtectedPage>
      <SideNavProvider>
        <div className="flex  flex-col ">
          {/* TopBar */}
          <div className="flex-none border-b border-gray-300 fixed w-full z-50 bg-gray-900">
            <TopNav />
          </div>
          {/* Main Content */}
          <div className="flex flex-grow flex-col md:flex-row min-h-screen bg-gray-900 ">
            {/* SideNav */}
            <div className="flex-none  fixed top-[64px] h-[calc(100vh-64px)]">
              <SideNav />
            </div>
            {/* Page Content */}
            <div className="flex-grow p-6 md:overflow-hidden md:p-12 mt-[64px]  bg-gray-900">
              {children}
            </div>
          </div>
        </div>
      </SideNavProvider>
    </ProtectedPage>
  );
}
