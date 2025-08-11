"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function Layout10() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Empower</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Transform Skills for Future Opportunities
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Our scorecard evaluates your current skills and experiences,
              aligning them with in-demand roles. This tailored approach ensures
              you are well-prepared for your next career step.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Skill Assessment
                </h6>
                <p>
                  Identify strengths and gaps to enhance your employability in
                  emerging job markets.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Future Roles
                </h6>
                <p>
                  Explore opportunities that match your skills and aspirations
                  for a successful transition.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
              <Button
                title="Start"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Start
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
