import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, TrendingUp } from "lucide-react"

export default function CompaniesPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">Build Your Security Team</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Access job-ready cybersecurity talent and upskill your existing team with our enterprise training
              solutions.
            </p>
            <Button asChild size="lg">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Enterprise Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-4">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Talent Acquisition</h3>
                <p className="text-muted-foreground">
                  Hire pre-vetted, job-ready cybersecurity professionals from our talent pool.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Vetted candidates with real-world experience</li>
                  <li>• Diverse skill sets across security domains</li>
                  <li>• Fast hiring process</li>
                  <li>• 90-day performance guarantee</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-4">
                <TrendingUp className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Team Training</h3>
                <p className="text-muted-foreground">
                  Upskill your existing security team with customized training programs.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom curriculum design</li>
                  <li>• Hands-on labs & simulations</li>
                  <li>• Industry certifications</li>
                  <li>• Ongoing support & mentorship</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Companies Choose Secura Labs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Quality Talent</h3>
                <p className="text-muted-foreground">
                  Our graduates are trained on the latest tools and techniques used by industry leaders.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Faster Hiring</h3>
                <p className="text-muted-foreground">
                  Skip months of recruiting with access to our pre-vetted talent pool.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Flexible Solutions</h3>
                <p className="text-muted-foreground">
                  From contract roles to permanent hires, we adapt to your staffing needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Security Team?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with Secura Labs to access top cybersecurity talent and training solutions.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
