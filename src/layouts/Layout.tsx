import Navigation from "@/components/navigation/Navigation";
import { Outlet } from "react-router-dom";
import AnimatedWaveFooter from "@/components/footer/Footer.tsx";
import ContactHero from "@/components/contact/ContactHero.tsx";
import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Layout() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ScrollToTop />
      <div className="fixed top-6 max-w-[1440px] w-full z-50 h-16">
        <Navigation />
      </div>
      {/* Routed Pages */}
      <Outlet />
      <ContactHero />
      <AnimatedWaveFooter />

      <Toaster />
    </div>
  );
}
