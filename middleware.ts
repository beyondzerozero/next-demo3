import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // 공개 루트 지정 (이용약관, 로그인화면등 로그인 관련없는 접근 루트)
  publicRoutes: ["/", "/terms"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
