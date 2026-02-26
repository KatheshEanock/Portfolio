"use client";

import { useState } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme-context";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            My Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex gap-3 items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-primary/10 bg-transparent hover:text-foreground cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>

            {/* Download CV */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/cv.pdf";
                link.download = "KatheshEanock-Resume.pdf";
                link.click();
              }}
              className="gap-2 hover:bg-primary/10 hover:text-foreground bg-transparent cursor-pointer"
            >
              <Download size={16} />
              Download CV
            </Button>

            {/* CTA Button */}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              onClick={() => handleNavClick("#contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-primary/10 bg-transparent"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-muted-foreground hover:text-foreground px-2 py-2 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex gap-2">
              <Button
                variant="outline"
                className="w-full gap-2 bg-transparent"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv.pdf";
                  link.download = "KatheshEanock-Resume.pdf";
                  link.click();
                }}
              >
                <Download size={16} />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
