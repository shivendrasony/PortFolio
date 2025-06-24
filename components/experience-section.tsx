import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "TechCorp Solutions",
      location: "Remote",
      duration: "Jun 2023 - Aug 2023",
      description:
        "Developed and maintained web applications using React.js and Node.js. Collaborated with senior developers to implement new features and optimize existing code. Gained hands-on experience with agile development methodologies.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Git"],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      duration: "Jan 2023 - May 2023",
      description:
        "Built responsive user interfaces for a fintech startup. Implemented modern design systems and improved application performance by 40%. Worked closely with UX/UI designers to create pixel-perfect implementations.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Figma"],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      duration: "Sep 2022 - Dec 2022",
      description:
        "Delivered custom web solutions for small businesses and startups. Managed complete project lifecycle from requirements gathering to deployment. Built e-commerce platforms, portfolio websites, and business applications.",
      technologies: ["WordPress", "React.js", "PHP", "MySQL", "AWS"],
    },
    {
      title: "Academic Project Lead",
      company: "University Computer Science Department",
      location: "University Campus",
      duration: "Jan 2022 - May 2022",
      description:
        "Led a team of 5 students in developing a campus management system. Implemented features for student registration, course management, and grade tracking. Presented the project at the annual tech symposium.",
      technologies: ["Django", "Python", "PostgreSQL", "Bootstrap", "JavaScript"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-foreground">{experience.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{experience.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
