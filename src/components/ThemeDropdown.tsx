import { Moon, Sun, Zap } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = [
    { value: 'light' as const, label: 'Light', icon: Sun },
    { value: 'dark' as const, label: 'Dark', icon: Moon },
    { value: 'auto' as const, label: 'Auto', icon: Zap },
  ];

  const currentOption = options.find((opt) => opt.value === theme);
  const CurrentIcon = currentOption?.icon || Sun;

  return (
    <div ref={dropdownRef} className="relative">
      <Button
        variant="outline" size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors rounded-full"
      >
        <CurrentIcon />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-30 bg-popover border border-border rounded-lg shadow-lg z-50">
          {options.map(({ value, label, icon: Icon }) => (
            <Button
              key={value}
              onClick={() => {
                setTheme(value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-2 py-2.5 text-left transition-colors text-popover-foreground bg-primary-foreground hover:bg-muted
              ${value === 'light' ? 'rounded-t-md' : ''} ${value === 'auto' ? 'rounded-b-md' : ''}`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
