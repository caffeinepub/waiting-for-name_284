import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "../data/services";

const WA_ICON = (
  <svg
    className="w-4 h-4 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function LogoImage() {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-soft"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
        }}
      >
        <span
          className="text-white font-bold text-xl leading-none"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          AV
        </span>
      </div>
    );
  }
  return (
    <img
      src="/assets/logo.png"
      alt="AV Online Services Logo"
      className="h-14 w-auto object-contain"
      onError={() => setError(true)}
    />
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Payment", href: "#payment" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top info bar */}
      <div className="bg-primary py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          <a
            href={`tel:+91${WHATSAPP_NUMBER}`}
            className="flex items-center gap-1.5 text-xs text-white/90 hover:text-white transition-smooth font-medium"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            📞 +91 {WHATSAPP_NUMBER}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-green-500 hover:bg-green-400 rounded-full px-3 py-1 transition-smooth"
            data-ocid="topbar-whatsapp-btn"
          >
            {WA_ICON}
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b border-border shadow-soft">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0">
            <LogoImage />
            <div className="hidden sm:block">
              <p
                className="font-bold text-lg leading-tight text-foreground"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                AV Online Services
              </p>
              <p className="text-xs text-muted-foreground">
                Your One Stop Digital Service Center
              </p>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-smooth"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: WA button + mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hidden sm:inline-flex"
              data-ocid="header-contact-btn"
            >
              {WA_ICON}
              Contact WhatsApp
            </a>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-smooth"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-ocid="header-mobile-menu-btn"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden bg-white border-t border-border px-4 py-3 flex flex-col gap-2"
            data-ocid="header-mobile-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground py-2 border-b border-border/50 hover:text-primary transition-smooth"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center mt-2"
              data-ocid="header-mobile-whatsapp-btn"
            >
              {WA_ICON}
              Contact on WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 py-12 sm:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/90 font-medium mb-5">
            ✨ Digital Service Center
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            AV Online Services
            <span className="block text-blue-200">– Digital Solutions</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-blue-100 font-medium mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            మీ అన్ని ఆన్‌లైన్ సేవలకు ఒకే నమ్మకమైన స్థలం
          </p>
          <p className="text-sm text-blue-200/80 mb-6">
            Your One Trusted Place for All Online Services
          </p>

          {/* Tagline pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              "Government Job Notifications",
              "Exam Applications",
              "Online Services",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/15 border border-white/25 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 font-semibold text-sm px-6 py-3 rounded-xl shadow-elevated hover:bg-blue-50 transition-smooth"
              data-ocid="hero-view-services-btn"
            >
              🧾 View Our Services
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center px-6 py-3 text-sm"
              data-ocid="hero-whatsapp-btn"
            >
              {WA_ICON}
              Contact on WhatsApp
            </a>
          </div>

          {/* Bottom taglines */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-blue-200/70">
            <span>✦ Your One Stop Digital Service Center</span>
            <span>✦ Apply Online Easily & Quickly</span>
            <span>✦ Trusted Services for Jobs & Applications</span>
          </div>
        </div>
      </div>
    </header>
  );
}
