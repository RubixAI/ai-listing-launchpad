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
            Find answers to common questions about our registration process
            below.
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
                Who can register?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Both HR managers and employees can register. HR managers will
                manage employee transitions, while employees access tools for
                support. Each user type has a tailored experience.
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
                Is there a fee?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes, there is a subscription fee based on the number of
                employees managed. This fee ensures access to all our services.
                Detailed pricing can be found on our pricing page.
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
                How do I log in?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                To log in, visit the login page and enter your credentials. If
                you forget your password, use the 'Forgot Password' link for
                assistance. Ensure you have registered before attempting to log
                in.
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
                What if I need help?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                If you need assistance, please refer to our support resources.
                You can also contact our support team for personalized help.
                We’re here to ensure your experience is smooth.
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
                Can I change details?
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                Yes, you can update your registration details anytime through
                your account settings. If you encounter issues, please reach out
                to support. Keeping your information current is important for
                effective communication.
              </AccordionContent>
            </AccordionItem>
          </Card>
        </Accordion>
        <div className="md:mt-18 mx-auto mt-12 max-w-md text-center lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">We're here to help you.</p>
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
