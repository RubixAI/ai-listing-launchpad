"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta20() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Welcome to Your Login Portal
          </h2>
          <p className="text-medium">
            Access your account to manage employee transitions and resources
            effectively.
          </p>
          <div className="mt-6 w-full max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button title="Sign Up">Sign Up</Button>
            </form>
            <p className="text-tiny">
              By clicking Sign Up, you agree to our Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
