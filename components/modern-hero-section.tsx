"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Rocket } from "lucide-react"
import { useEffect, useState } from "react"

export function ModernHeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 animate-gradient" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      {/* Interactive Cursor Effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8 group hover:scale-105 transition-transform">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Available for new opportunities</span>
            <Sparkles className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient animate-gradient bg-gradient-to-r from-primary via-purple-500 to-pink-500">
              Shivendra Sony
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            <Code2 className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-xl sm:text-3xl lg:text-4xl text-muted-foreground font-medium">Full Stack Developer</h2>
            <Rocket className="w-8 h-8 text-purple-500 animate-bounce" />
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with{" "}
            <span className="text-primary font-semibold">cutting-edge technologies</span> and{" "}
            <span className="text-purple-500 font-semibold">innovative solutions</span>. I transform ideas into
            scalable, beautiful applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="group btn-modern bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-primary/25"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="glass hover:glass-dark rounded-2xl p-4 group" asChild>
                <a href="https://github.com/shivendrasony" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="glass hover:glass-dark rounded-2xl p-4 group" asChild>
                <a href="https://www.linkedin.com/in/shivendra-sony-8232b5247/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="glass hover:glass-dark rounded-2xl p-4 group" asChild>
                <a href="mailto:shivendrasony22@gmail.com">
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
