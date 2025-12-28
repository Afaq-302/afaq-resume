'use client';

import { ArrowDown, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { personalInfo, stats } from "@/lib/data";

export function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Intro line */}
          <div className="opacity-0-initial animate-fade-in-down inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for freelance work</span>
          </div>

          {/* Main headline */}
          <h1 className="opacity-0-initial animate-fade-in-up delay-100 section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            <span className="text-foreground">I build </span>
            <span className="gradient-text">fast, scalable</span>
            <br />
            <span className="text-foreground">MERN web apps & </span>
            <span className="gradient-text">modern websites</span>
          </h1>

          {/* Subheadline */}
          <p className="opacity-0-initial animate-fade-in-up delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {personalInfo.subheadline}
          </p>

          {/* Location */}
          <div className="opacity-0-initial animate-fade-in-up delay-300 flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">{personalInfo.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="opacity-0-initial animate-fade-in-up delay-400 flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 shadow-glow-sm hover:shadow-glow transition-shadow"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-border hover:border-primary hover:text-white"
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="opacity-0-initial animate-fade-in-up delay-500 flex items-center justify-center gap-4 mb-16">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="opacity-0-initial animate-fade-in-up delay-600 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-4 md:p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0-initial animate-fade-in delay-700">
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
