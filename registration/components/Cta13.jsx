"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta13() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="heading-h2 font-bold">Join Our Community Today!</h1>
        </div>
        <div>
          <p className="text-medium">
            Register now to access essential tools and resources tailored for
            your career transition. Take the first step towards a brighter
            future with our support.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Sign Up">Sign Up</Button>
            <Button title="Learn More" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
