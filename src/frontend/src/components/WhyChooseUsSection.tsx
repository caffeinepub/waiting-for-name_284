const WHY_ITEMS = [
  {
    icon: "⚡",
    title: "Fast & Trusted Service",
    desc: "We process your applications quickly with accuracy and reliability.",
  },
  {
    icon: "🎓",
    title: "Experienced Assistance",
    desc: "Years of experience in handling government and digital services.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    desc: "Get premium service quality at the most affordable prices.",
  },
  {
    icon: "🏪",
    title: "All Services at One Place",
    desc: "From Aadhaar to Exam Applications — everything under one roof.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      className="py-14 px-4"
      style={{
        background: "linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)",
      }}
      data-ocid="why-choose-us"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Why Choose Us
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            ⭐ Why Choose AV Online Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="card-hover bg-white rounded-2xl p-6 border border-border shadow-soft text-center flex flex-col items-center gap-3"
              data-ocid={`why-item-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-soft"
                style={{
                  background:
                    "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                }}
              >
                {item.icon}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700 font-bold text-lg">✔</span>
                <h3
                  className="font-bold text-foreground text-base"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
