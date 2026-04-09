export interface Service {
  id: string;
  name: string;
  description: string;
  details: string[];
  icon: string; // lucide icon name or emoji fallback
  category: ServiceCategory;
  isHighlighted?: boolean; // Aadhaar, PAN, Xerox get accent treatment
}

export type ServiceCategory =
  | "identity"
  | "certificates"
  | "travel"
  | "legal"
  | "financial"
  | "recharge"
  | "print"
  | "other";

export interface PaymentInfo {
  upiId: string;
  whatsappNumber: string;
  supportedApps: PaymentApp[];
}

export interface PaymentApp {
  name: string;
  color: string;
  logo: string; // react-icons key or image path
}
