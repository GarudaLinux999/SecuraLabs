'use client';
import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ApplicationSecurity() {
  return (
    <>
    <HeaderNav />
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold text-cyan-400">
              Application Security
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
                    Foundations for Securing Modern Software Applications
                  </p>

                  {/* Course Overview */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Course Overview</p>

                    <p className="text-white/80 leading-relaxed">
                      Application Security focuses on identifying, preventing, and mitigating security weaknesses in software applications throughout their lifecycle. As applications become the primary interface for business and users, application-layer vulnerabilities remain one of the most exploited attack vectors.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                      This course builds a strong foundation in how applications are built, how they are attacked, and how security controls are integrated into development and deployment workflows.
                    </p>
                  </div>

                  {/* Technical Outline */}
                  <p className="text-xl font-semibold">Technical Course Outline</p>

                  {/* SECTION 1 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 1: Introduction to Application Security
                    </p>
                    <p className="text-white/80">
                      This section introduces application security as a critical component of cybersecurity.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>What application security covers</li>
                      <li>Application security vs infrastructure security</li>
                      <li>Why applications are frequently targeted</li>
                      <li>Secure Software Development Lifecycle (SSDLC)</li>
                      <li>Common causes of application breaches</li>
                    </ul>
                  </div>

                  {/* SECTION 2 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 2: Application Architecture Fundamentals
                    </p>
                    <p className="text-white/80">
                      This section establishes foundational knowledge of how modern applications work.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Web application architecture</li>
                      <li>Client–server models</li>
                      <li>APIs and microservices basics</li>
                      <li>Authentication and session handling</li>
                      <li>Data flow and trust boundaries</li>
                    </ul>
                  </div>

                  {/* SECTION 3 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 3: Common Application Vulnerabilities
                    </p>
                    <p className="text-white/80">
                      This section covers the most prevalent application security issues.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>OWASP Top 10 overview</li>
                      <li>Injection flaws</li>
                      <li>Authentication and authorization failures</li>
                      <li>Sensitive data exposure</li>
                      <li>Security misconfigurations</li>
                    </ul>
                  </div>

                  {/* SECTION 4 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 4: Input Handling and Validation
                    </p>
                    <p className="text-white/80">
                      This section focuses on how improper input handling leads to vulnerabilities.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>User input sources</li>
                      <li>Input validation vs sanitization</li>
                      <li>Server-side vs client-side validation</li>
                      <li>Encoding and escaping</li>
                      <li>Preventing injection attacks</li>
                    </ul>
                  </div>

                  {/* SECTION 5 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 5: Authentication and Session Security
                    </p>
                    <p className="text-white/80">
                      This section explores securing user identity within applications.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Secure login mechanisms</li>
                      <li>Password storage best practices</li>
                      <li>Session management concepts</li>
                      <li>Token-based authentication</li>
                      <li>Common auth-related attacks</li>
                    </ul>
                  </div>

                  {/* SECTION 6 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 6: Access Control and Authorization
                    </p>
                    <p className="text-white/80">
                      This section focuses on controlling what users can do within applications.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Role-based access control (RBAC)</li>
                      <li>Object-level authorization</li>
                      <li>Insecure direct object references (IDOR)</li>
                      <li>Privilege escalation scenarios</li>
                      <li>Authorization testing concepts</li>
                    </ul>
                  </div>

                  {/* SECTION 7 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 7: API Security Fundamentals
                    </p>
                    <p className="text-white/80">
                      This section introduces security considerations for APIs.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>REST and GraphQL security basics</li>
                      <li>API authentication methods</li>
                      <li>Rate limiting and abuse prevention</li>
                      <li>API authorization issues</li>
                      <li>Common API attack patterns</li>
                    </ul>
                  </div>

                  {/* SECTION 8 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 8: Secure Development and Testing
                    </p>
                    <p className="text-white/80">
                      This section explains how security is integrated into development workflows.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Secure coding principles</li>
                      <li>Code review for security</li>
                      <li>Static and dynamic testing concepts</li>
                      <li>Dependency and third-party risk</li>
                      <li>Developer–security collaboration</li>
                    </ul>
                  </div>

                  {/* SECTION 9 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 9: Application Security in CI/CD and Cloud
                    </p>
                    <p className="text-white/80">
                      This section focuses on modern deployment environments.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>CI/CD pipeline risks</li>
                      <li>Secrets management</li>
                      <li>Containerized application security</li>
                      <li>Environment separation</li>
                      <li>Common cloud app misconfigurations</li>
                    </ul>
                  </div>

                  {/* SECTION 10 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 10: Application Security Monitoring and Incident Response
                    </p>
                    <p className="text-white/80">
                      This section introduces how application issues are detected and handled post-deployment.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Application logging basics</li>
                      <li>Runtime security monitoring</li>
                      <li>Web application firewalls (WAF)</li>
                      <li>Handling application security incidents</li>
                      <li>Coordinating with SOC and IR teams</li>
                    </ul>
                  </div>

                  {/* SECTION 11 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 11: AppSec Mindset and Career Readiness
                    </p>
                    <p className="text-white/80">
                      This final section prepares students for entry-level AppSec roles.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Thinking like an attacker and defender</li>
                      <li>Communicating findings to developers</li>
                      <li>Balancing security and usability</li>
                      <li>Entry-level AppSec roles and responsibilities</li>
                      <li>Building AppSec skills for growth</li>
                    </ul>
                  </div>

                  {/* Who Should Attend */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Who Should Attend</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Fresh graduates entering cybersecurity or software development</li>
                      <li>Professionals with 1–3 years of experience in development, QA, or security</li>
                      <li>Application security analysts and engineers (junior)</li>
                      <li>SOC analysts supporting application alerts</li>
                      <li>DevOps and cloud engineers moving into security</li>
                    </ul>
                  </div>

                  {/* Prerequisites */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Prerequisites</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Basic understanding of web applications</li>
                      <li>Familiarity with HTTP and APIs is helpful</li>
                      <li>No prior application security experience required</li>
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
