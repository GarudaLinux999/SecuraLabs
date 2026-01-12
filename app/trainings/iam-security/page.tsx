'use client';
import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IamSecurity() {
  return (
    <>
    <HeaderNav />
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold text-cyan-400">
              IAM Security
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
                    Foundations for Early-Career Security & IT Professionals
                  </p>

                  {/* Course Overview */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Course Overview</p>

                    <p className="text-white/80 leading-relaxed">
                      Identity and Access Management (IAM) Security focuses on controlling who can access what, when, and how across enterprise systems. As identity becomes the primary security perimeter in cloud, remote, and hybrid environments, IAM failures are a leading cause of breaches.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                      This course builds a strong technical foundation by explaining authentication, authorization, identity governance, and privileged access, along with common attacks and defensive controls used in modern organizations.
                    </p>
                  </div>

                  {/* Technical Outline */}
                  <p className="text-xl font-semibold">Technical Course Outline</p>

                  {/* SECTION 1 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 1: Introduction to IAM Security
                    </p>
                    <p className="text-white/80">
                      This section introduces IAM as a core pillar of cybersecurity and explains its role across infrastructure, applications, and cloud platforms.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>What IAM security covers</li>
                      <li>Why identity is the new perimeter</li>
                      <li>IAM in on-prem, cloud, and hybrid environments</li>
                      <li>Shared responsibility for identity security</li>
                      <li>Common IAM failures and breach examples</li>
                    </ul>
                  </div>

                  {/* SECTION 2 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 2: Identity Fundamentals
                    </p>
                    <p className="text-white/80">
                      This section establishes core identity concepts required to understand IAM systems.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Digital identities (users, service accounts, machines)</li>
                      <li>Authentication vs authorization</li>
                      <li>Identity lifecycle (joiner, mover, leaver)</li>
                      <li>Credentials and secrets</li>
                      <li>Identity directories and identity stores</li>
                    </ul>
                  </div>

                  {/* SECTION 3 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 3: Authentication Mechanisms
                    </p>
                    <p className="text-white/80">
                      This section explains how users and systems prove identity.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Password-based authentication</li>
                      <li>Multi-factor authentication (MFA)</li>
                      <li>Token-based authentication</li>
                      <li>Certificates and key-based access</li>
                      <li>Common authentication weaknesses and attacks</li>
                    </ul>
                  </div>

                  {/* SECTION 4 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 4: Authorization and Access Control Models
                    </p>
                    <p className="text-white/80">
                      This section covers how permissions are granted and enforced.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Role-Based Access Control (RBAC)</li>
                      <li>Attribute-Based Access Control (ABAC)</li>
                      <li>Policy-based authorization</li>
                      <li>Least privilege principles</li>
                      <li>Permission sprawl and access creep</li>
                    </ul>
                  </div>

                  {/* SECTION 5 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 5: Enterprise IAM Systems
                    </p>
                    <p className="text-white/80">
                      This section introduces commonly used IAM platforms and architectures.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Active Directory fundamentals</li>
                      <li>Azure AD / Entra ID and cloud directories</li>
                      <li>LDAP concepts</li>
                      <li>Identity federation</li>
                      <li>Synchronization between identity systems</li>
                    </ul>
                  </div>

                  {/* SECTION 6 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 6: Privileged Access Management (PAM)
                    </p>
                    <p className="text-white/80">
                      This section focuses on securing high-risk privileged accounts.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Privileged users and accounts</li>
                      <li>Administrative access risks</li>
                      <li>Credential vaulting concepts</li>
                      <li>Session monitoring and recording</li>
                      <li>Just-In-Time (JIT) access models</li>
                    </ul>
                  </div>

                  {/* SECTION 7 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 7: IAM Threats and Attack Techniques
                    </p>
                    <p className="text-white/80">
                      This section explores how attackers exploit identity weaknesses.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Credential phishing and password spraying</li>
                      <li>Brute-force and credential stuffing</li>
                      <li>Pass-the-hash and token theft</li>
                      <li>Privilege escalation</li>
                      <li>Lateral movement using identity</li>
                    </ul>
                  </div>

                  {/* SECTION 8 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 8: IAM in Cloud and DevOps Environments
                    </p>
                    <p className="text-white/80">
                      This section explains identity security in modern development and cloud platforms.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Cloud IAM roles and policies</li>
                      <li>Service identities and managed identities</li>
                      <li>Secrets management basics</li>
                      <li>API access and OAuth concepts</li>
                      <li>Common cloud IAM misconfigurations</li>
                    </ul>
                  </div>

                  {/* SECTION 9 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 9: Identity Governance and Compliance
                    </p>
                    <p className="text-white/80">
                      This section introduces governance processes that ensure access remains appropriate over time.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Access reviews and certifications</li>
                      <li>Segregation of duties (SoD)</li>
                      <li>Audit logging and monitoring</li>
                      <li>Regulatory drivers for IAM</li>
                      <li>Identity risk management</li>
                    </ul>
                  </div>

                  {/* SECTION 10 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 10: IAM Monitoring and Incident Response
                    </p>
                    <p className="text-white/80">
                      This section focuses on detecting and responding to identity-based attacks.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Identity-related indicators of compromise</li>
                      <li>Logging authentication and access events</li>
                      <li>Detecting abnormal login behavior</li>
                      <li>Responding to compromised accounts</li>
                      <li>Containment and remediation steps</li>
                    </ul>
                  </div>

                  {/* SECTION 11 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 11: Career Skills and Practical IAM Thinking
                    </p>
                    <p className="text-white/80">
                      This final section helps students apply IAM concepts in real-world roles.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Thinking like an IAM defender</li>
                      <li>Working with SOC, cloud, and infrastructure teams</li>
                      <li>Common IAM tools (conceptual overview)</li>
                      <li>Entry-level IAM and security roles</li>
                      <li>Building IAM skills for long-term growth</li>
                    </ul>
                  </div>

                  {/* Who Should Attend */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Who Should Attend</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Fresh graduates entering cybersecurity or IT</li>
                      <li>Professionals with 1–3 years of experience in IT, cloud, or security</li>
                      <li>SOC analysts and junior security engineers</li>
                      <li>System and cloud administrators moving into IAM</li>
                      <li>Application and DevOps engineers handling access controls</li>
                    </ul>
                  </div>

                  {/* Prerequisites */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Prerequisites</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Basic understanding of operating systems and networking</li>
                      <li>Familiarity with user accounts and permissions is helpful</li>
                      <li>No prior IAM experience required</li>
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
