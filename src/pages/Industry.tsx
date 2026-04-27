import { Eye, Calendar, ArrowRight } from "lucide-react";

export function Industry() {
  return (
    <main className="flex-grow pt-40 px-6 md:px-16 max-w-[1440px] mx-auto w-full">
      {/* Hero Section */}
      <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="col-span-1 md:col-span-12 lg:col-span-6 pr-0 lg:pr-12 z-10 lg:col-start-2">
          <span className="inline-block px-3 py-1 border border-outline text-on-surface-variant font-label text-xs font-semibold uppercase mb-8 tracking-[0.15em]">
            Industry Focus
          </span>
          <h1 className="font-display text-5xl md:text-[80px] leading-[1.1] tracking-[-0.02em] font-light text-on-background mb-8">
            The Architecture of<br />Adornment.
          </h1>
          <p className="font-body text-lg leading-[1.8] text-on-surface-variant max-w-2xl">
            An analytical exploration of the fashion jewellery sector. We dissect visual buying behavior, seasonal demand cadences, and the nuanced scaling strategies required for international ecommerce growth in the quiet luxury space.
          </p>
        </div>
        <div className="col-span-1 md:col-span-12 lg:col-span-5 relative mt-12 lg:mt-0 lg:col-start-8">
          <div className="aspect-[3/4] bg-surface-container overflow-hidden relative">
            <img 
              alt="Abstract luxury surface bathed in warm mediterranean sunlight casting soft geometric shadows on smooth sandstone" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://i.imgur.com/abIwuTL.png" 
            />
          </div>
        </div>
      </section>

      {/* Thematic Bento Grid */}
      <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-1 md:col-span-10 md:col-start-2 border-t border-surface-container-highest pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-auto lg:auto-rows-[400px]">
          {/* Visual Buying Behavior (Large Card) */}
          <article className="col-span-1 md:col-span-12 lg:col-span-8 group relative overflow-hidden bg-surface-container border border-surface-container-highest min-h-[400px]">
            <div className="absolute inset-0 z-0">
              <img 
                alt="Close up of delicate gold necklace chain resting on textured limestone illuminated by dramatic natural sunlight" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-overlay grayscale" 
                src="https://i.imgur.com/2O2dewZ.jpeg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-surface-container/80 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <span className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-primary">Consumer Psychology</span>
              </div>
              <h2 className="font-headline text-3xl leading-[1.3] text-on-background mb-4">Visual Buying Behavior</h2>
              <p className="font-body text-base leading-[1.7] text-on-surface-variant max-w-xl">
                In the absence of physical touch, digital merchandising becomes paramount. We analyze gaze patterns, negative space optimization, and macro-photography aesthetics that drive conversion for high-fidelity adornments.
              </p>
            </div>
          </article>

          {/* Seasonal Demand Cycles (Small Card Text) */}
          <article className="col-span-1 md:col-span-6 lg:col-span-4 bg-surface border border-surface-container-highest p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <span className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-primary">Market Cadence</span>
              </div>
              <h2 className="font-headline text-3xl leading-[1.3] text-on-background mb-4">Seasonal Demand Cycles</h2>
              <p className="font-body text-base leading-[1.7] text-on-surface-variant">
                Moving beyond simple Q4 peaks. Analyzing micro-seasons, resort-wear alignments, and the inventory forecasting required to maintain scarcity while meeting localized global demands.
              </p>
            </div>
            <div className="w-full h-[1px] bg-surface-container-highest mt-8 relative">
              <div className="absolute top-[-4px] right-0 w-2 h-2 rounded-full bg-primary"></div>
            </div>
          </article>

          {/* Gifting Moments (Small Card Image) */}
          <article className="col-span-1 md:col-span-6 lg:col-span-4 bg-surface-container-low border border-surface-container-highest p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <h2 className="font-headline text-3xl leading-[1.3] text-on-background mb-4">Gifting Moments</h2>
              <p className="font-body text-base leading-[1.7] text-on-surface-variant mb-8">
                Structuring product architecture and editorial packaging to capitalize on emotional purchasing triggers outside of traditional holiday schedules.
              </p>
            </div>
            <a href="#" className="mt-8 lg:mt-auto flex items-center justify-between border-t border-surface-container-highest pt-6 group cursor-pointer hover:opacity-70 transition-opacity">
              <span className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-on-background">Explore Analysis</span>
              <ArrowRight className="w-5 h-5 text-on-background group-hover:translate-x-1 transition-transform" />
            </a>
          </article>

          {/* Product Storytelling (Medium Card) */}
          <article className="col-span-1 md:col-span-12 lg:col-span-8 bg-surface border border-surface-container-highest flex flex-col md:flex-row overflow-hidden min-h-[400px]">
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <span className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-primary mb-4 block">Brand Narrative</span>
              <h2 className="font-headline text-3xl leading-[1.3] text-on-background mb-4">Product Storytelling</h2>
              <p className="font-body text-base leading-[1.7] text-on-surface-variant">
                Elevating materials into heritage. How to construct provenance for fashion pieces through editorial copywriting, artisan spotlighting, and contextual styling that communicates quiet luxury.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full border-t md:border-t-0 md:border-l border-surface-container-highest flex justify-center items-center overflow-hidden bg-surface-container-low">
              <img 
                alt="Minimalist abstract composition of folded cream paper and soft shadows resembling a jewelry display plinth" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:scale-105" 
                src="https://i.imgur.com/Awm0Nut.png" 
              />
            </div>
          </article>
        </div>
      </section>

      {/* Deep Dive Section: Ecommerce Scaling */}
      <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-1 md:col-span-10 md:col-start-2 border-t border-surface-container-highest pt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-12 lg:col-span-4">
            <h2 className="font-headline text-4xl md:text-[48px] leading-[1.2] tracking-[-0.01em] text-on-background lg:sticky top-32 mb-8 lg:mb-0">
              International<br />Ecommerce<br />Scaling.
            </h2>
          </div>
          <div className="col-span-1 md:col-span-12 lg:col-span-7 lg:col-start-6 space-y-12 md:space-y-16">
            <div>
              <span className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-primary mb-4 block">01 / Localization Infrastructure</span>
              <p className="font-body text-lg md:text-[18px] leading-[1.8] text-on-surface-variant">
                Scaling a high-touch aesthetic globally requires frictionless localization. This involves implementing multi-currency gateways, localized tax compliance, and shipping logistics that maintain the unboxing experience regardless of destination.
              </p>
            </div>
            <div>
              <span className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-primary mb-4 block">02 / Regional Merchandising</span>
              <p className="font-body text-lg md:text-[18px] leading-[1.8] text-on-surface-variant">
                What resonates in Milan may languish in Kyoto. Strategic scaling dictates dynamic catalog presentation based on regional aesthetic preferences and cultural gifting norms, powered by predictive analytics.
              </p>
            </div>
            <button className="mt-8 md:mt-12 px-8 py-4 bg-transparent border border-outline text-on-background font-label text-xs uppercase tracking-[0.15em] font-semibold hover:bg-on-background hover:text-background transition-colors duration-300">
              Download Full Report
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
