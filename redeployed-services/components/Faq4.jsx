"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Add } from "relume-icons";

export function Faq4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="md:mb-18 mb-12 text-center lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Find answers to your most pressing questions about our Redeployed
            Services.
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <Card>
            <AccordionItem value="item-0" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What are Redeployed Services?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Redeployed Services assist employees transitioning to new roles.
                We provide tailored support to help them reskill and adapt. Our
                goal is to ensure a smooth transition and successful integration
                into new positions.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-1" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                How does reskilling work?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Our reskilling process involves assessing current skills and
                matching them to future roles. We create personalized learning
                pathways that guide employees through necessary training. This
                ensures they are equipped for success in their new positions.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-2" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                What is Outplacement Services?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Outplacement Services provide support for employees facing job
                transitions. This includes resume and CV assistance to enhance
                their job search. Our aim is to empower them during this
                challenging time.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-3" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                Who can access services?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Our services are available to employees undergoing reassignment
                or reskilling. HR managers can also access tools to facilitate
                these processes. We aim to support both parties effectively.
              </AccordionContent>
            </AccordionItem>
          </Card>
          <Card>
            <AccordionItem value="item-4" className="border-none px-5 md:px-6">
              <AccordionTrigger
                icon={
                  <Add className="text-scheme-text size-7 shrink-0 transition-transform duration-300 md:size-8" />
                }
                className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
              >
                How to get started?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                To get started, employees should reach out to their HR
                representative. HR managers can log in to access our services.
                We provide a streamlined process for everyone involved.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="md:mt-18 mx-auto mt-12 max-w-md text-center lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">We're here to help!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
