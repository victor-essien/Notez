import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";
import { Playfair_Display } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
