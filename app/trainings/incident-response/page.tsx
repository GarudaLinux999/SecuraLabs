'use client';
import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IncidentResponse() {
  return (
    <>
    <HeaderNav />
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold text-cyan-400">
              Incident Response & Forensics
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
                    Foundations for Security Operations and Incident Handling
                  </p>

                  {/* Course Overview */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Course Overview</p>

                    <p className="text-white/80 leading-relaxed">
                      Incident Response & Cybersecurity Forensics focuses on detecting, analyzing, and responding to security incidents using security telemetry, logs, alerts, and threat intelligence. Rather than traditional digital forensics, this course emphasizes cybersecurity investigation techniques used by SOC and IR teams to understand what happened, how attackers operated, and how to prevent recurrence.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                      Participants will learn structured response processes, investigation workflows, and analysis techniques used in modern enterprise and cloud environments.
                    </p>
                  </div>

                  {/* Technical Outline */}
                  <p className="text-xl font-semibold">Technical Course Outline</p>

                  {/* SECTION 1 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 1: Introduction to Incident Response & Cybersecurity Forensics
                    </p>
                    <p className="text-white/80">
                      This section introduces incident response and explains how forensic analysis supports cybersecurity investigations.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>What qualifies as a security incident</li>
                      <li>Incident response vs cybersecurity forensics</li>
                      <li>Role of forensics in SOC and IR teams</li>
                      <li>Common incident categories</li>
                      <li>Business and operational impact</li>
                    </ul>
                  </div>

                  {/* SECTION 2 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 2: Incident Response Lifecycle
                    </p>
                    <p className="text-white/80">
                      This section covers standard incident response phases used by security teams.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Preparation and readiness</li>
                      <li>Detection and identification</li>
                      <li>Containment strategies</li>
                      <li>Eradication and recovery</li>
                      <li>Post-incident analysis</li>
                      <li>Playbooks and runbooks</li>
                    </ul>
                  </div>

                  {/* SECTION 3 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 3: Security Telemetry and Evidence Sources
                    </p>
                    <p className="text-white/80">
                      This section focuses on the security data used in investigations, rather than traditional forensic artifacts.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Logs as forensic evidence</li>
                      <li>Endpoint, network, and identity telemetry</li>
                      <li>Cloud and SaaS logs</li>
                      <li>EDR, SIEM, and XDR data</li>
                      <li>Evidence quality and retention</li>
                    </ul>
                  </div>

                  {/* SECTION 4 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 4: Host-Based Security Investigations
                    </p>
                    <p className="text-white/80">
                      This section explains how compromised systems are investigated from a security operations perspective.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Endpoint alerts and detections</li>
                      <li>Process execution analysis</li>
                      <li>Persistence and autorun indicators</li>
                      <li>File and registry activity (high-level)</li>
                      <li>Correlating endpoint behavior with alerts</li>
                    </ul>
                  </div>

                  {/* SECTION 5 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 5: Network-Based Investigations
                    </p>
                    <p className="text-white/80">
                      This section focuses on analyzing network activity during incidents.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Suspicious network patterns</li>
                      <li>Command-and-control behavior</li>
                      <li>Lateral movement indicators</li>
                      <li>DNS and proxy logs</li>
                      <li>Network containment actions</li>
                    </ul>
                  </div>

                  {/* SECTION 6 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 6: Identity-Centric Investigations
                    </p>
                    <p className="text-white/80">
                      This section highlights identity as a primary investigation focus.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Authentication and access anomalies</li>
                      <li>Credential compromise indicators</li>
                      <li>Privilege escalation detection</li>
                      <li>Cloud IAM abuse patterns</li>
                      <li>Identity-based containment actions</li>
                    </ul>
                  </div>

                  {/* SECTION 7 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 7: Malware and Ransomware Incidents
                    </p>
                    <p className="text-white/80">
                      This section focuses on responding to malware-driven incidents using security tooling.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Malware execution patterns</li>
                      <li>Ransomware kill chains</li>
                      <li>Initial access vectors</li>
                      <li>Isolation and containment</li>
                      <li>Recovery and reinfection prevention</li>
                    </ul>
                  </div>

                  {/* SECTION 8 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 8: Cloud and SaaS Incident Response
                    </p>
                    <p className="text-white/80">
                      This section covers investigation and response in cloud-first environments.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Cloud control-plane visibility</li>
                      <li>SaaS account compromise</li>
                      <li>API abuse and access misuse</li>
                      <li>Cloud workload investigations</li>
                      <li>Shared responsibility challenges</li>
                    </ul>
                  </div>

                  {/* SECTION 9 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 9: Threat Actor Behavior and ATT&CK Mapping
                    </p>
                    <p className="text-white/80">
                      This section teaches students how to understand attacker behavior during incidents.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Mapping activity to MITRE ATT&CK</li>
                      <li>Kill chain analysis</li>
                      <li>Tactics, techniques, and procedures (TTPs)</li>
                      <li>Linking alerts to attacker objectives</li>
                      <li>Using behavior to improve detection</li>
                    </ul>
                  </div>

                  {/* SECTION 10 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 10: Reporting, Communication, and Lessons Learned
                    </p>
                    <p className="text-white/80">
                      This section focuses on documenting investigations and driving improvement.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Incident timelines and summaries</li>
                      <li>Technical vs executive reporting</li>
                      <li>Root cause and contributing factors</li>
                      <li>Detection and control gaps</li>
                      <li>Continuous improvement cycles</li>
                    </ul>
                  </div>

                  {/* SECTION 11 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 11: Investigation Mindset & Career Readiness
                    </p>
                    <p className="text-white/80">
                      This final section prepares students for real-world IR roles.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Thinking like an incident responder</li>
                      <li>Hypothesis-driven investigations</li>
                      <li>Working with incomplete data</li>
                      <li>Collaboration with SOC and engineering teams</li>
                      <li>Entry-level IR and DFIR-adjacent career paths</li>
                    </ul>
                  </div>

                  {/* Who Should Attend */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Who Should Attend</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>SOC analysts (Tier 1 / Tier 2)</li>
                      <li>Junior incident responders</li>
                      <li>Security engineers and analysts</li>
                      <li>IAM, endpoint, and network security professionals</li>
                      <li>Cybersecurity students and graduates</li>
                    </ul>
                  </div>

                  {/* Prerequisites */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Prerequisites</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Basic understanding of networking and operating systems</li>
                      <li>Familiarity with logs and alerts is helpful</li>
                      <li>No traditional digital forensics background required</li>
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
