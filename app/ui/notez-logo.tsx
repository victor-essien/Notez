import { lusitana, playfair } from "../ui/font";

import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
export default function Logo() {
  return (
    <h1
      className={`${raleway.className} text-3xl font-bold text-white`}
      style={{ letterSpacing: "2px" }}
    >
      notez.
    </h1>
  );
}
