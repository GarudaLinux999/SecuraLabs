'use client';
import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SocFundamentals() {
  return (
    <>
    <HeaderNav />
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold text-cyan-400">
              SOC Fundamentals
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
                <div className="space-y-10 text-white">

                  {/* Main Title */}
                  <p className="text-3xl font-bold">
                    Foundations for Aspiring Security Operations Center Analysts
                  </p>

                  {/* Course Overview */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Course Overview</p>

                    <p className="text-white/80 leading-relaxed">
                      SOC Fundamentals introduces how Security Operations Centers (SOCs) detect, analyze, and respond to cybersecurity threats in real time. This course provides a practical understanding of SOC workflows, tools, and analyst responsibilities, helping participants build the skills required to monitor alerts, investigate incidents, and support organizational security operations.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                      The focus is on hands-on security thinking, threat detection fundamentals, and incident response processes used in modern SOC environments.
                    </p>
                  </div>

                  {/* Technical Outline */}
                  <p className="text-xl font-semibold">Technical Course Outline</p>

                  {/* SECTION 1 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 1: Introduction to SOC Operations
                    </p>
                    <p className="text-white/80">
                      This section explains the role of the SOC within an organization and how it fits into the overall cybersecurity strategy.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>What a SOC does</li>
                      <li>SOC goals and responsibilities</li>
                      <li>24×7 monitoring and escalation models</li>
                      <li>SOC vs NOC vs IR teams</li>
                      <li>Common SOC service models (in-house, MSSP)</li>
                    </ul>
                  </div>

                  {/* SECTION 2 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 2: SOC Analyst Roles and Responsibilities
                    </p>
                    <p className="text-white/80">
                      This section introduces SOC team structures and analyst expectations.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Tier 1, Tier 2, and Tier 3 roles</li>
                      <li>Daily activities of a SOC analyst</li>
                      <li>Alert monitoring and triage</li>
                      <li>Escalation and handoff processes</li>
                      <li>Analyst ethics and confidentiality</li>
                    </ul>
                  </div>

                  {/* SECTION 3 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 3: Security Monitoring Fundamentals
                    </p>
                    <p className="text-white/80">
                      This section covers how security events are collected and monitored.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Logs, events, and alerts</li>
                      <li>Log sources (endpoints, firewalls, servers, IAM)</li>
                      <li>Centralized logging concepts</li>
                      <li>SIEM fundamentals</li>
                      <li>Noise vs actionable alerts</li>
                    </ul>
                  </div>

                  {/* SECTION 4 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 4: Threat Detection Concepts
                    </p>
                    <p className="text-white/80">
                      This section explains how threats are identified within large volumes of data.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Signatures vs behavior-based detection</li>
                      <li>Indicators of Compromise (IOCs)</li>
                      <li>Indicators of Attack (IOAs)</li>
                      <li>Detection rules and logic</li>
                      <li>False positives and false negatives</li>
                    </ul>
                  </div>

                  {/* SECTION 5 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 5: Common Attack Techniques
                    </p>
                    <p className="text-white/80">
                      This section introduces attack patterns SOC analysts commonly investigate.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Phishing and credential attacks</li>
                      <li>Malware and ransomware basics</li>
                      <li>Brute-force and lateral movement</li>
                      <li>Command-and-control traffic</li>
                      <li>Insider and misuse scenarios</li>
                    </ul>
                  </div>

                  {/* SECTION 6 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 6: Incident Triage and Analysis
                    </p>
                    <p className="text-white/80">
                      This section focuses on analyzing alerts and determining their impact.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Alert prioritization</li>
                      <li>Context gathering and enrichment</li>
                      <li>Log analysis basics</li>
                      <li>Timeline creation</li>
                      <li>Decision-making under pressure</li>
                    </ul>
                  </div>

                  {/* SECTION 7 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 7: Incident Response Fundamentals
                    </p>
                    <p className="text-white/80">
                      This section introduces how SOC teams respond to confirmed security incidents.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Incident response lifecycle</li>
                      <li>Containment strategies</li>
                      <li>Coordination with IR and IT teams</li>
                      <li>Evidence handling basics</li>
                      <li>Lessons learned and reporting</li>
                    </ul>
                  </div>

                  {/* SECTION 8 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 8: SOC Tools Overview
                    </p>
                    <p className="text-white/80">
                      This section provides a practical overview of tools commonly used in SOCs.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>SIEM platforms (conceptual)</li>
                      <li>EDR/XDR tools</li>
                      <li>SOAR fundamentals</li>
                      <li>Threat intelligence platforms</li>
                      <li>Ticketing and case management systems</li>
                    </ul>
                  </div>

                  {/* SECTION 9 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 9: Threat Intelligence for SOC Analysts
                    </p>
                    <p className="text-white/80">
                      This section explains how threat intelligence supports SOC operations.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Types of threat intelligence</li>
                      <li>Using IOCs and feeds</li>
                      <li>Mapping threats to MITRE ATT&CK</li>
                      <li>Intelligence enrichment</li>
                      <li>Limitations of threat intel</li>
                    </ul>
                  </div>

                  {/* SECTION 10 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 10: Documentation, Reporting, and Metrics
                    </p>
                    <p className="text-white/80">
                      This section focuses on communication and accountability within SOC operations.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Incident documentation</li>
                      <li>Writing clear investigation notes</li>
                      <li>SOC metrics and KPIs</li>
                      <li>Reporting to leadership</li>
                      <li>Shift handovers and continuity</li>
                    </ul>
                  </div>

                  {/* SECTION 11 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 11: SOC Career Skills and Readiness
                    </p>
                    <p className="text-white/80">
                      This final section prepares students for entry-level SOC roles.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Thinking like a SOC analyst</li>
                      <li>Handling alert fatigue</li>
                      <li>Building investigation discipline</li>
                      <li>Entry-level SOC interview expectations</li>
                      <li>Continuous learning paths</li>
                    </ul>
                  </div>

                  {/* Who Should Attend */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Who Should Attend</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Fresh graduates entering cybersecurity</li>
                      <li>Professionals with 0–3 years of IT or security experience</li>
                      <li>Aspiring SOC analysts (Tier 1 / Tier 2)</li>
                      <li>IT support staff transitioning into security</li>
                      <li>Network and system administrators moving into SOC roles</li>
                    </ul>
                  </div>

                  {/* Prerequisites */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Prerequisites</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Basic understanding of networking and operating systems</li>
                      <li>Familiarity with security concepts is helpful but not required</li>
                      <li>No prior SOC experience required</li>
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
