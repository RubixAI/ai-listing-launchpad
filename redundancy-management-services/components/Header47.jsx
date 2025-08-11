"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header47() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Support</p>
            <h1 className="heading-h1 font-bold">
              Navigate Redundancy Smoothly
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="text-medium">
              Our Redundancy Management Services are designed to guide both HR
              managers and employees through the complexities of workforce
              transitions. We provide strategic planning, communication support,
              and tailored resources to ensure a seamless process.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn More">Learn More</Button>
              <Button title="Get Started" variant="secondary">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
