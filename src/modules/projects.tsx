import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "User Management System",
      description:
        "A comprehensive user management application built with Redux and Redux-Saga. Features include user creation, deletion, editing, and real-time state synchronization with advanced middleware handling.",
      tags: ["React", "Redux", "Redux-Saga", "TypeScript", "Tailwind CSS"],
      image: "/user-management-dashboard.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "Built a responsive e-commerce dashboard with real-time data fetching using TanStack Query. Implemented caching strategies and optimistic updates for seamless user experience.",
      tags: ["React", "TanStack Query", "TypeScript", "API Integration"],
      image: "/ecommerce-dashboard-analytics.png",
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description:
        "Created a task management application with Zustand for state management. Features include real-time updates, filtering, and persistent storage with a clean, intuitive interface.",
      tags: ["React", "Zustand", "TypeScript", "Local Storage"],
      image: "/task-management-app-interface.png",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300 bg-background"
            >
              <div className="grid md:grid-cols-3 gap-6 p-8">
                {/* Project Image */}
                <div className="md:col-span-1">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 md:h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="md:col-span-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:bg-card bg-transparent"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border hover:bg-card bg-transparent"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
