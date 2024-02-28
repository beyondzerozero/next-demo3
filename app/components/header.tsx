import { Button } from "@/components/ui/button";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header>
      <span>로고</span>
      <SignedIn>
        <UserButton />1
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button variant="outline">로그인</Button>
        </SignInButton>
        <SignUpButton>
          <Button>신규가입</Button>
        </SignUpButton>
      </SignedOut>
    </header>
  );
}
