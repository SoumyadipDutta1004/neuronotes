"use client";
import { SignUp, useSignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  const { isLoaded } = useSignUp();

  if (!isLoaded) {
    return <div>loading....</div>;
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <SignUp />
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-0 left-0 h-full w-full bg-transparent backdrop-blur-[4px]" />
        <Image
          src="/img/auth-bg.jpg"
          alt="Background image"
          height={1080}
          width={1920}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
