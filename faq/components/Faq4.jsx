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
            Find answers to common questions about our services and support for
            employees and HR managers.
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
                What is redundancy management?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Redundancy management involves planning and executing strategies
                to support employees facing job loss. It includes communication
                planning, audits, and tailored support services. Our goal is to
                ensure a smooth transition for affected employees.
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
                How do redeployment services work?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Redeployment services help employees reskill for future roles
                within the organization. We assess existing skills and match
                them to in-demand positions. Custom learning pathways are
                created to facilitate this transition.
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
                What are reassignment services?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Reassignment services assist employees being moved to new roles
                within the company. We evaluate their skills and experiences to
                find suitable positions. Additionally, we identify local
                training programs to enhance their capabilities.
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
                How can I get support?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Support is available through our dedicated HR team and online
                resources. Employees can access tools tailored to their needs.
                For specific inquiries, we encourage reaching out directly.
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
                What is a custom learning pathway?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                A custom learning pathway is a tailored educational plan
                designed for individual employees. It aligns their existing
                skills with future job requirements. This ensures they receive
                the necessary training to thrive in new roles.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="md:mt-18 mx-auto mt-12 max-w-md text-center lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">
            We're here to help you with any inquiries.
          </p>
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
