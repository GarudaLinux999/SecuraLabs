'use client';
import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";
import { motion } from "framer-motion";

export default function SocAnalyst() {
  return (
    <>
    <HeaderNav />
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
            <div className="container mx-auto max-w-7xl">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-4xl font-bold text-cyan-400">
                  SOC Analyst Program
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
                    Foundations for Security Operations Center Professionals
                  </p>

                  {/* Course Overview */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Course Overview</p>
                    <p className="text-white/80 leading-relaxed">
                      This course prepares learners to operate effectively in a Security Operations Center (SOC), providing the skills to monitor, detect, investigate, and respond to security incidents. The curriculum blends technical foundations with practical SOC workflows, alert triage, and hands-on security analysis, enabling participants to begin a career as a Tier 1 / Tier 2 SOC analyst.
                    </p>
                  </div>

                  {/* What You Will Learn */}
                  <div className="space-y-6">
                    <p className="text-xl font-semibold">What You Will Learn</p>

                    {/* SOC Fundamentals & Security Monitoring */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">SOC Fundamentals & Security Monitoring</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Understanding the SOC mission, structure, and analyst roles (Tier 1–3)</li>
                        <li>Security monitoring fundamentals and alert triage</li>
                        <li>Working with logs and events from endpoints, network, cloud, and IAM</li>
                        <li>Using SIEM, EDR/XDR, and other SOC tools for monitoring and investigation</li>
                        <li>Prioritizing alerts, handling false positives, and escalation procedures</li>
                      </ul>
                    </div>

                    {/* Networking & Infrastructure Awareness */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Networking & Infrastructure Awareness</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Network protocols, TCP/IP, and traffic flow concepts</li>
                        <li>Firewalls, VPNs, proxies, and segmentation in SOC monitoring</li>
                        <li>Enterprise infrastructure components: servers, endpoints, cloud, and hybrid environments</li>
                        <li>Recognizing abnormal network or system behavior</li>
                      </ul>
                    </div>

                    {/* Threats & Attacks */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Threats & Attacks</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Common attacker tactics, techniques, and procedures (TTPs)</li>
                        <li>Phishing, malware, ransomware, and credential attacks</li>
                        <li>Insider threats and lateral movement detection</li>
                        <li>Understanding MITRE ATT&CK framework for SOC investigations</li>
                      </ul>
                    </div>

                    {/* Incident Detection & Response */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Incident Detection & Response</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>SOC analyst role in the incident response lifecycle</li>
                        <li>Identifying and investigating host, network, and cloud incidents</li>
                        <li>Containment, escalation, and coordination with IR teams</li>
                        <li>Creating incident documentation, timelines, and reports</li>
                        <li>Post-incident lessons learned and knowledge sharing</li>
                      </ul>
                    </div>

                    {/* Threat Hunting for SOC Analysts */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Threat Hunting for SOC Analysts</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Basics of proactive threat hunting within a SOC context</li>
                        <li>Hypothesis-driven hunting using telemetry and logs</li>
                        <li>Endpoint, network, and identity anomaly detection</li>
                        <li>Converting hunting insights into actionable alerts</li>
                      </ul>
                    </div>

                    {/* Identity & Access Monitoring */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Identity & Access Monitoring</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Observing and detecting suspicious authentication and access patterns</li>
                        <li>Privilege escalation and anomalous activity detection</li>
                        <li>Cloud and SaaS IAM monitoring</li>
                        <li>IAM alerts integration into SOC workflows</li>
                      </ul>
                    </div>

                    {/* Cybersecurity Best Practices */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Cybersecurity Best Practices</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Maintaining situational awareness of current threats</li>
                        <li>Logging standards, monitoring coverage, and alert quality</li>
                        <li>Endpoint and network hygiene, patching, and basic hardening</li>
                        <li>Communication and collaboration within SOC and cross-functional teams</li>
                      </ul>
                    </div>

                    {/* Hands-On & Tools */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Hands-On & Tools</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Realistic SOC exercises and alert triage simulations</li>
                        <li>SIEM dashboards and queries for detection</li>
                        <li>EDR/XDR console navigation and investigation workflows</li>
                        <li>Basic network and endpoint analysis</li>
                      </ul>
                    </div>

                    {/* Who Should Attend */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Who Should Attend</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Fresh graduates seeking SOC roles</li>
                        <li>Early-career IT or security professionals (0–3 years)</li>
                        <li>Entry-level analysts transitioning from IT, network, or helpdesk roles</li>
                        <li>SOC aspirants aiming for Tier 1 / Tier 2 positions</li>
                      </ul>
                    </div>

                    {/* Prerequisites */}
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Prerequisites</p>
                      <ul className="list-disc pl-6 space-y-1 text-white/80">
                        <li>Basic understanding of operating systems, networking, and IT concepts</li>
                        <li>Familiarity with logs and alerts is helpful but not required</li>
                        <li>No prior SOC experience required</li>
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
