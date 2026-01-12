'use client';
import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NetworkSecurityFoundations() {
  return (
    <>
    <HeaderNav />
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold text-cyan-400">
              Network Security
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
                      Network Security focuses on protecting data and systems as they move across enterprise networks. This course builds a strong technical foundation by teaching how networks operate, how attackers exploit network weaknesses, and how defensive controls are deployed and monitored in real-world environments.
                    </p>

                    <p className="text-white/80 leading-relaxed">
                      Participants gain hands-on security thinking and practical knowledge required for roles such as SOC analyst, network security engineer, and infrastructure security analyst.
                    </p>
                  </div>

                  {/* Technical Outline */}
                  <p className="text-xl font-semibold">Technical Course Outline</p>

                  {/* Section Template */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 1: Introduction to Network Security
                    </p>
                    <p className="text-white/80">
                      This section introduces the role of network security within an organization and explains how networks are commonly designed and protected.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>What network security covers</li>
                      <li>Enterprise network architectures</li>
                      <li>Trust boundaries and attack surfaces</li>
                      <li>On-premises, cloud, and hybrid networking</li>
                      <li>Common causes of network breaches</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 2: Networking Fundamentals for Security
                    </p>
                    <p className="text-white/80">
                      This section establishes the core networking knowledge required to understand attacks and defenses.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>OSI and TCP/IP models</li>
                      <li>IP addressing, subnets, and routing</li>
                      <li>Common protocols (HTTP, HTTPS, DNS, FTP, SMTP)</li>
                      <li>Ports and services</li>
                      <li>Packet flow and traffic analysis concepts</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 3: Network Devices and Security Roles
                    </p>
                    <p className="text-white/80">
                      This section explains the purpose and security role of key network components.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Switches, routers, and gateways</li>
                      <li>Firewalls and firewall placement</li>
                      <li>Load balancers and proxies</li>
                      <li>VPN concentrators</li>
                      <li>Network segmentation and DMZs</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 4: Network Threats and Attack Techniques
                    </p>
                    <p className="text-white/80">
                      This section explores how attackers target networks and move through them.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Network scanning and enumeration</li>
                      <li>Man-in-the-middle attacks</li>
                      <li>ARP poisoning and spoofing</li>
                      <li>DNS attacks</li>
                      <li>Denial-of-Service (DoS/DDoS)</li>
                      <li>Lateral movement over the network</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-semibold uppercase">
                      Section 5: Firewall and Perimeter Security
                    </p>
                    <p className="text-white/80">
                      This section focuses on controlling and filtering network traffic.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Stateless vs stateful firewalls</li>
                      <li>Network vs application-layer firewalls</li>
                      <li>Rule design and common misconfigurations</li>
                      <li>NAT and port forwarding</li>
                      <li>Logging and monitoring firewall traffic</li>
                    </ul>
                  </div>

                  {/* Who Should Attend */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Who Should Attend</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Fresh graduates in IT or cybersecurity</li>
                      <li>Professionals with 1–3 years of experience in networking or IT support</li>
                      <li>SOC and NOC analysts</li>
                      <li>Network and infrastructure engineers moving into security</li>
                      <li>Cloud support engineers</li>
                    </ul>
                  </div>

                  {/* Prerequisites */}
                  <div className="space-y-4">
                    <p className="text-xl font-semibold">Prerequisites</p>
                    <ul className="list-disc pl-6 space-y-1 text-white/80">
                      <li>Basic understanding of networking concepts</li>
                      <li>Familiarity with IP addressing and protocols is helpful</li>
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
