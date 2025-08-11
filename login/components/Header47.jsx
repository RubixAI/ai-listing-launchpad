"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header47() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Welcome</p>
            <h1 className="heading-h1 font-bold">Access Your Account</h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="text-medium">
              Log in to manage your employee resources effectively. If you're
              new here, please register to get started.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Login">Login</Button>
              <Button title="Sign Up" variant="secondary">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
