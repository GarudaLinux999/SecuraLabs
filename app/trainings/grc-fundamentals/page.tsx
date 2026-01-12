'use client';
import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GrcFundamentals() {
  return (
    <>
    <HeaderNav />
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold text-cyan-400">
              GRC Fundamentals
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
                    Foundations for Building a Risk-Aware Security Program
                  </p>

                  {/* Course Overview */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Course Overview</p>

                    <p className="text-white/80 leading-relaxed">
                      GRC Fundamentals introduces the principles of governance, risk management, and compliance as they relate to cybersecurity and enterprise operations. This course helps early-career professionals understand how policies, standards, frameworks, and regulations drive secure and accountable business operations.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                      Participants will learn to identify, assess, and manage risk, implement controls, and support compliance requirements while aligning security initiatives with business objectives.
                    </p>
                  </div>

                  {/* Technical Course Outline */}
                  <p className="text-xl font-semibold">Technical Course Outline</p>

                  {/* SECTION 1 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 1: Introduction to GRC</p>
                    <p className="text-white/80">This section introduces the foundational concepts of GRC and its importance in cybersecurity.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>What GRC is and why it matters</li>
                      <li>Relationship between governance, risk, and compliance</li>
                      <li>Role of GRC in enterprise security programs</li>
                      <li>GRC stakeholders and responsibilities</li>
                      <li>Benefits of structured GRC programs</li>
                    </ul>
                  </div>

                  {/* SECTION 2 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 2: Governance in Cybersecurity</p>
                    <p className="text-white/80">This section focuses on decision-making, accountability, and oversight.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Security policies, standards, and procedures</li>
                      <li>Organizational structures for governance</li>
                      <li>Roles and responsibilities in security governance</li>
                      <li>Alignment of security goals with business objectives</li>
                      <li>Policy enforcement and communication</li>
                    </ul>
                  </div>

                  {/* SECTION 3 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 3: Risk Management Fundamentals</p>
                    <p className="text-white/80">This section introduces risk as a key driver of security decision-making.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Understanding risk: likelihood, impact, and exposure</li>
                      <li>Risk assessment methodologies</li>
                      <li>Threat and vulnerability identification</li>
                      <li>Risk prioritization and mitigation strategies</li>
                      <li>Risk registers and documentation</li>
                    </ul>
                  </div>

                  {/* SECTION 4 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 4: Compliance Basics</p>
                    <p className="text-white/80">This section explains regulatory and contractual obligations in cybersecurity.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Major cybersecurity regulations (ISO 27001, NIST CSF, GDPR, HIPAA)</li>
                      <li>Internal policies vs external compliance requirements</li>
                      <li>Audits and self-assessments</li>
                      <li>Reporting and documentation for compliance</li>
                      <li>Consequences of non-compliance</li>
                    </ul>
                  </div>

                  {/* SECTION 5 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 5: Controls and Control Frameworks</p>
                    <p className="text-white/80">This section focuses on implementing controls to manage risk and support compliance.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Control types: technical, administrative, and physical</li>
                      <li>Mapping controls to frameworks (CIS, NIST, ISO)</li>
                      <li>Control effectiveness measurement</li>
                      <li>Continuous improvement of controls</li>
                      <li>Control testing and validation concepts</li>
                    </ul>
                  </div>

                  {/* SECTION 6 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 6: Governance Tools and Platforms</p>
                    <p className="text-white/80">This section introduces tools used to manage GRC activities.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>GRC software platforms (conceptual overview)</li>
                      <li>Risk and compliance dashboards</li>
                      <li>Policy management tools</li>
                      <li>Audit tracking and reporting</li>
                      <li>Integration with security operations</li>
                    </ul>
                  </div>

                  {/* SECTION 7 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 7: Risk Assessment and Mitigation Exercises</p>
                    <p className="text-white/80">This section emphasizes practical application of risk concepts.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Identifying assets and critical systems</li>
                      <li>Evaluating threats and vulnerabilities</li>
                      <li>Prioritizing risks for mitigation</li>
                      <li>Documenting and communicating risk</li>
                      <li>Risk mitigation plan examples</li>
                    </ul>
                  </div>

                  {/* SECTION 8 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 8: Security Metrics and Reporting</p>
                    <p className="text-white/80">This section covers how to measure and communicate security performance.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Key metrics and KPIs for security and compliance</li>
                      <li>Dashboards for leadership</li>
                      <li>Communicating risk in business terms</li>
                      <li>Reporting audit findings</li>
                      <li>Tracking remediation progress</li>
                    </ul>
                  </div>

                  {/* SECTION 9 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 9: GRC in Cybersecurity Programs</p>
                    <p className="text-white/80">This section shows how GRC integrates with operational security teams.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>GRC’s role in SOC and IR processes</li>
                      <li>Policy-driven incident response</li>
                      <li>Alignment with vulnerability management and AppSec</li>
                      <li>Supporting cloud and hybrid environments</li>
                      <li>Linking GRC to organizational objectives</li>
                    </ul>
                  </div>

                  {/* SECTION 10 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 10: Emerging Trends and Best Practices</p>
                    <p className="text-white/80">This section highlights current trends in GRC.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Risk-based security approaches</li>
                      <li>Regulatory and compliance trends</li>
                      <li>Automation in GRC</li>
                      <li>Third-party risk management</li>
                      <li>Building a culture of security awareness</li>
                    </ul>
                  </div>

                  {/* SECTION 11 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 11: Career Skills and GRC Mindset</p>
                    <p className="text-white/80">This final section prepares students for entry-level GRC and security roles.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Thinking like a risk-aware security professional</li>
                      <li>Collaborating across IT, security, and business teams</li>
                      <li>Entry-level GRC, compliance, and risk roles</li>
                      <li>Documentation and reporting best practices</li>
                      <li>Continuous learning in cybersecurity governance</li>
                    </ul>
                  </div>

                  {/* Who Should Attend */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Who Should Attend</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Fresh graduates entering cybersecurity, IT, or risk management</li>
                      <li>Professionals with 1–3 years of experience in IT or security</li>
                      <li>Junior compliance and audit analysts</li>
                      <li>SOC analysts and security engineers supporting governance</li>
                      <li>Risk and security operations professionals</li>
                    </ul>
                  </div>

                  {/* Prerequisites */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Prerequisites</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Basic understanding of IT systems and cybersecurity concepts</li>
                      <li>No prior GRC or compliance experience required</li>
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
