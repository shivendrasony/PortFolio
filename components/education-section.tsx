import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "XYZ University",
      duration: "2020 - 2024",
      gpa: "3.8/4.0",
      description:
        "Specialized in software engineering and web development. Completed coursework in data structures, algorithms, database systems, and software architecture.",
      achievements: ["Dean's List (3 semesters)", "Best Final Year Project Award", "Programming Contest Winner"],
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "ABC Senior Secondary School",
      duration: "2018 - 2020",
      gpa: "95%",
      description:
        "Focused on Mathematics, Physics, and Computer Science. Developed strong analytical and problem-solving skills.",
      achievements: ["School Topper in Computer Science", "Mathematics Olympiad Qualifier"],
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "March 2023",
      credentialId: "AWS-CDA-2023-001",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "January 2023",
      credentialId: "META-REACT-2023-001",
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "November 2022",
      credentialId: "FCC-FSWD-2022-001",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "September 2022",
      credentialId: "FCC-JSADS-2022-001",
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{edu.degree}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <p className="text-primary font-semibold">{edu.institution}</p>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="font-semibold">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {cert.date}
                      </div>
                    </div>
                    <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                    <p className="text-muted-foreground text-sm">Credential ID: {cert.credentialId}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
