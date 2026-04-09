const UPDATES = [
  "📌 NEET 2026 Registration – Apply Soon",
  "📌 CTET 2026 Notification – Apply Now",
  "📌 TG EAPCET 2026 – Applications Open",
  "📌 AP EAPCET 2026 – Registration Started",
  "📌 TGPSC Jobs – Apply Online",
  "📌 TGPSC Application Forms – Available",
  "📌 TGCET 2026 – Notification Released",
  "📌 SSC & UPSC Jobs – Latest Updates",
  "📌 Scholarships – Apply Now",
  "📌 Aadhaar & PAN Services Available",
];

const tickerText = UPDATES.join(" ● ");

export default function TickerBar() {
  return (
    <div
      className="bg-red-600 text-white py-2 overflow-hidden flex items-center ticker-wrapper"
      data-ocid="ticker-bar"
    >
      {/* Fixed label */}
      <div className="flex-shrink-0 bg-red-800 px-4 py-0.5 text-xs font-bold uppercase tracking-wide flex items-center gap-1 z-10">
        🆕 Latest Updates:
      </div>
      {/* Scrolling text */}
      <div className="flex-1 overflow-hidden ml-2">
        <span className="animate-ticker text-xs sm:text-sm font-medium">
          {tickerText} &nbsp;&nbsp;&nbsp;&nbsp; {tickerText}
        </span>
      </div>
    </div>
  );
}
