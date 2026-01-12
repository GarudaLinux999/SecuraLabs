'use client';
import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ThreatHunting() {
  return (
    <>
    <HeaderNav />
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold text-cyan-400">
              Threat Hunting
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
                    Foundations for Proactive Cyber Defense
                  </p>

                  {/* Course Overview */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Course Overview</p>

                    <p className="text-white/80 leading-relaxed">
                      Threat Hunting focuses on proactively searching for hidden or undetected threats within an organization’s environment using security telemetry, behavioral analysis, and threat intelligence. Unlike alert-driven SOC work, threat hunting is hypothesis-driven and analytical, enabling defenders to uncover advanced attacks, misconfigurations, and attacker persistence that evade traditional detection.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                      This course builds the foundational skills required to think like a hunter and apply structured hunting techniques across endpoint, network, identity, and cloud environments.
                    </p>
                  </div>

                  {/* Technical Outline */}
                  <p className="text-xl font-semibold">Technical Course Outline</p>

                  {/* SECTION 1 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 1: Introduction to Threat Hunting
                    </p>
                    <p className="text-white/80">
                      This section introduces threat hunting and explains how it differs from reactive security monitoring.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>What threat hunting is (and is not)</li>
                      <li>Reactive detection vs proactive hunting</li>
                      <li>Role of threat hunting in SOC maturity</li>
                      <li>When and why organizations hunt</li>
                      <li>Threat hunting use cases</li>
                    </ul>
                  </div>

                  {/* SECTION 2 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 2: Threat Hunting Methodology
                    </p>
                    <p className="text-white/80">
                      This section covers structured approaches used by professional hunters.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Hypothesis-driven hunting</li>
                      <li>Intelligence-driven vs anomaly-driven hunts</li>
                      <li>Baseline understanding and normal behavior</li>
                      <li>Hunt planning and scoping</li>
                      <li>Measuring hunt effectiveness</li>
                    </ul>
                  </div>

                  {/* SECTION 3 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 3: Data Sources for Threat Hunting
                    </p>
                    <p className="text-white/80">
                      This section focuses on the security telemetry used during hunts.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Endpoint telemetry (EDR/XDR)</li>
                      <li>Network data (DNS, proxy, flow logs)</li>
                      <li>Identity and authentication logs</li>
                      <li>Cloud and SaaS audit logs</li>
                      <li>Data quality, coverage, and limitations</li>
                    </ul>
                  </div>

                  {/* SECTION 4 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 4: Attacker Behavior and Kill Chains
                    </p>
                    <p className="text-white/80">
                      This section teaches how to recognize attacker behavior patterns.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Cyber kill chain overview</li>
                      <li>MITRE ATT&CK framework</li>
                      <li>Tactics, techniques, and procedures (TTPs)</li>
                      <li>Living-off-the-land techniques</li>
                      <li>Mapping behaviors to objectives</li>
                    </ul>
                  </div>

                  {/* SECTION 5 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 5: Endpoint-Focused Threat Hunting
                    </p>
                    <p className="text-white/80">
                      This section covers hunting techniques on endpoints.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Suspicious process behavior</li>
                      <li>Abnormal parent-child relationships</li>
                      <li>Persistence mechanisms</li>
                      <li>Script and command-line abuse</li>
                      <li>Identifying stealthy malware activity</li>
                    </ul>
                  </div>

                  {/* SECTION 6 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 6: Network-Focused Threat Hunting
                    </p>
                    <p className="text-white/80">
                      This section focuses on uncovering threats through network behavior.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Command-and-control patterns</li>
                      <li>DNS tunneling indicators</li>
                      <li>Beaconing detection</li>
                      <li>Lateral movement signals</li>
                      <li>Exfiltration indicators</li>
                    </ul>
                  </div>

                  {/* SECTION 7 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 7: Identity and Access Threat Hunting
                    </p>
                    <p className="text-white/80">
                      This section highlights identity as a primary hunting surface.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Abnormal authentication patterns</li>
                      <li>Privilege escalation indicators</li>
                      <li>Cloud IAM abuse</li>
                      <li>Service account misuse</li>
                      <li>Identity-based persistence techniques</li>
                    </ul>
                  </div>

                  {/* SECTION 8 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 8: Cloud and SaaS Threat Hunting
                    </p>
                    <p className="text-white/80">
                      This section introduces hunting in modern cloud environments.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Control-plane vs data-plane activity</li>
                      <li>Cloud workload anomalies</li>
                      <li>API abuse and misuse</li>
                      <li>SaaS account compromise</li>
                      <li>Shared responsibility considerations</li>
                    </ul>
                  </div>

                  {/* SECTION 9 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 9: Threat Intelligence in Hunting
                    </p>
                    <p className="text-white/80">
                      This section explains how intelligence enhances hunts.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Strategic vs tactical intelligence</li>
                      <li>Using IOCs responsibly</li>
                      <li>Intelligence-led hypotheses</li>
                      <li>Mapping intelligence to ATT&CK</li>
                      <li>Limitations of threat intelligence</li>
                    </ul>
                  </div>

                  {/* SECTION 10 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 10: From Hunt to Detection
                    </p>
                    <p className="text-white/80">
                      This section focuses on operationalizing hunt results.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Validating findings</li>
                      <li>Creating detection rules</li>
                      <li>Reducing false positives</li>
                      <li>Hand-off to SOC and IR teams</li>
                      <li>Continuous improvement of detections</li>
                    </ul>
                  </div>

                  {/* SECTION 11 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 11: Threat Hunting Mindset & Career Development
                    </p>
                    <p className="text-white/80">
                      This final section prepares students for real-world hunting roles.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Thinking like an attacker</li>
                      <li>Analytical and investigative discipline</li>
                      <li>Documentation and reporting</li>
                      <li>Threat hunter vs detection engineer roles</li>
                      <li>Building a threat hunting skill path</li>
                    </ul>
                  </div>

                  {/* Who Should Attend */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Who Should Attend</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>SOC analysts (Tier 1 / Tier 2)</li>
                      <li>Junior security engineers</li>
                      <li>Incident responders transitioning into hunting</li>
                      <li>Blue team and detection engineers (early career)</li>
                      <li>Cybersecurity students and graduates</li>
                    </ul>
                  </div>

                  {/* Prerequisites */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Prerequisites</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Understanding of SOC operations and security logs</li>
                      <li>Familiarity with networking and operating systems</li>
                      <li>Prior exposure to SIEM or EDR tools is helpful</li>
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
