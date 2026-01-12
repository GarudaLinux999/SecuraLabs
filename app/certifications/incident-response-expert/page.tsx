import FooterNav from "@/app/footerNav";
import HeaderNav from "@/app/headerNav";

export default function IncidentResponseExpert() {
  return (
    <>
    <HeaderNav />
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-cyan-400">
          Incident Response Expert
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          Learn core security concepts including networking, threats,
          vulnerabilities, risk management, and security fundamentals.
        </p>

        <ul className="mt-8 space-y-3 text-slate-300 list-disc list-inside">
          <li>Security fundamentals</li>
          <li>Threat & vulnerability analysis</li>
          <li>Basic SOC workflows</li>
          <li>Hands-on labs</li>
        </ul>
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
