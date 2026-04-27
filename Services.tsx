export function Services() {
  return (
    <main className="flex-grow pt-40 px-6 md:px-16 max-w-[1440px] mx-auto w-full">
      {/* Hero Section */}
      <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="col-span-1 md:col-span-8 md:col-start-2">
          <span className="inline-block px-3 py-1 border border-outline text-on-surface-variant font-label text-xs font-semibold uppercase mb-8 tracking-[0.15em]">
            Our Expertise
          </span>
          <h1 className="font-display text-5xl md:text-[80px] leading-[1.1] tracking-[-0.02em] font-light text-on-background">
            Curated Strategies for Growth.
          </h1>
        </div>
        <div className="col-span-1 md:col-span-10 md:col-start-2 pb-4 mt-8">
          <p className="font-body text-lg leading-[1.8] text-on-surface-variant max-w-2xl">
            We deploy precision marketing and creative direction to elevate
            luxury brands, ensuring sustainable ecommerce growth and market
            dominance.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-10 md:col-start-2 border-t border-surface-container-highest pt-16 grid grid-cols-1 gap-12">
            
            {/* Service Block: Paid Media Strategy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-16 border-t border-surface-container-highest first:border-t-0 first:pt-0">
              <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
                <div>
                  <span className="inline-block px-3 py-1 border border-outline text-on-surface-variant font-label text-xs font-semibold uppercase mb-6 tracking-[0.15em]">
                    01
                  </span>
                  <h2 className="font-headline text-4xl leading-[1.2] text-on-background mb-4">
                    Paid Media Strategy
                  </h2>
                </div>
                <p className="font-body text-base leading-[1.7] text-on-surface-variant max-w-sm mt-8">
                  Architecting sophisticated, data-driven paid campaigns
                  designed for high-yield returns and targeted audience
                  penetration.
                </p>
              </div>
              <div className="col-span-1 lg:col-span-7 bg-surface-container relative overflow-hidden aspect-[16/9] lg:aspect-[4/3]">
                <img
                  alt="Data analytics dashboard"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=1600&q=80"
                />
              </div>
            </div>

            {/* Service Block: Meta & Google Ads */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-16 border-t border-surface-container-highest">
              <div className="col-span-1 lg:col-span-7 bg-surface-container relative overflow-hidden order-last lg:order-first aspect-[16/9] lg:aspect-[4/3]">
                <img
                  alt="Premium Meta and Google Ads advertising interface"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1600&q=80"
                />
              </div>
              <div className="col-span-1 lg:col-span-5 flex flex-col justify-center order-first lg:order-last">
                <div>
                  <span className="inline-block px-3 py-1 border border-outline text-on-surface-variant font-label text-xs font-semibold uppercase mb-6 tracking-[0.15em]">
                    02
                  </span>
                  <h2 className="font-headline text-4xl leading-[1.2] text-on-background mb-4">
                    Meta & Google Ads
                  </h2>
                </div>
                <p className="font-body text-base leading-[1.7] text-on-surface-variant max-w-sm mt-8">
                  Precision execution across primary digital ecosystems,
                  maximizing visibility and conversion through rigorous A/B
                  testing and creative optimization.
                </p>
              </div>
            </div>

            {/* Service Block: Ecommerce Growth */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-16 border-t border-surface-container-highest">
              <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
                <div>
                  <span className="inline-block px-3 py-1 border border-outline text-on-surface-variant font-label text-xs font-semibold uppercase mb-6 tracking-[0.15em]">
                    03
                  </span>
                  <h2 className="font-headline text-4xl leading-[1.2] text-on-background mb-4">
                    Ecommerce Growth
                  </h2>
                </div>
                <p className="font-body text-base leading-[1.7] text-on-surface-variant max-w-sm mt-8">
                  Scaling digital storefronts through conversion rate
                  optimization, lifecycle marketing, and seamless transactional
                  experiences.
                </p>
              </div>
              <div className="col-span-1 lg:col-span-7 bg-surface-container relative overflow-hidden aspect-[16/9] lg:aspect-[4/3]">
                <img
                  alt="Ecommerce shopping bags"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                  src="https://i.imgur.com/F4sJyqB.jpeg"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
