// ...existing code...
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, CheckCircle2 } from "lucide-react"
import HeaderNav from "../headerNav"
import FooterNav from "../footerNav"

export default function CertificationPage() {
  return (
    <>
    <HeaderNav />
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      {/* ...existing code... */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-accent/5 to-slate-950 border-b border-neutral-800">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Award className="h-16 w-16 text-cyan-400 mx-auto" />
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">Industry Certifications</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Earn recognized cybersecurity certifications that validate your expertise and boost your career.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Available Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/60 via-accent/5 to-slate-950 border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-10 w-10 text-cyan-400" />
                  <h3 className="text-2xl font-bold">CEH - Certified Ethical Hacker</h3>
                </div>
                <p className="text-muted-foreground">
                  Become a certified ethical hacker and master penetration testing methodologies.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Comprehensive exam preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Hands-on labs and practice tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Industry-recognized credential</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/60 via-accent/5 to-slate-950 border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-10 w-10 text-cyan-400" />
                  <h3 className="text-2xl font-bold">CompTIA Security+</h3>
                </div>
                <p className="text-muted-foreground">
                  Establish the core knowledge required for any cybersecurity role.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Entry-level certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Covers essential security concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Gateway to advanced certifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/60 via-accent/5 to-slate-950 border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-10 w-10 text-cyan-400" />
                  <h3 className="text-2xl font-bold">CISSP</h3>
                </div>
                <p className="text-muted-foreground">
                  Advanced certification for experienced security practitioners and managers.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Expert-level credential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Comprehensive security knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Globally recognized</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/60 via-accent/5 to-slate-950 border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-10 w-10 text-cyan-400" />
                  <h3 className="text-2xl font-bold">OSCP</h3>
                </div>
                <p className="text-muted-foreground">
                  Offensive Security Certified Professional - hands-on penetration testing certification.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Practical exam format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Real-world hacking scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Highly respected in industry</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="why-certify" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Get Certified?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/60 via-accent/5 to-slate-950 border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Career Advancement</h3>
                <p className="text-muted-foreground">
                  Certifications open doors to higher-paying roles and leadership positions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-800/60 via-accent/5 to-slate-950 border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Skill Validation</h3>
                <p className="text-muted-foreground">
                  Prove your expertise to employers with industry-recognized credentials.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-slate-800/60 via-accent/5 to-slate-950 border-border">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Competitive Edge</h3>
                <p className="text-muted-foreground">
                  Stand out in the job market with verified cybersecurity qualifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-neutral-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Certification Journey</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get prepared for industry certifications with our expert-led training programs.
          </p>
          <Button asChild size="lg" className = "mt-8 rounded-2xl bg-cyan-400 text-white hover:bg-neutral-800">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
      <footer className="bg-slate-900/80 border-t border-white/10">
        <div className="px-0 py-8">
          <FooterNav />
        </div>
      </footer>
    </>
  )
}
// ...existing code...