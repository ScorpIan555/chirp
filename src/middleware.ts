import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
    locales: ["en", "el"],
  
    defaultLocale: "en",
  });

export default authMiddleware({
    beforeAuth: (req) => {
        console.log('req::: ', req)

      return intlMiddleware(req);
    },
    afterAuth(auth, req, evt) {
        // handle users who aren't authenticated
        if (!auth.userId && !auth.isPublicRoute) {
          return redirectToSignIn({ returnBackUrl: req.url });
        }
      },
  
    publicRoutes: ["/", "/:locale/sign-in"],
  });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  foo: "bar"
};