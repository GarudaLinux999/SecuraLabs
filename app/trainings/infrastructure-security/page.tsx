'use client';
import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InfrastructureSecurityFoundations() {
  return (
    <>
      <HeaderNav />
      <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold text-cyan-400">
              Infrastructure Security
            </h1>
            <Link href="/connectwithus">
            <button
              type="button"
              className="ml-4 inline-flex items-center px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium shadow-sm"
            >
              Enroll Now
            </button>
            </Link>
          </div>


          <section className="mx-auto max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1800px] px-6 py-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="rounded-3xl p-10 shadow-xl backdrop-blur-lg backdrop-saturate-150 bg-white/5 border border-white/10 ring-1 ring-white/5"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                  WebkitBackdropFilter: "blur(10px) saturate(140%)",
                  backdropFilter: "blur(10px) saturate(140%)"
                }}
              >
                <div className="space-y-8 text-white">
                  {/* Title */}
                  <p className="text-3xl font-bold">
                    Foundations for Early-Career Security & IT Professionals
                  </p>

                  {/* Course Overview */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Course Overview</p>
                    <p className="text-white/80 leading-relaxed">
                      Infrastructure Security focuses on protecting the core technology environments that support modern organizations, including networks, servers, endpoints, cloud platforms, and identity systems. This course builds a strong technical foundation for early-career professionals by explaining how infrastructure works, how it is attacked, and how security controls are applied in real-world environments.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      Participants will learn practical security concepts, common tools, and defensive approaches used by infrastructure, cloud, and security teams.
                    </p>
                  </div>

                  {/* Technical Outline */}
                  <p className="text-xl font-semibold">Technical Course Outline</p>

                  {/* SECTION TEMPLATE */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 1: Introduction to Infrastructure Security</p>
                    <p className="text-white/80">
                      This section establishes the importance of infrastructure security and introduces common infrastructure components found in enterprise environments.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-white/80">
                      <li>What infrastructure security covers</li>
                      <li>Typical enterprise infrastructure layout</li>
                      <li>On-premises vs cloud vs hybrid environments</li>
                      <li>Shared responsibility model</li>
                      <li>Common security failures and lessons learned</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 2: Networking Fundamentals for Security</p>
                    <p className="text-white/80">
                      This section covers essential networking concepts required to understand infrastructure attacks and defenses.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-white/80">
                      <li>TCP/IP, ports, and protocols</li>
                      <li>Network devices: routers, switches, firewalls</li>
                      <li>Network segmentation and VLANs</li>
                      <li>Perimeter vs internal networks</li>
                      <li>Basic traffic inspection and logging concepts</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 3: Operating Systems & Server Security</p>
                    <ul className="list-disc pl-6 space-y-2 text-white/80">
                      <li>Linux and Windows server basics</li>
                      <li>User accounts and permissions</li>
                      <li>Service hardening and secure configurations</li>
                      <li>Patch management fundamentals</li>
                      <li>Common server misconfigurations</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 4: Identity & Access Management (IAM)</p>
                    <ul className="list-disc pl-6 space-y-2 text-white/80">
                      <li>Authentication vs authorization</li>
                      <li>Privileged access management</li>
                      <li>Active Directory and cloud IAM basics</li>
                      <li>Role-based access control (RBAC)</li>
                      <li>Common identity-related attacks</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 5: Cloud Infrastructure Security Basics</p>
                    <ul className="list-disc pl-6 space-y-2 text-white/80">
                      <li>IaaS, PaaS, SaaS security responsibilities</li>
                      <li>Securing virtual machines and storage</li>
                      <li>Network security groups and security policies</li>
                      <li>IAM in cloud environments</li>
                      <li>Common cloud security misconfigurations</li>
                    </ul>
                  </div>

                  {/* Who Should Attend */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Who Should Attend</p>
                    <ul className="list-disc pl-6 space-y-2 text-white/80">
                      <li>Fresh graduates entering cybersecurity or IT</li>
                      <li>Professionals with 1–3 years of IT, networking, or cloud experience</li>
                      <li>Entry-level security analysts and engineers</li>
                      <li>System administrators moving into security</li>
                      <li>Cloud and infrastructure support engineers</li>
                    </ul>
                  </div>

                  {/* Prerequisites */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Prerequisites</p>
                    <ul className="list-disc pl-6 space-y-2 text-white/80">
                      <li>Basic understanding of computers and networking</li>
                      <li>Familiarity with operating systems is helpful but not required</li>
                      <li>No prior security experience required</li>
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <footer className="bg-slate-900/80 border-t border-white/10">
        <div className="px-0 py-8">
          <FooterNav />
        </div>
      </footer>
    </>
  );
}
