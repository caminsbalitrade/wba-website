import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industry', path: '/industry' },
    { name: 'Contact', path: '/contact' }
  ];
  const { pathname } = useLocation();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-surface-container-highest">
      {/* Thin top dark strip */}
      <div className="w-full h-1.5 bg-on-background"></div>
      
      <div className="flex justify-between items-center px-6 md:px-16 h-20">
        {/* Logo - Left aligned */}
        <div className="w-auto lg:w-1/3 flex justify-start z-50 relative">
          <Link to="/" className="text-base md:text-lg font-label font-bold tracking-[0.2em] text-on-background uppercase hover:opacity-70 transition-opacity">
            W.B.A INTERNATIONAL FZE
          </Link>
        </div>

        {/* Navigation - Centered (Desktop) */}
        <nav className="hidden lg:flex w-1/3 justify-center gap-10 items-center">
          {navLinks.map((link) => {
            const isActive = link.path === '/' 
              ? pathname === '/' 
              : pathname.startsWith(link.path);
              
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-label uppercase tracking-[0.15em] text-[11px] font-semibold transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-on-background'
                    : 'text-on-surface-variant hover:text-on-background'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-on-background"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button - Right aligned (Desktop) */}
        <div className="hidden lg:flex w-1/3 justify-end items-center">
          <Link 
            to="/contact" 
            className="font-label uppercase tracking-[0.15em] text-[11px] font-semibold bg-on-background text-background px-8 py-3.5 hover:bg-on-surface-variant transition-colors duration-300"
          >
            Enquire
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden flex items-center justify-center py-2 z-50 relative text-on-background font-label uppercase tracking-[0.15em] text-[10px] font-semibold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-background border-b border-surface-container-highest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden overflow-hidden origin-top ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col py-8 px-6 gap-6">
          {navLinks.map((link) => {
            const isActive = link.path === '/' 
              ? pathname === '/' 
              : pathname.startsWith(link.path);
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-label uppercase tracking-[0.2em] text-xs font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'text-on-background'
                    : 'text-on-surface-variant hover:text-on-background'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="pt-6 mt-2 border-t border-surface-container-highest flex">
            <Link 
              to="/contact" 
              className="font-label uppercase tracking-[0.15em] text-[11px] font-semibold bg-on-background text-background px-8 py-3.5 hover:bg-on-surface-variant transition-colors duration-300 inline-block text-center"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
