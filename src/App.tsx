import "./App.css";
import Contact from "./components/Contact.tsx";
import Navigation from "./components/Navigation.tsx";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen px-1 sm:px-6 md:px-8 lg:px-12 py-6 mx-auto max-w-[2560px]">
      <div className="w-full">
        <Navigation />
        <Contact />
        <Toaster />
      </div>
    </div>
  );
}

export default App;
