'use client';

import { useState } from "react";
import { ExternalLink, Github, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { projects } from "@/lib/data";
import Image from "next/image";

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Next.js", value: "next" },
  { label: "React", value: "react" },
  { label: "Full-Stack", value: "fullstack" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-mono text-sm mb-4">
            {"<Projects />"}
          </span>
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of projects I've built, from full-stack applications to responsive websites
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`filter-btn ${activeFilter === filter.value ? "active" : ""}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card-hover group overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Project Image/Preview */}
              <div className="relative h-60 overflow-hidden bg-secondary/50">
                {/* Image */}
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={project.featured}
                  />
                ) : null}

                {/* Overlay + Fallback content */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />

                {/* Show fallback ONLY if no image provided */}
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">
                        {project.category.includes("fullstack")
                          ? "Full-Stack"
                          : project.category[0]?.toUpperCase()}
                      </span>
                    </div>
                  </div>
                )}

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-md">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>

                  {project.github ? (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled
                      className="opacity-50 cursor-not-allowed"
                      title="Private Repository"
                    >
                      <Lock className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* View More CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-border hover:border-primary hover:text-primary"
          >
            <a
              href="https://github.com/Afaq-302"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
