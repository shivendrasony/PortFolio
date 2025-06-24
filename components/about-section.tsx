import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me 😊</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, passion, and goals as a developer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. My journey in
              software development began with curiosity about how things work behind the scenes, and it has evolved into
              a deep passion for creating meaningful digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building scalable web applications using cutting-edge technologies like React, Next.js,
              Node.js, and various databases. I believe in writing clean, maintainable code and following best practices
              to deliver high-quality solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to contribute to innovative projects that make a positive impact while continuously learning
              and growing as a developer. I'm always excited to take on new challenges and collaborate with like-minded
              professionals.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Code className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Clean Code Advocate</h3>
                    <p className="text-muted-foreground">
                      I believe in writing maintainable, scalable, and well-documented code that stands the test of
                      time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Problem Solver</h3>
                    <p className="text-muted-foreground">
                      I enjoy tackling complex challenges and finding innovative solutions through creative thinking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Continuous Learner</h3>
                    <p className="text-muted-foreground">
                      Technology evolves rapidly, and I'm committed to staying updated with the latest trends and best
                      practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
