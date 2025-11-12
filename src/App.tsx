import './App.css';
import Contact from './components/Contact.tsx';
import Navigation from './components/Navigation.tsx';
import { Toaster } from "@/components/ui/sonner";


function App() {
  return (
    <>
      <Navigation />
      <Contact/>
      <Toaster />
    </>
  );
}

export default App;
