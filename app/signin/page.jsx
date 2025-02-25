"use client";

import { useRouter } from "next/navigation"; // Correct import for Next.js App Router (13+)
import EmailInput from "@/components/comp-10";
import SignInUI from "@/components/comp-122";
import { Button } from "@/components/ui/button";
import PasswordStrengthIndicator from "@/components/password";
import React from "react";

const Page = () => {
  const router = useRouter(); // Initialize router

  const handleSignIn = () => {
    router.push("/dashboard"); // Navigate to Dashboard Page
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="max-w-screen-lg">
        <EmailInput />
        <PasswordStrengthIndicator />
        
        {/* Centered Button */}
        <div className="flex justify-center my-12">
          <Button onClick={handleSignIn} className="px-6 py-2">
            Sign In
          </Button>
        </div>

        <SignInUI />
      </div>
    </div>
  );
};

export default Page;
  