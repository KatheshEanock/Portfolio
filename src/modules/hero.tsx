"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen pt-32 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <div
          className="mb-6 animate-fade-in-up"
          style={{ animationDelay: "0s" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
            Hi, I'm a{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              React Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Crafting beautiful, performant web applications with React,
            TypeScript, and modern tools
          </p>
        </div>

        {/* Experience Badge */}
        <div
          className="mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="inline-block px-4 py-2 bg-card border border-border rounded-full">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">1.6+ years</span>{" "}
              of professional experience
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            onClick={() => handleNavClick("#projects")}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-card bg-transparent cursor-pointer"
            onClick={() => handleNavClick("#contact")}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div
          className="flex gap-4 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="https://github.com/KatheshEanock"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-primary/20 rounded-lg transition-colors duration-300"
          >
            <Github size={20} className="text-foreground" />
          </a>
          <a
            href="https://linkedin.com/in/kathesh-eanock"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-primary/20 rounded-lg transition-colors duration-300"
          >
            <Linkedin size={20} className="text-foreground" />
          </a>
          <a
            href="mailto:kathesheanock@gmail.com"
            className="p-3 bg-card hover:bg-primary/20 rounded-lg transition-colors duration-300"
          >
            <Mail size={20} className="text-foreground" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() => handleNavClick("#about")}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
