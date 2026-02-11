import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out if you'd like to collaborate or just grab a
          coffee!
        </p>

        {/* Email CTA */}
        <div className="mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            asChild
          >
            <a href="mailto:kathesheanock@gmail.com">
              <Mail size={20} className="mr-2" />
              Send me an Email
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/KatheshEanock"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Github size={24} className="text-foreground" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/kathesh-eanock"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Linkedin size={24} className="text-foreground" />
            <span className="sr-only">LinkedIn</span>
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <Twitter size={24} className="text-foreground" />
            <span className="sr-only">Twitter</span>
          </a> */}
        </div>
      </div>
    </section>
  );
}
