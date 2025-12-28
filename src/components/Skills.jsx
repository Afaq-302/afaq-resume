'use client';

import { skills } from "@/lib/data";
import { Code2, Server, Database, Wrench } from "lucide-react";

const categoryConfig = {
  frontend: {
    title: "Frontend",
    icon: Code2,
    description: "Building beautiful, responsive user interfaces",
  },
  backend: {
    title: "Backend",
    icon: Server,
    description: "Scalable server-side solutions",
  },
  database: {
    title: "Database & Storage",
    icon: Database,
    description: "Data management and persistence",
  },
  tools: {
    title: "Tools & DevOps",
    icon: Wrench,
    description: "Development and deployment tools",
  },
};

export function Skills() {
  return (
    <section id="skills" className="relative bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4">
            {"<Skills />"}
          </span>
          <h2 className="section-title mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building modern web applications from frontend to deployment
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {Object.keys(skills).map((category, categoryIndex) => {
            const config = categoryConfig[category];
            const Icon = config.icon;

            return (
              <div
                key={category}
                className="glass-card-hover p-6 lg:p-8"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{config.title}</h3>
                    <p className="text-sm text-muted-foreground">{config.description}</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skills[category].map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Technologies I work with daily</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "Prisma",
              "Git",
              "Docker",
              "Vercel",
            ].map((tech) => (
              <span key={tech} className="skill-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
