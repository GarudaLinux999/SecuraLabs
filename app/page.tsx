'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Terminal, Lock } from "lucide-react";
import Link from "next/link";
import { FC, ReactNode } from "react";
import HeaderNav from "./headerNav";
import FooterNav from "./footerNav";

/* ================= MAIN COMPONENT ================= */

const CyberSecurityTrainingUI: FC = () => {
  return (
    <>
      <HeaderNav />

{/* Main Content */}
      <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold leading-tight">
              Industry-Ready <span className="text-cyan-400">Cyber Security</span>
              <br />
              Training &amp; Certifications
            </h1>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Hands-on cyber security courses designed by practitioners. Learn offensive, defensive, and cloud security skills with real-world labs.
            </p>

            <div className="mt-8 flex gap-4">
              <Button size="lg" className="rounded-2xl bg-slate-900 text-white hover:bg-neutral-800">
                Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl bg-white text-slate-900 hover:bg-neutral-100">
                View Certifications
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-3xl bg-slate-800/60 p-10 shadow-2xl">
              <p className="text-sm text-slate-400">Trusted by professionals from</p>
              <p className="mt-4 text-3xl font-semibold">SOC Teams • Red Teams • CISOs</p>
            </div>
          </motion.div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-12">Popular Training Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="rounded-3xl bg-slate-900/70 hover:bg-slate-900 transition shadow-xl">
                  <CardContent className="p-8">
                    <Terminal className="h-8 w-8 text-cyan-400" />
                    <h3 className="mt-4 text-xl font-medium">{course.title}</h3>
                    <p className="mt-3 text-sm text-slate-400">{course.description}</p>
                    <Button variant="link" className="mt-4 px-0 text-cyan-400">
                      Learn more →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-12">Popular Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert) => (
              <Card key={cert.title} className="rounded-3xl bg-slate-800/60 shadow-lg">
                <CardContent className="p-8">
                  <Award className="h-10 w-10 text-amber-400" />
                  <h3 className="mt-4 text-xl font-semibold">{cert.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={<Shield className="h-6 w-6" />}
              title="Learn from Professionals, Not Trainers"
              description="Gain real-world insights from active cybersecurity experts."
            />
            <Feature
              icon={<Lock className="h-6 w-6" />}
              title="Hands-On Labs & Real Attack Simulations"
              description="Practice skills with real attack simulations and SOC exercises."
            />
            <Feature
              icon={<Terminal className="h-6 w-6" />}
              title="Cutting-Edge Security Tech"
              description="Work with advanced tools used to monitor, detect, and respond to real-world threats."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-cyan-500/10 p-16"
          >
            <h2 className="text-4xl font-bold">Start Your Cyber Security Career</h2>
            <p className="mt-4 text-slate-300">Join thousands of learners building real-world cyber defense skills.</p>
            <Button size="lg" className="mt-8 rounded-2xl bg-slate-900 text-white hover:bg-neutral-800">
              Get Started Today
            </Button>
          </motion.div>
        </section>

         <FooterNav />
       </main>
     </>
  );
};

export default CyberSecurityTrainingUI;


/* ------------------ Types & Data ------------------ */

const COURSES = [
  { title: "CyberSecurity Foundations", description: "Hands-on labs, real-world scenarios, and expert guidance." },
  { title: "SOC & Threat Management", description: "Live monitoring exercises, threat analysis, and SOC workflows." },
  { title: "OSINT & Vulnerability Mastery", description: "Practical intelligence gathering, vulnerability scans, and risk assessment." },
  { title: "IncidentResponse & Forensics", description: "Simulated breaches, forensic investigations, and incident response drills." },
  { title: "Security Automation & DevSecOps", description: "Automation projects, secure coding labs, and DevSecOps practices." },
  { title: "Advance Security & Compliance Roadmap", description: "Cloud security challenges, compliance frameworks, and attack simulations." },
];

const CERTIFICATIONS = [
  { title: "SOC & Threat Intelligence Specialist", description: "Specializes in monitoring threats, analyzing attacks, and defending in real-world SOC environments." },
  { title: "Incident Response & Forensics Expert", description: "Expert in investigating breaches, responding effectively, and securing critical systems." },
  { title: "Advanced Security & Compliance Professional", description: "Master in cloud security, compliance, and advanced threat strategies." },
];

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description?: string;
}

const Feature: FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <Card className="rounded-3xl bg-slate-900/70 shadow-lg">
      <CardContent className="p-8 text-center">
        <div className="mx-auto w-fit text-cyan-400">{icon}</div>
        <h3 className="mt-4 text-xl font-medium">{title}</h3>
        <p className="mt-2 text-sm text-slate-400">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};