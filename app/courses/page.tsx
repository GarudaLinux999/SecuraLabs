import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Code, Lock, Eye, Bug, Server } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Secura Labs</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/students" className="text-sm hover:text-primary transition-colors">
              For Students
            </Link>
            <Link href="/companies" className="text-sm hover:text-primary transition-colors">
              For Companies
            </Link>
            <Link href="/courses" className="text-sm hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="/certification" className="text-sm hover:text-primary transition-colors">
              Certification
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-accent/5 to-background border-b border-border">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">Cybersecurity Courses</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Master in-demand cybersecurity skills with our comprehensive, hands-on courses.
            </p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 space-y-4">
                <Code className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Ethical Hacking</h3>
                <p className="text-muted-foreground">
                  Learn penetration testing techniques and tools used by professional ethical hackers.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 12 weeks</li>
                  <li>• Beginner to Advanced</li>
                  <li>• CEH Preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 space-y-4">
                <Lock className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Security Operations</h3>
                <p className="text-muted-foreground">
                  Master SOC operations, threat detection, and incident response procedures.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 10 weeks</li>
                  <li>• Intermediate</li>
                  <li>• Hands-on Labs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 space-y-4">
                <Eye className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Threat Intelligence</h3>
                <p className="text-muted-foreground">
                  Analyze cyber threats and learn to proactively defend against emerging attacks.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 8 weeks</li>
                  <li>• Intermediate</li>
                  <li>• Real-World Scenarios</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 space-y-4">
                <Bug className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Vulnerability Assessment</h3>
                <p className="text-muted-foreground">
                  Identify and assess security vulnerabilities in systems and applications.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 6 weeks</li>
                  <li>• Beginner to Intermediate</li>
                  <li>• Industry Tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 space-y-4">
                <Server className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Cloud Security</h3>
                <p className="text-muted-foreground">
                  Secure cloud infrastructure on AWS, Azure, and Google Cloud platforms.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 10 weeks</li>
                  <li>• Intermediate</li>
                  <li>• Multi-Cloud Focus</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 space-y-4">
                <Shield className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Network Security</h3>
                <p className="text-muted-foreground">
                  Protect networks from intrusions and implement security best practices.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 8 weeks</li>
                  <li>• Beginner to Intermediate</li>
                  <li>• Practical Projects</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Learning Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enroll in our courses and begin your cybersecurity journey with expert instructors.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Enroll Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
