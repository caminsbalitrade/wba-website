import { Globe, LineChart, TrendingUp } from 'lucide-react';

function Hero() {
  return (
    <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-20">
      <div className="col-span-1 md:col-span-10 md:col-start-2 flex flex-col">
        <h1 className="font-display text-5xl md:text-[80px] leading-[1.1] tracking-[-0.02em] font-light text-on-background mb-8 max-w-4xl">
          Growth for<br />
          Fashion Jewellery<br />
          Brands,<br />
          Strategically Led
        </h1>
        <p className="font-body text-lg leading-[1.8] text-on-surface-variant max-w-2xl mb-12">
          W.B.A International FZE helps jewellery businesses worldwide scale
          through strategic advertising, customer acquisition, and
          performance-led campaigns.
        </p>
        <div className="flex flex-wrap gap-8">
          <a
            href="#"
            className="font-label uppercase tracking-[0.15em] text-xs font-semibold text-on-background border-b border-primary pb-1 hover:opacity-70 transition-opacity duration-300"
          >
            Book Consultation
          </a>
          <a
            href="#"
            className="font-label uppercase tracking-[0.15em] text-xs font-semibold text-on-surface-variant hover:text-on-background transition-colors duration-300"
          >
            Request Proposal
          </a>
        </div>
      </div>
      {/* Abstract decorative element mimicking stone texture */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-20 pointer-events-none -z-10 bg-gradient-to-bl from-primary to-transparent blur-[100px] rounded-full"></div>
    </section>
  );
}

function Partners() {
  const partners = [
    { title: 'Jewellery Brands', desc: 'Identity-led growth.' },
    { title: 'Ecommerce Stores', desc: 'Performance-driven scale.' },
    { title: 'Manufacturers', desc: 'Strategic B2B visibility.' },
    { title: 'Retailers', desc: 'Traffic and conversion growth.' },
  ];

  return (
    <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="col-span-1 md:col-span-10 md:col-start-2 border-t border-surface-container-highest pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div className="col-span-1 lg:col-span-4 mb-4 lg:mb-0">
          <span className="inline-block px-3 py-1 border border-outline text-on-surface-variant font-label text-xs font-semibold uppercase mb-8 tracking-[0.15em]">
            Partners
          </span>
          <h2 className="font-headline text-4xl md:text-[48px] leading-tight text-on-background">
            Who We Work With
          </h2>
        </div>
        <div className="col-span-1 lg:col-span-7 lg:col-start-6 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
          {partners.map((partner) => (
            <div key={partner.title} className="group flex flex-col gap-4 cursor-pointer">
              <div className="h-[1px] w-full bg-surface-container-highest group-hover:bg-primary transition-colors duration-500"></div>
              <div>
                <h3 className="font-headline text-2xl text-on-background group-hover:text-primary transition-colors duration-500 mb-2">
                  {partner.title}
                </h3>
                <p className="font-body text-base text-on-surface-variant leading-[1.7]">
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeServices() {
  return (
    <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="col-span-1 md:col-span-10 md:col-start-2 bg-surface">
        <div className="mb-16">
          <h2 className="font-headline text-4xl md:text-[48px] leading-[1.2] text-on-background mb-6">
            Strategic Services
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-xl leading-[1.8]">
            Precision-engineered growth solutions tailored exclusively for the
            high-end jewellery sector.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:h-[600px]">
          {/* Large Feature Box */}
          <div className="md:col-span-8 bg-surface-container border border-surface-container-highest p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group min-h-[400px] lg:min-h-[600px] md:min-h-0">
            <img
              src="https://i.imgur.com/t8xsXqV.jpg"
              alt="Runway fashion model in cream silk dress"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent opacity-90"></div>
            <div className="relative z-10">
              <h3 className="font-headline text-3xl md:text-4xl text-white mb-4">
                Customer Acquisition
              </h3>
              <p className="font-body text-base md:text-lg text-white/90 max-w-md leading-[1.7]">
                Data-driven campaigns designed to attract and convert
                high-net-worth individuals globally.
              </p>
            </div>
          </div>

          {/* Vertical Stack */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="flex-1 bg-surface-container-low border border-surface-container-highest p-8 flex flex-col justify-center hover:bg-surface-container transition-colors">
              <LineChart className="text-primary mb-6 w-10 h-10" strokeWidth={1.5} />
              <h3 className="font-headline text-2xl text-on-background mb-2">
                Strategic Advertising
              </h3>
              <p className="font-body text-base text-on-surface-variant leading-[1.7]">
                Omnichannel strategies maximizing ROAS.
              </p>
            </div>
            <div className="flex-1 bg-surface-container-low border border-surface-container-highest p-8 flex flex-col justify-center hover:bg-surface-container transition-colors">
              <TrendingUp className="text-primary mb-6 w-10 h-10" strokeWidth={1.5} />
              <h3 className="font-headline text-2xl text-on-background mb-2">
                Performance Optimization
              </h3>
              <p className="font-body text-base text-on-surface-variant leading-[1.7]">
                Continuous refinement of digital assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="col-span-1 md:col-span-10 md:col-start-2 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center lg:pr-8">
          <span className="inline-block px-3 py-1 border border-outline text-on-surface-variant font-label text-xs font-semibold uppercase mb-8 tracking-[0.15em] w-fit">
            The Niche
          </span>
          <h2 className="font-headline text-4xl md:text-[48px] leading-[1.2] text-on-background mb-8">
            Why W.B.A
          </h2>
          <p className="font-body text-lg leading-[1.8] text-on-surface-variant mb-6">
            We possess an unparalleled understanding of the jewellery industry.
            Our approach marries the clinical precision of modern performance
            marketing with the nuanced storytelling required for luxury goods.
          </p>
          <p className="font-body text-base leading-[1.7] text-on-surface-variant">
            We don't just drive traffic; we curate an audience that appreciates
            craftsmanship and heritage.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mt-0 items-start">
          <div className="w-full relative group aspect-[3/4]">
            <div className="overflow-hidden bg-surface-container-low h-full">
              <img
                src="https://i.imgur.com/LX2mYbp.jpg"
                alt="Luxury jewellery detail and craftsmanship"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
          <div className="w-full relative group md:mt-24 aspect-[3/4]">
            <div className="overflow-hidden bg-surface-container-low h-full">
              <img
                src="https://i.imgur.com/jmTw1eR.jpg"
                alt="Premium jewellery editorial atmosphere"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlobalReach() {
  return (
    <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8 relative pb-40">
      <div className="col-span-1 md:col-span-10 md:col-start-2 border-y border-surface-container-highest py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 overflow-hidden w-full aspect-video bg-surface-container">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop"
            alt="Dubai skyline"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-90 p-4"
          />
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-8 order-1 lg:order-2 mb-12 lg:mb-0">
          <h2 className="font-headline text-4xl md:text-[48px] leading-[1.2] text-on-background mb-6">
            Global Reach,
            <br />
            UAE Based.
          </h2>
          <p className="font-body text-lg leading-[1.8] text-on-surface-variant mb-8">
            Headquartered in the thriving hub of the UAE, we connect local
            artistry with global markets, orchestrating campaigns that resonate
            across continents.
          </p>
          <div className="flex items-center gap-4 text-primary font-label text-xs font-semibold tracking-[0.15em] uppercase">
            <Globe className="w-5 h-5" strokeWidth={1.5} />
            Worldwide Operations
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="col-span-1 md:col-span-8 md:col-start-3 text-center flex flex-col items-center justify-center">
        <h2 className="font-headline text-4xl md:text-[48px] leading-[1.2] text-on-background mb-8 max-w-3xl">
          Ready to elevate your brand's digital presence?
        </h2>
        <p className="font-body text-lg leading-[1.8] text-on-surface-variant mb-12 max-w-xl">
          Partner with us to engineer a growth strategy as meticulously crafted as
          your collections.
        </p>
        <a
          href="#"
          className="font-label uppercase tracking-[0.15em] text-xs font-semibold text-on-background border border-on-background px-8 py-4 hover:bg-on-background hover:text-background transition-colors duration-300"
        >
          Initiate Conversation
        </a>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <main className="flex-grow pt-40 px-6 md:px-16 max-w-[1440px] mx-auto w-full">
      <Hero />
      <Partners />
      <HomeServices />
      <Editorial />
      <GlobalReach />
      <CTA />
    </main>
  );
}
