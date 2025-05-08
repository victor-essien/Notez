// "use client";

// import Image from "next/image";

// import { signIn } from "next-auth/react";
// // Path to your NextAuth.js configuration

// export default async function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 flex flex-col items-center justify-center text-white">
//       <h1 className="text-5xl font-bold mb-6">Welcome to Notez</h1>
//       <p className="text-lg mb-8 text-center max-w-md">
//         Organize your thoughts, capture your ideas, and stay productive with
//         Notez. Your personal note-taking app.
//       </p>
//       <div className="flex space-x-4">
//         <button
//           onClick={() => signIn("google", { 300lbackUrl: "/z/home" })}
//           className="px-6 py-3 bg-white text-purple-500 font-semibold rounded-lg shadow-md hover:bg-gray-100"
//         >
//           Get Started
//         </button>
//         <button className="px-6 py-3 bg-transparent border border-white font-semibold rounded-lg hover:bg-white hover:text-purple-500">
//           Learn More
//         </button>
//       </div>
//       <div className="mt-12">
//         <Image
//           src="/notez-preview.png"
//           alt="Notez App Preview"
//           width={500}
//           height={300}
//           className="rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
//   );
// }
"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const callback = "/z/home";
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 flex flex-col text-white">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">Notez</h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/z/home" })}
          className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Sign In
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-4 flex-grow justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Organize Your Thoughts <br />
          With <span className="text-yellow-300">Notez</span>
        </h1>
        <p className="text-base md:text-lg max-w-xl mb-8">
          Capture your ideas, stay productive, and never lose track of your
          notes again. Notez is your personal note-taking app designed to
          simplify your life.
        </p>
        <button className="px-6 py-3 bg-yellow-300 text-purple-800 font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-400 transition">
          Get Started with Google
        </button>

        {/* Illustration */}
        <div className="mt-12 w-full max-w-3xl">
          <Image
            src="/notez-illustration.png"
            alt="Notez App Illustration"
            width={800}
            height={500}
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-200">
        © {new Date().getFullYear()} Notez. All rights reserved.
      </footer>
    </div>
  );
}
