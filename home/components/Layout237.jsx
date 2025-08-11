"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function Layout237() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Empower</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Transforming Workforce Management for the Future
            </h2>
            <p className="text-medium">
              Our platform streamlines redundancy, redeployment, and
              reassignment processes, ensuring a smooth transition for
              employees. We provide tailored support and resources to help
              organizations manage their workforce effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Comprehensive Redundancy Management Services
              </h3>
              <p>Plan and execute redundancy strategies with confidence.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Tailored Redeployment Services for Future Success
              </h3>
              <p>Reskill employees to meet evolving job demands.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="heading-h4 mb-5 font-bold md:mb-6">
                Effective Reassignment Services for Smooth Transitions
              </h3>
              <p>Facilitate seamless transitions to new roles.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Learn More</Button>
            <Button
              iconRight={<ChevronRight className="text-scheme-text" />}
              variant="link"
              size="link"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
