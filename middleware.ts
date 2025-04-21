import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/", // Redirect to sign-in page if not authenticated
  },
});

// Protect specific routes
export const config = {
  matcher: ["/z:pages*"], // Protect these routes
};
