"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Eye, GitFork } from "lucide-react"
import { useState } from "react"

export function ModernProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern technologies for optimal performance and scalability.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=300&width=500",
      stats: { stars: 124, forks: 32, views: "2.1k" },
      featured: true,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "AI Task Management",
      description:
        "An intelligent task management application with AI-powered suggestions, real-time collaboration, and advanced analytics. Features drag-and-drop functionality and team collaboration tools.",
      technologies: ["React.js", "Express.js", "Socket.io", "PostgreSQL", "OpenAI", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=300&width=500",
      stats: { stars: 89, forks: 21, views: "1.8k" },
      featured: true,
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard with real-time data visualization, interactive charts, and customizable widgets. Perfect for monitoring business metrics and KPIs.",
      technologies: ["React.js", "D3.js", "Chart.js", "WebSocket", "Redis", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=300&width=500",
      stats: { stars: 156, forks: 45, views: "3.2k" },
      featured: false,
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Social Media Platform",
      description:
        "A modern social media platform with real-time messaging, content sharing, and advanced privacy controls. Built for scalability and user engagement.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "Cloudinary", "Pusher"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=300&width=500",
      stats: { stars: 203, forks: 67, views: "4.5k" },
      featured: false,
      gradient: "from-pink-500 to-violet-600",
    },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology. Features smart contracts, voter verification, and real-time result tracking.",
      technologies: ["React.js", "Solidity", "Web3.js", "Ethereum", "IPFS", "MetaMask"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=300&width=500",
      stats: { stars: 78, forks: 19, views: "1.4k" },
      featured: false,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "AI Code Assistant",
      description:
        "An intelligent code assistant that helps developers write better code with AI-powered suggestions, code review, and automated testing capabilities.",
      technologies: ["Python", "FastAPI", "OpenAI", "Docker", "Redis", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/placeholder.svg?height=300&width=500",
      stats: { stars: 312, forks: 89, views: "6.7k" },
      featured: true,
      gradient: "from-cyan-500 to-blue-600",
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personal Image at the top of the Projects Section */}
        <div className="flex justify-center mb-8">
          <img
            src="/profile.webp"
            alt="Shivendra Sony Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
          />
        </div>
        {/* Contact and Social Info */}
        <div className="flex flex-col items-center mb-8 gap-2 text-muted-foreground">
          <div className="text-lg font-semibold text-foreground">Shivendra Sony</div>
          <div className="flex items-center gap-2">
            <span className="font-medium">📞</span>
            <a href="tel:+918210877490" className="hover:text-primary transition-colors">+91 8210877490</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">📍</span>
            <span>Ambala, Haryana</span>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/shivendrasony" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block align-middle"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/shivendra-sony-8232b5247/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block align-middle"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-5a6 6 0 016-6h2z" /><circle cx="8.5" cy="8.5" r="1.5" /></svg>
            </a>
          </div>
        </div>
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-gradient">Project Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects that demonstrate my skills and passion for creating innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Star className="w-6 h-6 text-primary" />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="card-hover glass border-0 shadow-2xl overflow-hidden group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                />

                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Project Stats */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="glass rounded-lg px-2 py-1 text-xs text-white flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stats.stars}
                    </div>
                    <div className="glass rounded-lg px-2 py-1 text-xs text-white flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {project.stats.forks}
                    </div>
                    <div className="glass rounded-lg px-2 py-1 text-xs text-white flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {project.stats.views}
                    </div>
                  </div>
                </div>

                <CardHeader className="relative">
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs glass border-white/20 hover:scale-105 transition-transform"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="btn-modern glass hover:glass-dark" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className={`btn-modern bg-gradient-to-r ${project.gradient} hover:scale-105 text-white`}
                      asChild
                    >
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
      </div>
    </section>
  )
}
