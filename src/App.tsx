import './App.css';
import Contact from './components/Contact.tsx';
import Navigation from './components/Navigation.tsx';
import { Toaster } from "@/components/ui/sonner";


function App() {
  return (
    <div className='mx-auto px-1 w-full overflow-hidden'>
      <Navigation />
      <Contact/>
      <Toaster />
    </div>
  );
}

export default App;
