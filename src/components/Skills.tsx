import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "/images/python.png" },
        { name: "SQL", icon: "/images/sql.png" }
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "NumPy", icon: "/images/numpy.svg" },
        { name: "Pandas", icon: "/images/pandas.svg" },
        { name: "Matplotlib", icon: "/images/matplotlib.svg" },
        { name: "Seaborn", icon: "/images/seaborn.svg" },
        { name: "Scikit-Learn", icon: "/images/sklearn.svg" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Power BI", icon: "/images/powerbi.svg" },
        { name: "VS Code", icon: "/images/vscode.svg" },
        { name: "Tableau", icon: "/images/tableau.svg" },
        { name: "Excel", icon: "/images/excel.svg" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "/images/mysql.svg" },
        { name: "MongoDB", icon: "/images/mongodb.png" },
        { name: "Oracle", icon: "/images/oracle.svg" },
        { name: "SQLite", icon: "/images/sqlite.svg" },
        { name: "PostgreSQL", icon: "/images/postgresql.png" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card 
                    key={skillIndex}
                    className="card-gradient border-0 hover-lift group cursor-pointer backdrop-blur-sm"
                  >
                    <CardContent className="p-6 flex flex-col items-center gap-4 relative z-10">
                      <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(114,221,247,0.5)]">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/64?text=" + skill.name.charAt(0);
                          }}
                        />
                      </div>
                      <p className="text-sm font-medium text-center group-hover:gradient-text transition-all duration-300">
                        {skill.name}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;