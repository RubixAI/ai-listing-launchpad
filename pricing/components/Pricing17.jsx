"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Check, RelumeIcon } from "relume-icons";

export function Pricing17() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Affordable</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Subscription Plans
          </h2>
          <p className="text-medium">
            Choose the best plan for your organization’s needs.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-scheme-border bg-scheme-foreground p-1">
            <TabsTrigger
              value="monthly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:border-0 data-[state=inactive]:bg-transparent"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:border-0 data-[state=inactive]:bg-transparent"
            >
              Yearly
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-4 flex flex-col items-start justify-end">
                      <RelumeIcon className="size-12 text-scheme-text" />
                    </div>
                    <h5 className="heading-h5 mb-2 font-bold">Basic Plan</h5>
                    <p>Ideal for small teams.</p>
                  </div>
                  <div className="text-right">
                    <h1 className="heading-h1 font-bold">$19/mo</h1>
                  </div>
                </div>
                <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
                <p>Includes:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-4 py-2 lg:grid-cols-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Skill assessment tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Resume support services</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Custom learning pathways</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Manager briefing kits</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Role audits</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Dedicated support</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-4 flex flex-col items-start justify-end">
                      <RelumeIcon className="size-12 text-scheme-text" />
                    </div>
                    <h5 className="heading-h5 mb-2 font-bold">Business Plan</h5>
                    <p>Perfect for larger teams.</p>
                  </div>
                  <div className="text-right">
                    <h1 className="heading-h1 font-bold">$19/mo</h1>
                  </div>
                </div>
                <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
                <p>Includes:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-4 py-2 lg:grid-cols-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>All Basic Plan features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Advanced analytics</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Priority support</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Custom reporting tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Enhanced learning resources</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Workshops and webinars</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Networking opportunities</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Feedback mechanisms</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Team collaboration tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Monthly performance reviews</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-4 flex flex-col items-start justify-end">
                      <RelumeIcon className="size-12 text-scheme-text" />
                    </div>
                    <h5 className="heading-h5 mb-2 font-bold">Basic Plan</h5>
                    <p>Best value for small teams.</p>
                  </div>
                  <div className="text-right">
                    <h1 className="heading-h1 font-bold">$180/yr</h1>
                    <p className="mt-2 font-medium">Save 20%</p>
                  </div>
                </div>
                <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
                <p>Includes:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-4 py-2 lg:grid-cols-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>All Basic Plan features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Annual performance reviews</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Extended support hours</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Access to premium content</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Monthly newsletters</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Special event invitations</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-4 flex flex-col items-start justify-end">
                      <RelumeIcon className="size-12 text-scheme-text" />
                    </div>
                    <h5 className="heading-h5 mb-2 font-bold">Business Plan</h5>
                    <p>Comprehensive support for teams.</p>
                  </div>
                  <div className="text-right">
                    <h1 className="heading-h1 font-bold">$280/yr</h1>
                    <p className="mt-2 font-medium">Save 20%</p>
                  </div>
                </div>
                <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
                <p>Includes:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-4 py-2 lg:grid-cols-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>All Business Plan features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Personalized coaching sessions</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Team-building workshops</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Exclusive resources access</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Dedicated account manager</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Customizable training modules</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Ongoing feedback sessions</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Networking with peers</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Access to case studies</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Performance tracking tools</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
