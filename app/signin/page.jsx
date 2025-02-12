import EmailInput from "@/components/comp-10";
import SignInUI from "@/components/comp-122";
import PasswordStrengthIndicator from "@/components/ui/password";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="max-w-screen-lg">
        <EmailInput />
        <PasswordStrengthIndicator />
        <SignInUI />
      </div>
    </div>
  );
};

export default page;
