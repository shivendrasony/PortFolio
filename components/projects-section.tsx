import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern technologies for optimal performance.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Perfect for agile development teams.",
      technologies: ["React.js", "Express.js", "Socket.io", "PostgreSQL", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that provides real-time weather information, forecasts, and interactive maps. Features location-based weather data and beautiful visualizations.",
      technologies: ["React.js", "Chart.js", "Weather API", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Blog Platform",
      description:
        "A modern blog platform with content management system, user authentication, comment system, and SEO optimization. Built for content creators and bloggers.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "Markdown"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Real-time Chat App",
      description:
        "A real-time messaging application with group chats, file sharing, and emoji reactions. Features end-to-end encryption and cross-platform compatibility.",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
