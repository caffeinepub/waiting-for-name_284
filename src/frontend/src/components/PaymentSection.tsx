import { CheckCircle, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { SiGooglepay, SiPaytm, SiPhonepe } from "react-icons/si";
import { UPI_ID, WHATSAPP_NUMBER } from "../data/services";

const UPI_QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(`upi://pay?pa=${UPI_ID}&pn=AV+Online+Services&cu=INR`)}&bgcolor=ffffff&color=1e40af&margin=10`;

export default function PaymentSection() {
  const [copied, setCopied] = useState(false);
  const [qrLoaded, setQrLoaded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(UPI_ID).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // Reset qrLoaded on mount
  useEffect(() => {
    setQrLoaded(false);
  }, []);

  return (
    <section
      id="payment"
      className="bg-muted/40 border-t border-border py-14 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Scan & Pay
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">
            Secure & Instant Payment
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-md mx-auto">
            Pay using any UPI app. After payment, send a screenshot on WhatsApp
            for quick verification.
          </p>
        </div>

        {/* Payment card */}
        <div className="max-w-lg mx-auto">
          <div
            className="bg-card rounded-2xl border border-border shadow-elevated p-8 flex flex-col items-center gap-6"
            data-ocid="payment-card"
          >
            {/* QR Code */}
            <div className="relative">
              <div
                className={`w-56 h-56 rounded-xl border-2 border-primary/20 overflow-hidden bg-secondary flex items-center justify-center transition-smooth ${
                  qrLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ minHeight: "14rem" }}
              >
                <img
                  src={UPI_QR_URL}
                  alt={`QR code to pay via UPI ID: ${UPI_ID}`}
                  width={220}
                  height={220}
                  onLoad={() => setQrLoaded(true)}
                  className="w-full h-full object-contain"
                  data-ocid="payment-qr-image"
                />
              </div>
              {!qrLoaded && (
                <div className="absolute inset-0 w-56 h-56 rounded-xl bg-secondary flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                </div>
              )}
              {/* Corner accents */}
              <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-sm" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-sm" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-sm" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-sm" />
            </div>

            {/* UPI ID display */}
            <div className="flex flex-col items-center gap-2 w-full">
              <p className="text-sm text-muted-foreground font-medium">
                UPI ID
              </p>
              <div className="flex items-center gap-3 bg-primary/5 border border-primary/15 rounded-xl px-5 py-3 w-full justify-between">
                <span className="upi-id-display text-xl sm:text-2xl tracking-tight break-all">
                  {UPI_ID}
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy UPI ID"
                  className="flex-shrink-0 p-2 rounded-lg hover:bg-primary/10 transition-smooth text-primary"
                  data-ocid="payment-copy-upi"
                >
                  {copied ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
              {copied && (
                <span className="text-xs text-green-600 font-medium">
                  UPI ID copied to clipboard!
                </span>
              )}
            </div>

            {/* Supported payment apps */}
            <div className="flex flex-col items-center gap-3 w-full">
              <p className="text-sm text-muted-foreground font-medium">
                Pay with any UPI app
              </p>
              <div className="flex items-center justify-center gap-4">
                {/* PhonePe */}
                <div
                  className="icon-hover flex flex-col items-center gap-1.5 p-3 rounded-xl bg-card border border-border shadow-soft cursor-pointer"
                  data-ocid="payment-app-phonepe"
                >
                  <SiPhonepe
                    className="w-8 h-8"
                    style={{ color: "#5f259f" }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-foreground/70">
                    PhonePe
                  </span>
                </div>
                {/* Google Pay */}
                <div
                  className="icon-hover flex flex-col items-center gap-1.5 p-3 rounded-xl bg-card border border-border shadow-soft cursor-pointer"
                  data-ocid="payment-app-gpay"
                >
                  <SiGooglepay
                    className="w-8 h-8"
                    style={{ color: "#4285F4" }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-foreground/70">
                    Google Pay
                  </span>
                </div>
                {/* Paytm */}
                <div
                  className="icon-hover flex flex-col items-center gap-1.5 p-3 rounded-xl bg-card border border-border shadow-soft cursor-pointer"
                  data-ocid="payment-app-paytm"
                >
                  <SiPaytm
                    className="w-8 h-8"
                    style={{ color: "#00BAF2" }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-foreground/70">
                    Paytm
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp screenshot note */}
            <div
              className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 w-full"
              data-ocid="payment-whatsapp-note"
            >
              <svg
                className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <p className="text-sm text-green-800">
                After payment, please send a <strong>payment screenshot</strong>{" "}
                on WhatsApp:{" "}
                <a
                  href={`https://wa.me/91${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-green-700"
                  data-ocid="payment-whatsapp-link"
                >
                  +91 {WHATSAPP_NUMBER}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
