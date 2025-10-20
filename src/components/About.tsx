const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-primary">
              My Journey into Data Science
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey into Data Science began during high school when I first explored Python. 
              What started as simple coding soon transformed into a deep fascination with data-driven 
              insights and intelligent systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Discovering how raw data could unveil meaningful patterns and influence decision-making 
              sparked my passion for AI and ML — a curiosity that continues to shape my academic and 
              professional path.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I serve as the Technical Head for the Data Science Students Association and 
              the Technical Head for the Geeks for Geeks Student Chapter LTCoE, where I actively 
              contribute towards technical growth and community engagement.
            </p>
          </div>

          <div className="animate-slide-in-right">
            <div className="card-gradient border-0 rounded-2xl p-8 hover-lift backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Bachelor of Technology</h4>
                  <p className="text-muted-foreground">Computer Science and Engineering</p>
                  <p className="text-muted-foreground">Specialization in Data Science</p>
                  <p className="text-sm text-primary mt-2">
                    Lokmanya Tilak College of Engineering
                  </p>
                  <p className="text-sm text-muted-foreground">Pre-final year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;