"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useId, useMemo, useState } from "react";

export default function PasswordStrengthIndicator() {
  const id = useId();
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const checkStrength = (pass) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    ];
    return requirements.map((req) => ({ met: req.regex.test(pass), text: req.text }));
  };

  const strength = checkStrength(password);

  const strengthScore = useMemo(() => strength.filter((req) => req.met).length, [strength]);

  const getStrengthColor = (score) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthText = (score) => {
    if (score === 0) return "Enter a password";
    if (score <= 2) return "Weak password";
    if (score === 3) return "Medium password";
    return "Strong password";
  };

  return (
    <div>
      <div className="space-y-2">
        <Label htmlFor={id}>Password Strength Indicator</Label>
        <div className="relative">
          <Input
            id={id}
            className="pe-9"
            placeholder="Password"
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={strengthScore < 4}
            aria-describedby={`${id}-description`}
          />
          <button
            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80"
            type="button"
            onClick={toggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
          >
            {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      <div
        className="mb-4 mt-3 h-1 w-full overflow-hidden rounded-full bg-border"
        role="progressbar"
        aria-valuenow={strengthScore}
        aria-valuemin={0}
        aria-valuemax={4}
      >
        <div
          className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500`}
          style={{ width: `${(strengthScore / 4) * 100}%` }}
        ></div>
      </div>

      <p id={`${id}-description`} className="mb-2 text-sm font-medium">
        {getStrengthText(strengthScore)}. Must contain:
      </p>

      <ul className="space-y-1.5">
        {strength.map((req, index) => (
          <li key={index} className="flex items-center gap-2">
            {req.met ? <Check size={16} className="text-emerald-500" /> : <X size={16} className="text-muted-foreground/80" />}
            <span className={`text-xs ${req.met ? "text-emerald-600" : "text-muted-foreground"}`}>
              {req.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
