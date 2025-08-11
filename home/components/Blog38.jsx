"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog38() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Empowering Employee Transitions
            </h2>
            <p className="text-medium">
              Insights on managing workforce changes effectively
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Resources</Badge>
              <p className="text-small inline font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="heading-h5 font-bold">
                Navigating Redundancy with Confidence
              </h2>
            </a>
            <p>Strategies to support employees during redundancy processes.</p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Guides</Badge>
              <p className="text-small inline font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="heading-h5 font-bold">
                Reskilling for Future Roles
              </h2>
            </a>
            <p>Empower your workforce with essential reskilling strategies.</p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Insights</Badge>
              <p className="text-small inline font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="heading-h5 font-bold">
                Transitioning to New Roles
              </h2>
            </a>
            <p>Key steps for a smooth transition process.</p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button variant="secondary" className="mt-10 md:mt-14 lg:mt-16">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
