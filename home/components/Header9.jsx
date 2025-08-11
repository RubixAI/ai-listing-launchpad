"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header9() {
  return (
    <section className="flex h-svh min-h-svh flex-col">
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
      <div className="px-[5%]">
        <div className="relative z-10 container">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <div>
              <h1 className="heading-h1 font-bold">
                Empowering Transitions for Every Employee Journey
              </h1>
            </div>
            <div>
              <p className="text-medium">
                Our platform offers tailored solutions for HR managers and
                employees navigating redundancy, redeployment, and reassignment.
                With comprehensive support services, we ensure a smooth
                transition and skill enhancement for future-ready roles.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Get Started">Get Started</Button>
                <Button title="Learn More" variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
