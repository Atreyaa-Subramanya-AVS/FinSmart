"use client";

import EmailInput from "@/components/comp-10";
import SignInUI from "@/components/comp-122";
import { Button } from "@/components/ui/button";
import PasswordStrengthIndicator from "@/components/password";
import React from "react";

const Page = () => {  
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google"; // Redirect to backend Google OAuth
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="max-w-screen-lg">
        <EmailInput />
        <PasswordStrengthIndicator />
        <Button className="my-12 inline-flex justify-center items-center mx-auto">
          Sign In
        </Button>
        
        {/* Google OAuth Button */}
        <button 
          onClick={handleGoogleLogin} 
          className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4"
        >
          Login with Google
        </button>
        
        <SignInUI />
      </div>
    </div>
  );
};

export default Page;