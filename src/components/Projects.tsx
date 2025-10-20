import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Network Security Using ETL Pipelines",
      description: "A PHP-MySQL-based security system designed to detect and prevent unauthorized data leaks with Morse code passkey mechanism.",
      longDescription: "Built with XAMPP, it integrates admin-controlled user management, transaction monitoring, and secure file transfers. The system ensures data confidentiality and integrity, leveraging Morse code as an additional encryption layer.",
      tech: ["Python", "ETL Pipelining", "Dagshub", "MLops", "HTML5", "CSS", "JavaScript"],
      link: "https://github.com/ganesh-1433/networksecurity",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rutvij Jadhav", url: "https://www.linkedin.com/in/jadhavrutvij/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" }
      ]
    },
    {
      title: "Data Leakage Detection System",
      description: "Detects and prevents unauthorized data leaks using Morse code encryption and secure authentication mechanisms.",
      longDescription: "A PHP-MySQL-based security system with Morse code-based passkey mechanism. If guessed incorrectly twice, access is blocked. Ideal for organizations handling sensitive information.",
      tech: ["PHP", "PhpMyAdmin", "MySQL", "HTML5", "CSS", "JavaScript", "Bootstrap"],
      link: "https://github.com/ganesh-1433/Data_Leakage",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rutvij Jadhav", url: "https://www.linkedin.com/in/jadhavrutvij/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" }
      ]
    },
    {
      title: "Online Voting System",
      description: "A secure and transparent Python-based platform designed to facilitate digital elections with integrity and end-to-end encryption.",
      longDescription: "Built using Flask, SQLite and Cryptography, it ensures voter authentication and tamper-proof voting records with SHA-256 hashing and OTP-based authentication.",
      tech: ["Python", "Flask", "SQLite", "HTML5", "CSS", "Cryptography"],
      link: "https://github.com/ganesh-1433/networksecurity",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" }
      ]
    },
    {
      title: "Morse Code Trainer",
      description: "Interactive Python-based learning tool designed to teach Morse code efficiently with real-time encoding and decoding.",
      longDescription: "Built using Flask and Tkinter with adaptive training modules. Supports text-to-Morse and Morse-to-text conversion with customizable difficulty levels and visual pattern analysis.",
      tech: ["Python", "Flask", "Tkinter", "NumPy", "Matplotlib"],
      link: "https://github.com/example/project",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Explore my portfolio of data science and security projects
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient border-0 hover-lift group overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative">
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground text-sm rounded-full border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(114,221,247,0.3)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Users className="w-4 h-4" />
                    <span>Contributors:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.contributors.map((contributor, i) => (
                      <a
                        key={i}
                        href={contributor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        {contributor.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;