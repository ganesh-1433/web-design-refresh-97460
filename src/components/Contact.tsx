import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Images/phone.png",
      label: "Phone",
      value: "+91-8828826211",
      link: "tel:+918828826211"
    },
    {
      icon: "Images/email.png",
      label: "Email",
      value: "work.ganeshpawar03@gmail.com",
      link: "mailto:work.ganeshpawar03@gmail.com"
    }
  ];

  const socialLinks = [
    {
      icon: "Images/linkedin.svg",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ganesh-pawar143",
      color: "hover:opacity-80"
    },
    {
      icon: "Images/github.svg",
      label: "GitHub",
      url: "https://github.com/ganesh-1433",
      color: "hover:opacity-80"
    },
    {
      icon: "Images/instagram.svg",
      label: "Instagram",
      url: "https://www.instagram.com/ganesh_p1433",
      color: "hover:opacity-80"
    },
    {
      icon: "Images/twitter.svg",
      label: "Twitter",
      url: "https://x.com/gpawar0207",
      color: "hover:opacity-80"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-card border-border hover-lift">
              <CardContent className="p-6">
                <a 
                  href={info.link}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <img src={info.icon} alt={info.label} className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Connect on Social Media
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className={`border-border ${social.color} transition-all`}
                  onClick={() => window.open(social.url, "_blank")}
                >
                  <img src={social.icon} alt={social.label} className="w-5 h-5 mr-2" />
                  {social.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;