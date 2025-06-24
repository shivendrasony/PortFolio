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

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index + featuredProjects.length}
                className="card-hover glass border-0 shadow-xl overflow-hidden group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                />

                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <div className="glass rounded px-1 py-0.5 text-xs text-white flex items-center gap-1">
                      <Star className="w-2 h-2" />
                      {project.stats.stars}
                    </div>
                  </div>
                </div>

                <CardHeader className="relative pb-2">
                  <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs glass border-white/20">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs glass border-white/20">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 glass hover:glass-dark" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.gradient} text-white`} asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
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
