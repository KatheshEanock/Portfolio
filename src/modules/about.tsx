"use client";

import { useEffect, useState } from "react";
import image from "../assets/image.jpg";

export default function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Profile Image */}
          <div className="flex items-center justify-center">
            <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate React developer with 1.6 years of hands-on
              experience building user-centric applications. I specialize in
              creating pixel-perfect interfaces that are not only beautiful but
              also performant and maintainable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in web development has given me a deep appreciation for
              clean code, responsive design, and user experience. I love
              learning new technologies and pushing the boundaries of what's
              possible on the web.
            </p>

            {/* Animated Specialist Cards */}
            <div className="space-y-4 mt-8">
              <div
                className={`p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 ${
                  animate ? "animate-specialist-1" : ""
                }`}
              >
                <h3 className="text-foreground font-semibold text-lg mb-2">
                  Frontend Specialist
                </h3>
                <p className="text-muted-foreground">
                  Expert in React, TypeScript, and modern CSS with focus on
                  component architecture and state management
                </p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {["React", "TypeScript", "JavaScript", "Tailwind CSS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div
                className={`p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 ${
                  animate ? "animate-specialist-2" : ""
                }`}
              >
                <h3 className="text-foreground font-semibold text-lg mb-2">
                  Problem Solver
                </h3>
                <p className="text-muted-foreground">
                  Strong analytical skills with ability to break down complex
                  problems and implement elegant solutions
                </p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {["Algorithm", "Debugging", "Optimization"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 ${
                  animate ? "animate-specialist-3" : ""
                }`}
              >
                <h3 className="text-foreground font-semibold text-lg mb-2">
                  Continuous Learner
                </h3>
                <p className="text-muted-foreground">
                  Always exploring new technologies, best practices, and
                  contributing to the developer community
                </p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {["Learning", "Growth", "Innovation"].map((trait) => (
                    <span
                      key={trait}
                      className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
