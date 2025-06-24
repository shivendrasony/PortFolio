import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TechStackSection() {
  const techStack = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "Django", "REST API", "GraphQL"],
    Database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    "DevOps & Tools": ["Git", "GitHub", "Docker", "Postman", "Vercel", "Netlify", "AWS", "Linux CLI"],
    Others: ["TypeScript", "Redux", "Prisma", "Webpack", "JWT/Auth"],
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, technologies]) => (
            <Card key={category} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
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
