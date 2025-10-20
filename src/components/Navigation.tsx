import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            GP
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-primary/10"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open("https://drive.google.com/file/d/1DdOdDmVFqRthTtwPZd37DFkJqdwJGTJ9/view?usp=sharing", "_blank")}
            >
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start text-foreground hover:text-primary hover:bg-primary/10"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open("https://drive.google.com/file/d/1DdOdDmVFqRthTtwPZd37DFkJqdwJGTJ9/view?usp=sharing", "_blank")}
            >
              Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;