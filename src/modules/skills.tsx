export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "State Management",
      skills: ["Zustand", "Redux", "React Context", "Redux-Saga"],
    },
    {
      title: "Data & Performance",
      skills: [
        "TanStack Query",
        "API Integration",
        "Performance Optimization",
        "Caching",
      ],
    },
    {
      title: "Tools & Methods",
      skills: ["Git", "REST APIs", "Component Libraries", "Responsive Design"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="px-4 py-2 bg-background rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
