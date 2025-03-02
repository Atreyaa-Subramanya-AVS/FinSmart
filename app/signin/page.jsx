"use client";

import { useRouter } from "next/navigation"; // Correct import for Next.js App Router (13+)
import EmailInput from "@/components/comp-10";
import SignInUI from "@/components/comp-122";
import { Button } from "@/components/ui/button";
import PasswordStrengthIndicator from "@/components/password";
import React, { useState } from "react";
import signin from "../../public/images/signin.jpg"
import Image from "next/image";

const Page = () => {
  const router = useRouter(); // Initialize router

  const handleSignIn = () => {
    router.push("/dashboard"); // Navigate to Dashboard Page
  };

  const [option, setOption] = useState("Login");

  return (
    <div className="h-screen w-full flex justify-center items-center text-white">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="wrapper max-w-screen-lg w-3/4 px-12 py-4 border border-dashed flex justify-between">
        <div className="w-1/2 my-auto">
          <h1 className="text-center text-5xl font-semibold mt-3 tracking-tight">{option}</h1>
          <p className="text-sm max-w-screen-md text-center my-4">{option} and take control of your investments with real-time market data, AI-driven stock insights, and a personalized dashboard—smart investing starts here!</p>
          <Image src={signin} className="" alt="signin"/>
        </div>
        <div className="flex flex-col justify-center h-max">
          <div className="w-1/2 h-1/2 flex flex-1 justify-center items-center mx-auto my-4 px-2">
          ━━━━━━━━━━━▼━━━━━━━━━━━
          </div>

          <div className="options flex justify-center gap-1">
            <Button onClick={(e) => setOption("Login")} className={`bg-white text-black hover:bg-neutral-200 ${option === "Login" && "bg-neutral-400"}`}>
              Login
            </Button>
            <Button onClick={(e) => setOption("Register")} className={`bg-white text-black hover:bg-neutral-200 ${option === "Register" && "bg-neutral-400"}`}>
              Register
            </Button>
          </div>
          {option === "Register" && <EmailInput placeholder={"User Name"} type={"text"} />}
          <EmailInput placeholder={"Email"} type={"email"}/>
          <PasswordStrengthIndicator option={option} />
          <div className="flex justify-center my-6">
            <Button onClick={handleSignIn} className="px-6 py-2">
              Sign In
            </Button>
          </div>
          <SignInUI />
          <div className="w-1/2 h-1/2 flex flex-1 justify-center items-center mx-auto my-4 px-2">
          ━━━━━━━━━━━▲━━━━━━━━━━━
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
