import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, GraduationCap, Briefcase } from "lucide-react"

export default function StudentsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              Build Your Cybersecurity Career
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Get job-ready with hands-on training, real-world projects, and industry certifications.
            </p>
            <Button asChild size="lg">
              <Link href="#programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Student Programs */}
      <section id="programs" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Student Programs</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-4">
                <GraduationCap className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Internship Program</h3>
                <p className="text-muted-foreground">
                  Gain hands-on experience with real cybersecurity challenges. Work on live projects and build your
                  portfolio.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 3-6 month duration</li>
                  <li>• Mentorship from industry experts</li>
                  <li>• Real-world project experience</li>
                  <li>• Job placement assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-4">
                <Briefcase className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Career Launchpad</h3>
                <p className="text-muted-foreground">
                  Fast-track your cybersecurity career with our intensive bootcamp and job placement program.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 12-week intensive training</li>
                  <li>• Industry certifications</li>
                  <li>• Career coaching & resume building</li>
                  <li>• Direct company partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Students Choose Secura Labs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Hands-On Learning</h3>
                <p className="text-muted-foreground">
                  Work on real security challenges and build practical skills that employers want.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Industry Connections</h3>
                <p className="text-muted-foreground">
                  Access our network of hiring partners and get direct pathways to top cybersecurity roles.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Expert Mentorship</h3>
                <p className="text-muted-foreground">
                  Learn from experienced cybersecurity professionals who guide your career journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have launched successful cybersecurity careers with Secura Labs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
