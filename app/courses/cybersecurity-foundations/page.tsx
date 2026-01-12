'use client';
import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";
import { motion } from "framer-motion";

export default function CybersecurityFoundationsPage() {
  return (
    <>
    <HeaderNav />
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
            <div className="container mx-auto max-w-7xl">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-4xl font-bold text-cyan-400">
                  CyberSecurity Foundations
                </h1>
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
                <div className="space-y-10 text-white">

                  {/* Main Title */}
                  <p className="text-3xl font-bold">
                    Comprehensive Introductory Course for Early-Career Security Professionals
                  </p>

                  {/* Course Overview */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Course Overview</p>
                    <p className="text-white/80 leading-relaxed">
                      Cybersecurity Foundations equips learners with a strong base across essential areas of cybersecurity. This course covers the key concepts, practices, and skills needed to understand, detect, and respond to modern cyber threats, preparing participants for further specialization in SOC operations, incident response, IAM, threat hunting, and infrastructure security.
                    </p>
                  </div>

                  {/* What You Will Learn */}
                  <div className="space-y-6">
                    <p className="text-xl font-semibold">What You Will Learn</p>

                    {/* Security Fundamentals */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Security Fundamentals</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Core cybersecurity concepts: confidentiality, integrity, availability (CIA triad)</li>
                        <li>Risk, threats, vulnerabilities, and controls</li>
                        <li>Security policies, governance, and best practices</li>
                        <li>Cybersecurity roles and career paths</li>
                      </ul>
                    </div>

                    {/* Networking & Infrastructure Security */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Networking & Infrastructure Security</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Enterprise network fundamentals (TCP/IP, OSI model, routing, protocols)</li>
                        <li>Network devices, firewalls, VPNs, and segmentation</li>
                        <li>Servers, endpoints, and hybrid/cloud infrastructure security basics</li>
                        <li>Defense-in-depth, asset management, and monitoring principles</li>
                      </ul>
                    </div>

                    {/* Identity & Access Management (IAM) */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Identity & Access Management (IAM)</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Authentication, authorization, and identity lifecycle</li>
                        <li>Role-based and attribute-based access control</li>
                        <li>Privileged access management and least privilege principles</li>
                        <li>IAM in cloud and SaaS environments, detecting anomalous access</li>
                      </ul>
                    </div>

                    {/* Threats & Attack Techniques */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Threats & Attack Techniques</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Phishing, social engineering, malware, and ransomware</li>
                        <li>Credential theft, brute-force attacks, and privilege escalation</li>
                        <li>Lateral movement and insider threats</li>
                        <li>Common attacker techniques and TTPs</li>
                      </ul>
                    </div>

                    {/* Security Monitoring & SOC Fundamentals */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Security Monitoring & SOC Fundamentals</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Logs, events, and alerts across endpoints, network, cloud, and identity</li>
                        <li>SIEM, EDR, XDR, and basic SOC workflows</li>
                        <li>Alert triage, prioritization, and escalation</li>
                        <li>SOC roles and responsibilities</li>
                      </ul>
                    </div>

                    {/* Incident Response & Cybersecurity Forensics */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Incident Response & Cybersecurity Forensics</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Incident response lifecycle: preparation, detection, containment, recovery</li>
                        <li>Host, network, and cloud investigation techniques</li>
                        <li>Threat actor behavior and MITRE ATT&CK mapping</li>
                        <li>Reporting, documentation, and post-incident lessons learned</li>
                      </ul>
                    </div>

                    {/* Threat Hunting */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Threat Hunting</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Proactive identification of hidden threats</li>
                        <li>Hypothesis-driven and intelligence-driven hunting</li>
                        <li>Endpoint, network, and identity telemetry analysis</li>
                        <li>Converting hunting insights into actionable detections</li>
                      </ul>
                    </div>

                    {/* Cloud & Modern Security Considerations */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Cloud & Modern Security Considerations</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Cloud service models and shared responsibility</li>
                        <li>Cloud IAM, workload, and SaaS security</li>
                        <li>Cloud-specific threats and misconfigurations</li>
                        <li>Security monitoring in cloud environments</li>
                      </ul>
                    </div>

                    {/* Cybersecurity Best Practices */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Cybersecurity Best Practices</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Secure configurations, patching, and hardening</li>
                        <li>Backup, recovery, and resiliency principles</li>
                        <li>Security awareness and social engineering prevention</li>
                        <li>Career guidance, certification paths, and hands-on learning readiness</li>
                      </ul>
                    </div>

                    {/* Who Should Attend */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Who Should Attend</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Fresh graduates entering IT or cybersecurity</li>
                        <li>Professionals with 0–3 years of IT, networking, or security experience</li>
                        <li>Aspiring SOC analysts, incident responders, or security engineers</li>
                        <li>Anyone seeking a structured introduction to cybersecurity</li>
                      </ul>
                    </div>

                    {/* Prerequisites */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Prerequisites</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Basic understanding of computers and networking</li>
                        <li>Familiarity with operating systems is helpful but not required</li>
                        <li>No prior cybersecurity experience required</li>
                      </ul>
                    </div>

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
