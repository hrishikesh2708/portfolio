import Navigation from "@/components/navigation/Navigation";
import { Outlet } from "react-router-dom";
import Lanyard from "@/components/ui/Lanyard.tsx";
import AnimatedWaveFooter from "@/components/footer/Footer.tsx";
import ContactHero from "@/components/contact/ContactHero.tsx";
import { Toaster } from "@/components/ui/sonner";

export default function Layout() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1440px] overflow-visible">
        
        {/* Fixed Navigation */}
        <div className="fixed top-6 max-w-[1440px] w-full z-50 h-16">
          <Navigation />
        </div>

        {/* Common Lanyard */}
        <Lanyard position={[10, 0, 30]} gravity={[0, -40, 0]} transparent={true} fov={20} />

        {/* Routed Pages */}
        <Outlet />

        {/* Common Contact Hero + Footer */}
        <ContactHero />
        <AnimatedWaveFooter />

        <Toaster />
      </div>
    </div>
  );
}