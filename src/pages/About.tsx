import { Globe, Compass, Gem } from "lucide-react";

export function About() {
  return (
    <main className="flex-grow pt-40 px-6 md:px-16 max-w-[1440px] mx-auto w-full">
      {/* Hero Section */}
      <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="col-span-1 md:col-span-5 md:col-start-2">
          <span className="inline-block px-3 py-1 border border-outline text-on-surface-variant font-label text-xs font-semibold uppercase mb-8 tracking-[0.15em]">
            Our Story
          </span>
          <h1 className="font-display text-5xl md:text-[80px] leading-[1.1] tracking-[-0.02em] font-light text-on-background mb-8">
            Architects of Elegance.
          </h1>
          <p className="font-body text-lg leading-[1.8] text-on-surface-variant max-w-md">
            W.B.A INTERNATIONAL FZE is a specialized growth partner dedicated to
            elevating high-end jewellery brands on the global stage. We blend
            strategic precision with an appreciation for niche expertise.
          </p>
        </div>
        <div className="col-span-1 md:col-span-5 md:col-start-8 mt-12 md:mt-0 relative">
          <div className="aspect-[3/4] bg-surface-container overflow-hidden relative">
            <img
              alt="close-up of artisan gold jewellery creation process showing delicate tools and craftsmanship"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJMYW3kNvfqyGTo_dA1Zrmyj1UGAb0t0CUWDeBPR76UCbxFaguwVDg4syRwgMsNz0enyQNCHlYZ9hwYrvS6bF93aLmLtdMsbIXe-g8Kfe0MP60OSQ0tJKNSDYAg_WqOyVwvgxFQcfB6HeV5dcMyAtciP3_D4ZSX2XtZIphad3jkRTv0zjHRcbUSBBGLGLYuP92nxTfi06t94GPPNCHvU3sq0PlvMpVn8nLOgGZQxqV3XwHFzjfqBtoeOdmjg2STrR8CtoqylRKu2Q"
            />
          </div>
        </div>
      </section>

      {/* Values/Approach Grid */}
      <section className="mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-10 md:col-start-2 border-t border-surface-container-highest pt-16">
            <h2 className="font-headline text-4xl md:text-5xl leading-[1.2] tracking-[-0.01em] text-on-background mb-16 max-w-2xl">
              A meticulous approach to modern heritage and international
              expansion.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div className="flex flex-col bg-surface p-8 border border-surface-container-highest">
                <Globe className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-headline text-3xl leading-[1.3] text-on-background mb-4">
                  Global Outlook
                </h3>
                <p className="font-body text-base leading-[1.7] text-on-surface-variant">
                  Navigating international markets with cultural fluency and
                  strategic foresight, positioning brands for sustainable growth
                  across borders.
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col bg-surface-container-low p-8 border border-surface-container-highest">
                <Compass className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-headline text-3xl leading-[1.3] text-on-background mb-4">
                  Strategic Precision
                </h3>
                <p className="font-body text-base leading-[1.7] text-on-surface-variant">
                  Data-driven methodologies married with intuitive brand
                  understanding to craft bespoke growth trajectories tailored to
                  luxury sectors.
                </p>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col bg-surface p-8 border border-surface-container-highest">
                <Gem className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-headline text-3xl leading-[1.3] text-on-background mb-4">
                  Niche Expertise
                </h3>
                <p className="font-body text-base leading-[1.7] text-on-surface-variant">
                  A profound understanding of the jewellery landscape,
                  respecting the legacy of craftsmanship while driving modern
                  market relevance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Gallery Image */}
      <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-1 md:col-span-8 md:col-start-3">
          <div className="aspect-video bg-surface-container overflow-hidden">
            <img
              alt="Jewellery workshop interior showing wall displays of components, organized materials, tools, and warm wood cabinetry"
              className="object-cover object-center w-full h-full opacity-90 transition-all duration-700"
              src="/workshop.jpg"
            />
          </div>
          <div className="mt-8 flex justify-end">
            <p className="font-body text-base leading-[1.7] text-on-surface-variant max-w-sm text-right italic">
              "Cultivating the unseen value in every faceted strategy."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
