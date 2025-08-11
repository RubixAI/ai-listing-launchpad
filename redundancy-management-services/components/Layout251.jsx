"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout251() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Empower</p>
            <h2 className="heading-h2 font-bold">
              Comprehensive Redundancy Management Services
            </h2>
          </div>
          <div>
            <p className="text-medium">
              Our Redundancy Management Services are designed to support both HR
              managers and employees through challenging transitions. We provide
              strategic planning, communication tools, and detailed audits to
              ensure a smooth process. Empower your workforce with the right
              resources and guidance during redundancy.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h4 mb-5 font-bold md:mb-6">
              Tailored Redundancy Planning and Strategy
            </h3>
            <p>We create customized strategies to navigate redundancy.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h4 mb-5 font-bold md:mb-6">
              Effective Communication Planning for Smooth Transitions
            </h3>
            <p>Our communication plans ensure clarity and support.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="heading-h4 mb-5 font-bold md:mb-6">
              Comprehensive Role Audits for Informed Decisions
            </h3>
            <p>We conduct AI-driven audits to analyze roles.</p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
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
    </section>
  );
}
