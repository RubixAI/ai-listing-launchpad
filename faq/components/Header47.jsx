"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header47() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Answers</p>
            <h1 className="heading-h1 font-bold">Your Questions Answered</h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="text-medium">
              Welcome to our FAQ page! Here, you can find answers to the most
              common questions regarding our services and how we can assist you.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn More">Learn More</Button>
              <Button title="Contact Us" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
