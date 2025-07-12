import { UserProfile } from "@clerk/nextjs";
import { X } from "lucide-react";
import Link from "next/link";

export default function UserProfilePage() {
  return (
    <div className="relative h-screen w-full">
      <UserProfile
        appearance={{
          elements: {
            cardBox: {
              height: "100vh",
              width: "100vw",
              maxWidth: "100vw",
              borderRadius: 0,
            },
          },
        }}
      />
      <Link
        href="/dashboard"
        className="absolute top-0 right-0 m-4 text-neutral-600"
      >
        <X />
      </Link>
    </div>
  );
}
