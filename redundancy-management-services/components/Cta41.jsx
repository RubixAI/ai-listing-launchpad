"use client";

import { Button } from "@/components/ui/button";
import { BackgroundCard } from "@/components/ui/card";
import React from "react";

export function Cta41() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <BackgroundCard className="relative container">
        <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-lg">
            <h2 className="heading-h2 mb-5 font-bold text-white md:mb-6">
              Transform Your Redundancy Strategy
            </h2>
            <p className="text-medium text-white">
              Connect with us for tailored solutions that simplify redundancy
              management and support your team.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Button title="Learn More">Learn More</Button>
            <Button title="Contact" variant="secondary-alt">
              Contact
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="size-full object-cover"
            alt="Relume placeholder image"
          />
          <div className="absolute inset-0 bg-neutral-darkest/50" />
        </div>
      </BackgroundCard>
    </section>
  );
}
