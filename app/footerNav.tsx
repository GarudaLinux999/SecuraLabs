"use client";
import Link from "next/link";

export default function FooterNav() {
  return (
      <footer className="bg-slate-950 text-slate-300 py-6">
          <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-start gap-8">

              {/* About Us */}
              <div className="md:w-1/4">
                  <h4 className="text-base font-semibold mb-2">About Us</h4>
                  <p className="text-sm text-slate-400">
                      Industry-leading cyber security training by practitioners.
                  </p>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                      <h4 className="text-base font-semibold mb-2">Trainings</h4>
                      <ul className="space-y-1 text-sm text-slate-400">
                          <li><Link href="/trainings/infrastructure-security" className="hover:text-cyan-400">Infrastructure Security</Link></li>
                          <li><Link href="/trainings/cloud-security" className="hover:text-cyan-400">Cloud Security Basics</Link></li>
                          <li><Link href="/trainings/soc-fundamentals" className="hover:text-cyan-400">SOC Fundamentals</Link></li>
                      </ul>
                  </div>

                  <div>
                      <h4 className="text-base font-semibold mb-2">Courses</h4>
                      <ul className="space-y-1 text-sm text-slate-400">
                          <li><Link href="/courses/cybersecurity-foundations" className="hover:text-cyan-400">Cybersecurity Foundations</Link></li>
                          <li><Link href="/courses/soc-analyst" className="hover:text-cyan-400">SOC Analyst Program</Link></li>
                     </ul>
                  </div>

                  <div>
                      <h4 className="text-base font-semibold mb-2">Certifications</h4>
                      <ul className="space-y-1 text-sm text-slate-400">
                          <li><Link href="/certifications/soc-specialist" className="hover:text-cyan-400">SOC Specialist</Link></li>
                          <li><Link href="/certifications/incident-response-expert" className="hover:text-cyan-400">Incident Response Expert</Link></li>
                          </ul>
                  </div>

                  <div>
                      <h4 className="text-base font-semibold mb-2">Resources</h4>
                      <ul className="space-y-1 text-sm text-slate-400">
                          <li><Link href="/resources/blogs" className="hover:text-cyan-400">Blogs</Link></li>
                          <li><Link href="/resources/tools" className="hover:text-cyan-400">Security Tools</Link></li>
                          <li><Link href="/resources/community" className="hover:text-cyan-400">Community</Link></li>
                      </ul>
                  </div>
              </div>

              {/* Follow Us */}
              <div className="md:w-auto md:text-right">
                  <h4 className="text-base font-semibold mb-2">Follow Us</h4>
                  <div className="flex md:justify-end gap-3">
                      <img src="/facebook.png" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
                      <img src="/twitter.png" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
                      <img src="/linkedin.png" className="w-5 h-5 opacity-80 hover:opacity-100 transition" />
                  </div>
              </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-slate-400">
              <p>© 2026 Secura Labs. All rights reserved.</p>
              <p className="mt-1">Built for security professionals</p>
          </div>
      </footer>

  );
}
