import React, { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, this would send the data to a server
    alert('Thank you for your inquiry. We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <main className="flex-grow pt-40 px-6 md:px-16 max-w-[1440px] mx-auto w-full">
      {/* Header Section */}
      <section className="mb-40 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-1 md:col-span-8 md:col-start-3 text-center flex flex-col items-center">
          <span className="inline-block px-3 py-1 border border-outline text-on-surface-variant font-label text-xs font-semibold uppercase mb-8 tracking-[0.15em]">
            Enquire
          </span>
          <h1 className="font-display text-5xl md:text-[80px] leading-[1.1] tracking-[-0.02em] font-light text-on-background mb-8">
            Get in Touch.
          </h1>
          <p className="font-body text-lg leading-[1.8] text-on-surface-variant max-w-2xl mx-auto">
            We invite you to reach out for inquiries, consultations, or to discuss how W.B.A International FZE can elevate your global presence.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form */}
        <div className="col-span-1 lg:col-span-7 bg-surface-container-low border border-surface-container-highest p-8 md:p-12">
          <h2 className="font-headline text-[32px] leading-[1.3] text-on-background mb-8">Inquiry Form</h2>
          
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
  <input type="hidden" name="access_key" value="092f1492-3423-431d-a68f-645f63dd6e3d" />
  <input type="hidden" name="redirect" value="https://wbainternational.com/contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label htmlFor="firstName" className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-on-surface-variant block mb-2">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-surface-container-highest focus:border-on-background focus:ring-0 px-0 py-2 font-body text-base leading-[1.7] text-on-background transition-colors duration-300 outline-none" 
                  placeholder="Jane" 
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="lastName" className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-on-surface-variant block mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-surface-container-highest focus:border-on-background focus:ring-0 px-0 py-2 font-body text-base leading-[1.7] text-on-background transition-colors duration-300 outline-none" 
                  placeholder="Doe" 
                  required
                />
              </div>
            </div>
            
            <div className="relative">
              <label htmlFor="email" className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-on-surface-variant block mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-surface-container-highest focus:border-on-background focus:ring-0 px-0 py-2 font-body text-base leading-[1.7] text-on-background transition-colors duration-300 outline-none" 
                placeholder="jane.doe@example.com" 
                required
              />
            </div>
            
            <div className="relative">
              <label htmlFor="company" className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-on-surface-variant block mb-2">Company / Organization</label>
              <input 
                type="text" 
                id="company" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-surface-container-highest focus:border-on-background focus:ring-0 px-0 py-2 font-body text-base leading-[1.7] text-on-background transition-colors duration-300 outline-none" 
                placeholder="Maison Example" 
              />
            </div>
            
            <div className="relative">
              <label htmlFor="message" className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-on-surface-variant block mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-surface-container-highest focus:border-on-background focus:ring-0 p-4 font-body text-base leading-[1.7] text-on-background transition-colors duration-300 resize-none outline-none" 
                placeholder="How can we assist you?" 
                rows={4}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="mt-8 font-label text-xs uppercase tracking-[0.15em] font-semibold bg-on-background text-background px-8 py-4 border border-transparent hover:opacity-80 transition-all duration-300 w-full sm:w-auto"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Direct Contact & Map */}
        <div className="col-span-1 lg:col-span-4 lg:col-start-9 flex flex-col gap-12 mt-12 lg:mt-0">
          {/* Contact Info */}
          <div className="space-y-8 bg-surface border border-surface-container-highest p-8 md:p-12">
            <div>
              <h3 className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-on-surface-variant mb-4">Email</h3>
              <a href="mailto:info@wbainternational.com" className="font-body text-lg leading-[1.8] text-on-background hover:text-primary transition-colors duration-300 flex items-center gap-3">
                <Mail size={20} className="text-on-background" />
                info@wbainternational.com
              </a>
            </div>
            
            <div className="pt-8 border-t border-surface-container-highest">
  <h3 className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-on-surface-variant mb-4">Direct Communication</h3>
  <a href="https://wa.me/628179773616" target="_blank" rel="noreferrer" className="font-label text-xs uppercase tracking-[0.15em] font-semibold bg-transparent text-on-background border border-on-background px-6 py-4 hover:bg-on-background hover:text-background transition-all duration-300 flex items-center justify-center gap-3 w-full">
    <MessageCircle size={18} />
    Connect on WhatsApp
  </a>
</div>       
            <div className="pt-8 border-t border-surface-container-highest">
              <h3 className="font-label text-xs uppercase tracking-[0.15em] font-semibold text-on-surface-variant mb-4">Headquarters</h3>
              <address className="font-body text-base leading-[1.7] text-on-background not-italic">
                W.B.A INTERNATIONAL FZE<br/>
                Dubai Silicon Oasis<br/>
                DDP, Building A1<br/>
                Dubai, United Arab Emirates
              </address>
            </div>
          </div>

          {/* Map Visualization */}
          <div className="bg-surface-container border border-surface-container-highest overflow-hidden flex items-center justify-center relative aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1587&auto=format&fit=crop" 
              alt="Dubai skyline map representation" 
              className="w-full h-full object-cover saturate-[0.7] sepia-[0.2] transition-all duration-700 hover:scale-105 hover:saturate-100 hover:sepia-0"
            />
            <div className="absolute inset-0 bg-background/10 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
