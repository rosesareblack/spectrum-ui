"use client";
import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  RiCloseCircleLine,
  RiDeleteBin5Fill,
  RiFacebookFill,
  RiGithubFill,
  RiGoogleFill,
  RiTwitterXFill,
} from "@remixicon/react";
import Copy from "../copy";
import { Delete, Linkedin, LoaderCircle, Mail } from "lucide-react";

const SocialLoginButtons = () => {
  // Array of social login button configurations
  const socialButtons = [
    {
      code: `
      import {RiGoogleFill} from "@remixicon/react"
      <Button variant="outline">
               <RiGoogleFill className="me-3 text-[#DB4437]" size={16} aria-hidden="true" />
               Login with Google
             </Button>`,
      icon: (
        <RiGoogleFill
          className="me-3 "
          size={16}
          aria-hidden="true"
        />
      ),
      variant: "outline",
      text: "Login with Google",
    },
    {
      code: `
            import {RiTwitterXFill} from "@remixicon/react"
      <Button variant="outline">
               <RiTwitterXFill className="me-3 text-[#14171a]" size={16} aria-hidden="true" />
               Login with X
             </Button>`,
      icon: (
        <RiTwitterXFill
          className="me-3 "
          size={16}
          aria-hidden="true"
        />
      ),
      variant: "outline",
      text: "Login with X",
    },
    {
      code: `
            import {RiFacebookFill} from "@remixicon/react"
      <Button variant="outline">
               <RiFacebookFill className="me-3 text-[#1877f2]" size={16} aria-hidden="true" />
               Login with Facebook
             </Button>`,
      icon: (
        <RiFacebookFill
          className="me-3 "
          size={16}
          aria-hidden="true"
        />
      ),
      text: "Login with Facebook",
      variant: "outline",
    },
    {
      code: `
            import {RiGithubFill} from "@remixicon/react"
      <Button variant="outline">
               <RiGithubFill className="me-3 text-[#333333]" size={16} aria-hidden="true" />
               Login with GitHub
             </Button>`,
      icon: (
        <RiGithubFill
          className="me-3 "
          size={16}
          aria-hidden="true"
        />
      ),
      text: "Login with GitHub",
      variant: "outline",
    },
    {
      code: `
           import { Mail } from "lucide-react";
      <Button variant="des">
               <RiGithubFill className="me-3 text-[#333333]" size={16} aria-hidden="true" />
               Login with GitHub
             </Button>`,
      icon: (
        <Mail
          className="me-3 "
          size={16}
          aria-hidden="true"
        />
      ),
      text: "Email ",
          
    },
    {
      code: `
            import {RiGithubFill} from "@remixicon/react"
      <Button variant="outline">
               <RiGithubFill className="me-3 text-[#333333]" size={16} aria-hidden="true" />
               Login with GitHub
             </Button>`,
    
      text: "Like ❤️",
    },
    {
      code: `
            import {RiGithubFill} from "@remixicon/react"
      <Button variant="outline">
               <RiGithubFill className="me-3 text-[#333333]" size={16} aria-hidden="true" />
               Login with GitHub
             </Button>`,
      icon: (
        <LoaderCircle
        className="-ms-1 me-2 animate-spin"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      ),
      text: "Loading",
    },
    {
      code: `
            import {RiGithubFill} from "@remixicon/react"
      <Button variant="outline">
               <RiGithubFill className="me-3 text-[#333333]" size={16} aria-hidden="true" />
               Login with GitHub
             </Button>`,
      icon: (
        <RiCloseCircleLine
          className="me-3 "
          size={16}
          aria-hidden="true"
        />
      ),
      text: "Cancel",
      variant: "destructive",
    },
    {
      code: `
            import {RiGithubFill} from "@remixicon/react"
      <Button variant="outline">
               <RiGithubFill className="me-3 text-[#333333]" size={16} aria-hidden="true" />
               Login with GitHub
             </Button>`,
      icon: (
        <RiDeleteBin5Fill
          className="me-3 "
          size={16}
          aria-hidden="true"
        />
      ),
      text: "Delete",
      
    },
   
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-16 ml-7">
      {socialButtons.map((btn, index) => (
        <Card key={index} className="mt-5">
          <div className="flex items-end justify-end">
            <Copy content={btn.code} />
          </div>
          <div className="flex items-center justify-center h-44 w-72">
            {/* Render each button with its respective icon and text */}
            <Button  variant={btn?.variant as 'default' | 'link' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null | undefined}
              >
              {btn?.icon}
              {btn.text}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SocialLoginButtons;


