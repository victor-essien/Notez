"use client"
import { createContext, useContext, useState } from "react"

interface SideNavContextType {
    isSideNavOpen: boolean;
    setIsSideNavOpen: (isOpen: boolean) => void
}

const SideNavContext = createContext<SideNavContextType | undefined>(undefined)

export function SideNavProvider ({children} : {children: React.ReactNode}) {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    console.log("iswhattt", isSideNavOpen)

    return(
        <SideNavContext.Provider value={{isSideNavOpen, setIsSideNavOpen}}>
            {children}
        </SideNavContext.Provider>
    )
}
export function useSideNavState() {
    const context = useContext(SideNavContext);
    if (!context) {
      throw new Error("useSideNavState must be used within a SideNavProvider");
    }
    return context;
  }