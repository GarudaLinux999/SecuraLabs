'use client';
import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CloudSecurity() {
  return (
    <>
    <HeaderNav />
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold text-cyan-400">
              Cloud Security
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
                    Foundations for Securing Modern Cloud Environments
                  </p>

                  {/* Course Overview */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Course Overview</p>

                    <p className="text-white/80 leading-relaxed">
                      Cloud Security focuses on protecting workloads, data, identities, and services hosted on public and hybrid cloud platforms. As organizations rapidly adopt cloud technologies, misconfigurations, identity abuse, and lack of visibility have become major security risks.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                      This course builds a strong technical foundation by explaining how cloud platforms work, how they are attacked, and how security controls are applied across cloud infrastructure and services.
                    </p>
                  </div>

                  {/* Technical Course Outline */}
                  <p className="text-xl font-semibold">Technical Course Outline</p>

                  {/* SECTION 1 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 1: Introduction to Cloud Security</p>
                    <p className="text-white/80">This section introduces cloud security concepts and explains why cloud environments require a different security approach.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>What cloud security covers</li>
                      <li>Shared responsibility model</li>
                      <li>Cloud vs on-prem security differences</li>
                      <li>Common cloud breach scenarios</li>
                      <li>Cloud security roles and responsibilities</li>
                    </ul>
                  </div>

                  {/* SECTION 2 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 2: Cloud Computing Fundamentals</p>
                    <p className="text-white/80">This section establishes core cloud knowledge needed for security understanding.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>IaaS, PaaS, and SaaS models</li>
                      <li>Public, private, and hybrid clouds</li>
                      <li>Regions, availability zones, and resiliency</li>
                      <li>Cloud resource provisioning basics</li>
                      <li>Control plane vs data plane</li>
                    </ul>
                  </div>

                  {/* SECTION 3 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 3: Cloud Identity and Access Management (IAM)</p>
                    <p className="text-white/80">This section focuses on identity as the primary cloud security control.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Cloud IAM users, roles, and policies</li>
                      <li>Authentication and authorization in the cloud</li>
                      <li>Least privilege implementation</li>
                      <li>Service accounts and managed identities</li>
                      <li>Common IAM misconfigurations</li>
                    </ul>
                  </div>

                  {/* SECTION 4 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 4: Cloud Network Security</p>
                    <p className="text-white/80">This section explains how networking works in the cloud and how it is secured.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Virtual networks and subnets</li>
                      <li>Security groups and network ACLs</li>
                      <li>Private vs public exposure</li>
                      <li>Cloud firewalls and gateways</li>
                      <li>Hybrid connectivity (VPN, peering)</li>
                    </ul>
                  </div>

                  {/* SECTION 5 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 5: Cloud Workload and Compute Security</p>
                    <p className="text-white/80">This section focuses on securing compute resources.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Virtual machine security basics</li>
                      <li>Container security fundamentals</li>
                      <li>Serverless security considerations</li>
                      <li>OS hardening and patching in cloud</li>
                      <li>Workload isolation and segmentation</li>
                    </ul>
                  </div>

                  {/* SECTION 6 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 6: Cloud Data Security</p>
                    <p className="text-white/80">This section covers protecting data stored and processed in the cloud.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Data classification concepts</li>
                      <li>Encryption at rest and in transit</li>
                      <li>Key management basics</li>
                      <li>Secure storage configurations</li>
                      <li>Common data exposure risks</li>
                    </ul>
                  </div>

                  {/* SECTION 7 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 7: Cloud Logging, Monitoring, and Visibility</p>
                    <p className="text-white/80">This section explains how security visibility is achieved in cloud environments.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Cloud audit logs</li>
                      <li>Resource and access logging</li>
                      <li>Monitoring misconfigurations</li>
                      <li>Integrating cloud logs with SIEM</li>
                      <li>Detecting suspicious cloud activity</li>
                    </ul>
                  </div>

                  {/* SECTION 8 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 8: Cloud Threats and Attack Techniques</p>
                    <p className="text-white/80">This section explores how attackers target cloud environments.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Credential compromise and IAM abuse</li>
                      <li>Misconfiguration exploitation</li>
                      <li>Cloud malware and cryptomining</li>
                      <li>Lateral movement in cloud</li>
                      <li>Persistence mechanisms</li>
                    </ul>
                  </div>

                  {/* SECTION 9 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 9: Cloud Security Posture Management (CSPM)</p>
                    <p className="text-white/80">This section introduces proactive cloud risk management.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Configuration assessment concepts</li>
                      <li>Policy-as-code basics</li>
                      <li>Continuous compliance monitoring</li>
                      <li>Reducing cloud attack surface</li>
                      <li>Cloud security best practices</li>
                    </ul>
                  </div>

                  {/* SECTION 10 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 10: Incident Response in Cloud Environments</p>
                    <p className="text-white/80">This section focuses on responding to cloud-specific incidents.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Cloud incident detection</li>
                      <li>Investigating cloud logs and alerts</li>
                      <li>Containment using cloud controls</li>
                      <li>Recovery and remediation</li>
                      <li>Shared responsibility during incidents</li>
                    </ul>
                  </div>

                  {/* SECTION 11 */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">Section 11: Cloud Security Skills and Career Readiness</p>
                    <p className="text-white/80">This final section prepares students for cloud security roles.</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Cloud security analyst responsibilities</li>
                      <li>Collaboration with DevOps and SOC teams</li>
                      <li>Understanding cloud security tools (conceptual)</li>
                      <li>Entry-level cloud security career paths</li>
                      <li>Building long-term cloud security expertise</li>
                    </ul>
                  </div>

                  {/* Who Should Attend */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Who Should Attend</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Fresh graduates entering cloud or cybersecurity roles</li>
                      <li>Professionals with 1–3 years of IT, cloud, or security experience</li>
                      <li>SOC analysts working with cloud alerts</li>
                      <li>Infrastructure and DevOps engineers transitioning into security</li>
                      <li>Security engineers building cloud skills</li>
                    </ul>
                  </div>

                  {/* Prerequisites */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Prerequisites</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Basic understanding of networking and operating systems</li>
                      <li>Familiarity with virtualization is helpful</li>
                      <li>No prior cloud security experience required</li>
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
