const OFFERS = [
  { text: "PAN Card Services – Fast Processing" },
  { text: "Online Applications – Quick & Easy Support" },
  { text: "Xerox & Printing – Instant Service" },
];

export default function SpecialOffersSection() {
  return (
    <section id="special-offers" className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl p-8 sm:p-10 text-center shadow-elevated"
          style={{
            background:
              "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #fcd34d 100%)",
          }}
          data-ocid="special-offers-card"
        >
          {/* Decorative stars */}
          <span className="absolute top-4 left-6 text-2xl opacity-40 select-none">
            ✦
          </span>
          <span className="absolute top-6 right-8 text-3xl opacity-30 select-none">
            ★
          </span>
          <span className="absolute bottom-4 left-12 text-xl opacity-30 select-none">
            ✦
          </span>
          <span className="absolute bottom-6 right-6 text-2xl opacity-40 select-none">
            ★
          </span>

          <h2
            className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            🎉 Special Offers Available Now
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {OFFERS.map((offer) => (
              <div
                key={offer.text}
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-5 py-3 shadow-soft"
              >
                <span className="text-green-600 font-bold text-xl flex-shrink-0">
                  ✔
                </span>
                <span
                  className="text-amber-900 font-semibold text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {offer.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
