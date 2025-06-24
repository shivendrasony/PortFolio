"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Code, Database, Server, Wrench, Layers, Sparkles } from "lucide-react"

export function ModernTechStackSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const techStack = {
    Frontend: {
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    Backend: {
      icon: Server,
      color: "from-green-500 to-emerald-500",
      technologies: ["Node.js", "Express.js", "Django", "REST API", "GraphQL"],
    },
    Database: {
      icon: Database,
      color: "from-purple-500 to-violet-500",
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    },
    "DevOps & Tools": {
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      technologies: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Netlify", "AWS", "Linux CLI"],
    },
    Others: {
      icon: Layers,
      color: "from-pink-500 to-rose-500",
      technologies: ["TypeScript", "Redux", "Prisma", "Webpack", "JWT/Auth"],
    },
  }

  return (
    <section id="tech-stack" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Technologies & Tools</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-gradient">Tech Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, { icon: Icon, color, technologies }]) => (
            <Card
              key={category}
              className={`card-hover glass border-0 shadow-2xl relative overflow-hidden group ${
                hoveredCategory === category ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity`}
              />

              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{category}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="relative">
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-sm px-3 py-1 rounded-xl glass border border-white/10 hover:scale-105 transition-transform cursor-default"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <div className="mt-20 glass rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "Frontend Development", level: 95 },
              { skill: "Backend Development", level: 90 },
              { skill: "Database Design", level: 85 },
              { skill: "DevOps & Deployment", level: 80 },
            ].map(({ skill, level }) => (
              <div key={skill} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill}</span>
                  <span className="text-primary font-bold">{level}%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
