import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="h-16 w-full bg-black px-20 py-4 text-white">
        <nav className="h-full w-full flex items-center justify-between">
          <div>Neuro Notes</div>
          <div>
            <SignedIn>
              <Link href={"/dashboard"}>Dashboard</Link>
            </SignedIn>
          </div>
          <div>
            <SignedOut>
              <div className="flex items-center gap-4">
                <SignInButton />
                <SignUpButton />
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </header>
    </div>
  );
}
