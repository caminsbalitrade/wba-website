import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 px-6 md:px-16 bg-on-background text-background border-none mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 text-center md:text-left">
        <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start justify-between">
          <div className="text-[13px] font-bold tracking-[0.3em] font-label text-background uppercase">
            <Link to="/">W.B.A INTERNATIONAL FZE</Link>
          </div>
          <p className="hidden md:block font-label text-[11px] tracking-[0.15em] uppercase text-surface-container mt-24 md:mt-0 opacity-60">
            © {new Date().getFullYear()} W.B.A INTERNATIONAL FZE. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="col-span-1 md:col-span-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end gap-10 md:gap-24">
          <nav className="flex flex-col items-center md:items-start gap-6">
            <Link
              to="/privacy-policy"
              className="font-label text-[11px] tracking-[0.15em] uppercase text-surface-container hover:text-background transition-colors duration-300 opacity-60 hover:opacity-100"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-label text-[11px] tracking-[0.15em] uppercase text-surface-container hover:text-background transition-colors duration-300 opacity-60 hover:opacity-100"
            >
              Terms of Service
            </Link>
          </nav>
          <nav className="flex flex-col items-center md:items-start gap-6">
            <a
              className="font-label text-[11px] tracking-[0.15em] uppercase text-surface-container hover:text-background transition-colors duration-300 opacity-60 hover:opacity-100"
              href="#"
            >
              LinkedIn
            </a>
            <a
              className="font-label text-[11px] tracking-[0.15em] uppercase text-surface-container hover:text-background transition-colors duration-300 opacity-60 hover:opacity-100"
              href="#"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>
      <p className="block md:hidden text-center font-label text-[11px] tracking-[0.15em] uppercase text-surface-container mt-16 opacity-60">
        © {new Date().getFullYear()} W.B.A INTERNATIONAL FZE.<br/>ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
