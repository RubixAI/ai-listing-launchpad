import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Sparkles, ShieldCheck, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
const Index = () => {
  const canonicalUrl = typeof window !== "undefined" ? window.location.href : "https://example.com/";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Realtor",
    url: typeof window !== "undefined" ? window.location.origin : "https://example.com",
    description: "AI Realtor landing page built from Figma kit with shadcn UI and Tailwind."
  };
  return (
    <>
      <Helmet>
        <title>AI Realtor — Real Estate Marketing</title>
        <meta name="description" content="Launch an SEO‑ready real estate landing page built from Figma with shadcn UI." />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="AI Realtor — Real Estate Marketing" />
        <meta property="og:description" content="Launch an SEO‑ready real estate landing page built from Figma with shadcn UI." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
      <header>
        <nav className="container flex h-16 items-center justify-between">
          <a href="#" aria-label="AI Realtor home" className="flex items-center gap-2">
            <Home className="h-5 w-5" aria-hidden="true" />
            <span className="font-semibold">AI Realtor</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button asChild>
            <a href="#cta">Get Started</a>
          </Button>
        </nav>
      </header>

      <main>
        <section className="container py-16 md:py-24" aria-labelledby="hero-heading">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold leading-tight">
                AI Realtor — Smarter real estate marketing
              </h1>
              <p className="text-lg text-muted-foreground">
                Launch fast with a modern, accessible landing page built from a Figma kit and shadcn UI. Responsive, SEO‑ready, and beautiful by default.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg">
                  <a href="#cta">Start free</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#features">Explore features</a>
                </Button>
              </div>
            </div>
            <div className="md:pl-8">
              <div className="rounded-lg border bg-card p-6 shadow-sm animate-scale-in" role="img" aria-label="Hero illustration placeholder">
                <div className="h-56 md:h-72 w-full rounded-md bg-muted" />
                <p className="mt-3 text-sm text-muted-foreground">Replace with your property imagery from Figma.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="container py-16 md:py-24" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">Key features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                  Polished UI
                </CardTitle>
                <CardDescription>Figma‑to‑React with shadcn, Tailwind tokens, and animations.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Fully componentized, accessible, and responsive.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  SEO by default
                </CardTitle>
                <CardDescription>Title/meta, canonical, semantic HTML, and JSON‑LD.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Optimized for discoverability and performance.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Mobile‑first
                </CardTitle>
                <CardDescription>Designed for all screens with fluid spacing and typography.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Looks great in light and dark themes.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="how-it-works" className="container py-16 md:py-24" aria-labelledby="how-heading">
          <h2 id="how-heading" className="text-2xl md:text-3xl font-semibold mb-6">How it works</h2>
          <ol className="grid gap-4 md:grid-cols-3">
            <li className="rounded-lg border bg-card p-6">
              <span className="block text-sm text-muted-foreground mb-2">Step 1</span>
              <p className="font-medium">Pick frames from the Figma kit</p>
            </li>
            <li className="rounded-lg border bg-card p-6">
              <span className="block text-sm text-muted-foreground mb-2">Step 2</span>
              <p className="font-medium">We map tokens, fonts, and components</p>
            </li>
            <li className="rounded-lg border bg-card p-6">
              <span className="block text-sm text-muted-foreground mb-2">Step 3</span>
              <p className="font-medium">Publish your branded landing page</p>
            </li>
          </ol>
        </section>

        <section id="cta" className="container py-16 md:py-24" aria-labelledby="cta-heading">
          <div className="rounded-xl border bg-card p-8 md:p-10 text-center">
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-semibold mb-3">Ready to launch?</h2>
            <p className="text-muted-foreground mb-6">Bring your Figma frames and we’ll turn them into production‑ready code.</p>
            <Button size="lg">Get started</Button>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} AI Realtor. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Terms</a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Index;
