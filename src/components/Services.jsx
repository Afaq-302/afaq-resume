'use client';

import { Code, Globe, Server, LayoutDashboard, Zap } from "lucide-react";
import { services } from "@/lib/data";

const iconMap = {
  Code: Code,
  Globe: Globe,
  Server: Server,
  LayoutDashboard: LayoutDashboard,
  Zap: Zap,
};

export function Services() {
  return (
    <section id="services" className="relative bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4">
            {"<Services />"}
          </span>
          <h2 className="section-title mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Comprehensive web development services tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;

            return (
              <div
                key={service.title}
                className="glass-card-hover p-8 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block px-8 py-6">
            <p className="text-lg mb-2">
              Have a project in mind?{" "}
              <span className="text-primary font-semibold">Let's talk!</span>
            </p>
            <p className="text-sm text-muted-foreground">
              I'm always open to discussing new projects and opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
