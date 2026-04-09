import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PaymentSection from "./components/PaymentSection";
import ServicesSection from "./components/ServicesSection";
import SpecialOffersSection from "./components/SpecialOffersSection";
import TickerBar from "./components/TickerBar";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

export default function App() {
  return (
    <div id="home" className="min-h-screen flex flex-col bg-background">
      <Header />
      <TickerBar />
      <main className="flex-1">
        <SpecialOffersSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PaymentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
