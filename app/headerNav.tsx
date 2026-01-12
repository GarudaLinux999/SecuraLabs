"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function HeaderNav() {
  return (
    <>
{/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
              SL
            </div>
            <Link href="/" className="text-xl font-semibold">Secura Labs</Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">

            {/* Trainings */}
            <div className="relative group">
              <button
                type="button"
                className="hover:text-cyan-400 transition cursor-default"
                aria-haspopup="true"
              >
                Trainings
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-slate-800 rounded shadow-lg w-max
                before:content-[''] before:absolute before:-top-2 before:left-0 before:h-2 before:w-full">
                <Link href="/trainings/infrastructure-security" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Infrastructure Security</Link>
                <Link href="/trainings/network-security" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Network Security</Link>
                <Link href="/trainings/iam-security" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">IAM Security</Link>
                <Link href="/trainings/soc-fundamentals" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">SOC Fundamentals</Link>
                <Link href="/trainings/incident-response" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Incident Response & Forensics</Link>
                <Link href="/trainings/threat-hunting" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Threat Hunting</Link>
                <Link href="/trainings/vulnerability-management" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Vulnerability Management</Link>
                <Link href="/trainings/application-security" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Application Security</Link>
                <Link href="/trainings/cloud-security" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Cloud Security</Link>
                <Link href="/trainings/grc-fundamentals" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">GRC Fundamentals</Link>
              </div>
            </div>

            {/* Courses */}
            <div className="relative group">
              <button
                type="button"
                className="hover:text-cyan-400 transition cursor-default"
                aria-haspopup="true"
              >
                Courses
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-slate-800 rounded shadow-lg w-max
                before:content-[''] before:absolute before:-top-2 before:left-0 before:h-2 before:w-full">
                <Link href="/courses/cybersecurity-foundations" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Cybersecurity Foundations</Link>
                <Link href="/courses/soc-analyst" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">SOC Analyst Program</Link>
              </div>
            </div>

            {/* Certifications */}
            <div className="relative group">
              <button
                type="button"
                className="hover:text-cyan-400 transition cursor-default"
                aria-haspopup="true"
              >
                Certifications
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-slate-800 rounded shadow-lg w-max
                before:content-[''] before:absolute before:-top-2 before:left-0 before:h-2 before:w-full">
                <Link href="/certification" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Find Your Certification</Link>
                <Link href="/certification#why-certify" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Why Certify?</Link>
                <Link href="/connectwithus" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Get Started</Link>
                <Link href="/certification" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">SecuraLab Portfolio Certifications</Link>
              </div>
            </div>

            {/* Resources */}
            <div className="relative group">
              <button
                type="button"
                className="hover:text-cyan-400 transition cursor-default"
                aria-haspopup="true"
              >
                Resources
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-slate-800 rounded shadow-lg w-max
                before:content-[''] before:absolute before:-top-2 before:left-0 before:h-2 before:w-full">
                <Link href="/resources/blogs" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Blogs</Link>
                <Link href="/resources/tools" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Security Tools</Link>
                <Link href="/resources/community" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Community</Link>
              </div>
            </div>

            {/* Company */}
            <div className="relative group">
              <button
                type="button"
                className="hover:text-cyan-400 transition cursor-default"
                aria-haspopup="true"
              >
                Company
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-slate-800 rounded shadow-lg w-max
                before:content-[''] before:absolute before:-top-2 before:left-0 before:h-2 before:w-full">
                <Link href="/company/about" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">About Us</Link>
                <Link href="/company/careers" className="block px-4 py-2 hover:bg-slate-700 whitespace-nowrap">Careers</Link>
              </div>
            </div>
          </nav>

          {/* CTA */}
          <Link href="/courses">
            <Button size="sm" className="rounded-xl bg-black text-white hover:bg-neutral-800">
              Explore Courses
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
}
