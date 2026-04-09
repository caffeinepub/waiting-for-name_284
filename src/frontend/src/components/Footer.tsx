import { WHATSAPP_LINK } from "../data/services";

const currentYear = new Date().getFullYear();
const hostname = typeof window !== "undefined" ? window.location.hostname : "";
const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

function FooterLogo() {
  const [err, setErr] = React.useState(false);
  if (err) {
    return (
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
        }}
      >
        <span
          className="text-white font-bold text-sm"
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
      alt="AV Online Services"
      className="h-10 w-auto object-contain"
      onError={() => setErr(true)}
    />
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <FooterLogo />
            <div>
              <p
                className="font-bold text-foreground text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                AV Online Services
              </p>
              <p className="text-xs text-muted-foreground">
                Your One Stop Digital Service Center
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <a
              href="#services"
              className="hover:text-primary transition-smooth"
            >
              Services
            </a>
            <a href="#payment" className="hover:text-primary transition-smooth">
              Payment
            </a>
            <a href="#contact" className="hover:text-primary transition-smooth">
              Contact
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-smooth"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="section-divider mt-6 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {currentYear} AV Online Services | All Rights Reserved</p>
          <p>
            Powered by{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-smooth font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
