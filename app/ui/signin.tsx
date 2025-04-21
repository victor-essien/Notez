// import { getProviders, signIn } from "next-auth/react";

// export default function SignIn({ providers }: any) {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-2xl font-bold mb-6">Sign In</h1>
//       {Object.values(providers).map((provider: any) => (
//         <div key={provider.name} className="mb-4">
//           <button
//             onClick={() => signIn(provider.id, { callbackUrl: "/home/z/" })}
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Sign in with {provider.name}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }
