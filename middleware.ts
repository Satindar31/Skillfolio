import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

  publicRoutes: ["/", "/learn-more", "/sign-in"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
