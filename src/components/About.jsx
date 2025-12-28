'use client';

import { Download, CheckCircle2, Code2, Users, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";
import { personalInfo } from "@/lib/data";

const valueIcons = {
  "Clean Code": Code2,
  "User First": Users,
  "Continuous Learning": Lightbulb,
};

export function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image/Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl blur-2xl" />

              {/* Main card */}
              <div className="relative glass-card h-full flex items-center justify-center p-8">
                <div className="text-center">
                  {/* Code block illustration */}
                  <div className="inline-block p-6 rounded-2xl bg-secondary/50 mb-6">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <code className="text-sm md:text-base font-mono text-left block">
                      <span className="text-primary">const</span>{" "}
                      <span className="text-foreground">developer</span>{" "}
                      <span className="text-muted-foreground">=</span>{" "}
                      <span className="text-muted-foreground">{"{"}</span>
                      <br />
                      <span className="text-muted-foreground ml-4">name:</span>{" "}
                      <span className="text-green-400">"Afaq"</span>,
                      <br />
                      <span className="text-muted-foreground ml-4">role:</span>{" "}
                      <span className="text-green-400">"MERN Dev"</span>,
                      <br />
                      <span className="text-muted-foreground ml-4">passion:</span>{" "}
                      <span className="text-green-400">"Building"</span>,
                      <br />
                      <span className="text-muted-foreground ml-4">coffee:</span>{" "}
                      <span className="text-primary">true</span>
                      <br />
                      <span className="text-muted-foreground">{"}"}</span>
                    </code>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Turning caffeine into code since 2021
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-mono text-sm mb-4">
              {"<About />"}
            </span>
            <h2 className="section-title mb-6">
              Passionate Developer,{" "}
              <span className="gradient-text">Problem Solver</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {personalInfo.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">What I Care About</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personalInfo.values.map((value, index) => {
                  const Icon = valueIcons[value.title] || Code2;
                  return (
                    <div
                      key={index}
                      className="glass-card p-4 text-center hover:border-primary/30 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <h4 className="font-medium text-sm mb-1">{value.title}</h4>
                      <p className="text-xs text-muted-foreground">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <a href="/Afaq_Resume.pdf" download="Afaq_Resume.pdf">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
