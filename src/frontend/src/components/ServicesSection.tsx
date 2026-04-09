import { Badge } from "@/components/ui/badge";
import * as Icons from "lucide-react";
import { useMemo, useState } from "react";
import {
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
  categoryLabels,
  services,
} from "../data/services";
import type { Service, ServiceCategory } from "../types";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Fingerprint: Icons.Fingerprint,
  CreditCard: Icons.CreditCard,
  Vote: Icons.Vote,
  Car: Icons.Car,
  BookOpen: Icons.BookOpen,
  Train: Icons.Train,
  Bus: Icons.Bus,
  Plane: Icons.Plane,
  Hotel: Icons.Hotel,
  FileText: Icons.FileText,
  Shield: Icons.Shield,
  Home: Icons.Home,
  Baby: Icons.Baby,
  FileCheck: Icons.FileCheck,
  Heart: Icons.Heart,
  Package: Icons.Package,
  MapPin: Icons.MapPin,
  Building: Icons.Building,
  KeyRound: Icons.KeyRound,
  Stamp: Icons.Stamp,
  Receipt: Icons.Receipt,
  Store: Icons.Store,
  IndianRupee: Icons.IndianRupee,
  Landmark: Icons.Landmark,
  ShieldCheck: Icons.ShieldCheck,
  Smartphone: Icons.Smartphone,
  Zap: Icons.Zap,
  Printer: Icons.Printer,
  Camera: Icons.Camera,
  Layers: Icons.Layers,
};

function ServiceCard({ service }: { service: Service }) {
  const IconComponent = ICON_MAP[service.icon] ?? Icons.Star;
  const whatsappMsg = `Hi, I need help with ${service.name}`;
  const waLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div
      className={`card-hover rounded-xl p-5 flex flex-col gap-3 bg-card border ${
        service.isHighlighted ? "highlight-border" : "border-border shadow-soft"
      }`}
      data-ocid={`service-card-${service.id}`}
    >
      {/* Icon + highlight badge */}
      <div className="flex items-start justify-between">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center icon-hover ${
            service.isHighlighted ? "bg-primary/10" : "bg-secondary"
          }`}
        >
          <IconComponent
            className={`w-6 h-6 ${service.isHighlighted ? "text-primary" : "text-foreground/70"}`}
          />
        </div>
        {service.isHighlighted && (
          <Badge className="text-xs bg-primary/10 text-primary border-primary/20 font-medium">
            Popular
          </Badge>
        )}
      </div>

      {/* Name & description */}
      <div>
        <h3 className="font-display font-semibold text-foreground text-base leading-tight">
          {service.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 leading-snug">
          {service.description}
        </p>
      </div>

      {/* Sub-services list */}
      <ul className="flex flex-col gap-1 flex-1">
        {service.details.slice(0, 4).map((detail) => (
          <li
            key={detail}
            className="flex items-center gap-2 text-xs text-foreground/75"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
            {detail}
          </li>
        ))}
        {service.details.length > 4 && (
          <li className="text-xs text-muted-foreground pl-3.5">
            +{service.details.length - 4} more...
          </li>
        )}
      </ul>

      {/* WhatsApp CTA */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp justify-center mt-1"
        data-ocid={`service-whatsapp-${service.id}`}
      >
        <svg
          className="w-4 h-4 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Contact on WhatsApp
      </a>
    </div>
  );
}

const FILTER_TABS: { label: string; value: ServiceCategory | "all" }[] = [
  { label: "All Services", value: "all" },
  { label: "Identity", value: "identity" },
  { label: "Certificates", value: "certificates" },
  { label: "Travel", value: "travel" },
  { label: "Legal & Property", value: "legal" },
  { label: "Financial", value: "financial" },
  { label: "Recharge & Bills", value: "recharge" },
  { label: "Print & Photo", value: "print" },
];

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory | "all">(
    "all",
  );

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? services
        : services.filter((s) => s.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="services" className="bg-background py-14 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2
            className="font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            🧾 Our Services
          </h2>
          <p className="text-primary font-semibold text-base">
            All Digital & Online Services Available in One Place
          </p>
          <p className="mt-3 text-muted-foreground text-base max-w-xl mx-auto">
            From government documents to travel bookings — we handle everything
            quickly and reliably. Contact us on WhatsApp for instant assistance.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-8"
          data-ocid="services-filter-tabs"
          role="tablist"
          aria-label="Filter services by category"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={activeFilter === tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-smooth border ${
                activeFilter === tab.value
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
              data-ocid={`filter-tab-${tab.value}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-sm text-muted-foreground mb-6">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filtered.length}
          </span>{" "}
          services
          {activeFilter !== "all" && (
            <>
              {" "}
              in{" "}
              <span className="font-semibold text-foreground">
                {categoryLabels[activeFilter]}
              </span>
            </>
          )}
        </p>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          data-ocid="services-grid"
        >
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* WhatsApp CTA banner */}
        <div className="mt-10 rounded-2xl bg-primary/5 border border-primary/15 p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div>
            <p className="font-display font-semibold text-foreground text-lg">
              Need a service not listed here?
            </p>
            <p className="text-muted-foreground text-sm mt-0.5">
              Contact us on WhatsApp and we'll assist you right away.
            </p>
          </div>
          <a
            href={`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need assistance with a service")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp whitespace-nowrap flex-shrink-0"
            data-ocid="services-general-whatsapp-cta"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
