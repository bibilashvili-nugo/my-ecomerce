"use client";

import { ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SignIn from "./SignIn";

const HeaderAuth = () => {
  return (
    <ClerkLoaded>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkLoaded>
  );
};

export default HeaderAuth;
