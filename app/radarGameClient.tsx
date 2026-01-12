// ...existing code...
"use client"
import * as React from "react"

type BlipType = "threat" | "flag" | "decoy"
type Blip = {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  type: BlipType
  alive: boolean
  revealed?: boolean
}
// Slow down game globally:
// Set to 1 = normal speed, <1 = slower, >1 = faster.
(() => {
    if (typeof document === "undefined") return
    const s = document.createElement("style")
    s.innerHTML = `
        /* Make the radar visually merge with the page instead of looking like a separate card */
        .relative.bg-card.p-6.rounded-lg.border.border-border {
            background: transparent !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
        }
        .relative.bg-card.p-6.rounded-lg.border.border-border > .flex { gap: 0.5rem !important; }
        .radar-wrap { background: transparent !important; border: none !important; }
        .radar-wrap .sweep { filter: blur(4px) saturate(1.05); opacity: 0.9; }
        .reveal-label { color: inherit !important; }
    `
    document.head.appendChild(s)
})()
const GAME_SPEED = 0.6

if (typeof window !== "undefined") {
    // Scale requestAnimationFrame timestamps so movement updates see a smaller dt.
    const _rAF = window.requestAnimationFrame.bind(window)
    window.requestAnimationFrame = (cb: FrameRequestCallback) =>
        _rAF((t) => cb(t * GAME_SPEED))

    // Slow the sweep CSS animation to match movement speed.
    const style = document.createElement("style")
    style.innerHTML = `.sweep { animation-duration: ${3.2 / GAME_SPEED}s !important; }`
    document.head.appendChild(style)
}
function rand(min = 0, max = 1) {
  return Math.random() * (max - min) + min
}

function createBlips(count = 8, flags = 3): Blip[] {
  const arr: Blip[] = []
  const picks = new Set<number>()
  while (picks.size < flags) picks.add(Math.floor(Math.random() * count))
  for (let i = 0; i < count; i++) {
    arr.push({
      id: i,
      x: rand(0.08, 0.92),
      y: rand(0.08, 0.92),
      vx: rand(-0.001, 0.001),
      vy: rand(-0.001, 0.001),
      type: picks.has(i) ? "flag" : Math.random() < 0.4 ? "threat" : "decoy",
      alive: true,
    })
  }
  return arr
}

export default function RadarGameClient({
  size = 500,
  blipCount = 8,
  flagCount = 3,
}: {
  size?: number
  blipCount?: number
  flagCount?: number
}) {
  const { useEffect, useRef, useState } = React
  const [blips, setBlips] = useState<Blip[]>(() => createBlips(blipCount, flagCount))
  const [score, setScore] = useState(0)
  const [found, setFound] = useState(0)
  const [timeLeft, setTimeLeft] = useState(45)
  const rafRef = useRef<number | null>(null)
  const lastRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [running, setRunning] = useState(true)
  const [showResult, setShowResult] = useState<null | "win" | "lose">(null)

  useEffect(() => {
    function step(t: number) {
      if (!lastRef.current) lastRef.current = t
      const dt = Math.min(40, t - lastRef.current)
      lastRef.current = t
      setBlips((prev) =>
        prev.map((b) => {
          if (!b.alive) return b
          let nx = b.x + b.vx * dt
          let ny = b.y + b.vy * dt
          if (nx < 0.04 || nx > 0.96) {
            b.vx *= -1
            nx = Math.max(0.04, Math.min(0.96, nx))
          }
          if (ny < 0.04 || ny > 0.96) {
            b.vy *= -1
            ny = Math.max(0.04, Math.min(0.96, ny))
          }
          if (Math.random() < 0.01) {
            b.vx += rand(-0.0003, 0.0003)
            b.vy += rand(-0.0003, 0.0003)
            b.vx = Math.max(-0.002, Math.min(0.002, b.vx))
            b.vy = Math.max(-0.002, Math.min(0.002, b.vy))
          }
          return { ...b, x: nx, y: ny, vx: b.vx, vy: b.vy }
        })
      )
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      lastRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          setRunning(false)
          setShowResult(found >= flagCount ? "win" : "lose")
          clearInterval(id)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running, found, flagCount])

  function revealBlip(id: number) {
    setBlips((prev) =>
      prev.map((b) => {
        if (b.id !== id || !b.alive) return b
        const revealed = true
        if (b.type === "flag") {
          setScore((s) => s + 150)
          setFound((f) => {
            const nf = f + 1
            if (nf >= flagCount) {
              setRunning(false)
              setShowResult("win")
            }
            return nf
          })
        } else if (b.type === "threat") {
          setScore((s) => s + 50)
        } else {
          setScore((s) => Math.max(0, s - 20))
        }
        return { ...b, alive: false, revealed }
      })
    )
  }

  function restart() {
    setBlips(createBlips(blipCount, flagCount))
    setScore(0)
    setFound(0)
    setTimeLeft(45)
    setRunning(true)
    setShowResult(null)
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-12xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              {/* <h3 className="text-1xl md:text-1xl font-bold">Radar Command — Quarantine Operations</h3> */}
              <p className="text-sm text-muted-foreground">Track moving anomalies, quarantine hidden flags and score points. Time-limited, fast-paced.</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Score</div>
              <div className="text-xl font-semibold text-primary">{score}</div>
            </div>
          </div>

          <div className="relative bg-card p-6 rounded-lg border border-border overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div
                ref={containerRef}
                className="radar-wrap relative rounded-full bg-[#041022]/80 border border-border flex-shrink-0"
                style={{ width: size, height: size }}
              >
                <div className="sweep" />
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <circle cx="50" cy="50" r="46" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" fill="none" />
                  <circle cx="50" cy="50" r="32" stroke="rgba(255,255,255,0.03)" strokeWidth="0.4" fill="none" />
                  <circle cx="50" cy="50" r="18" stroke="rgba(255,255,255,0.02)" strokeWidth="0.35" fill="none" />
                  <line x1="50" y1="4" x2="50" y2="96" stroke="rgba(255,255,255,0.02)" strokeWidth="0.35" />
                  <line x1="4" y1="50" x2="96" y2="50" stroke="rgba(255,255,255,0.02)" strokeWidth="0.35" />
                </svg>

                {blips.map((b) => {
                  const px = (b.x * size).toFixed(2)
                  const py = (b.y * size).toFixed(2)
                  const isFlag = b.type === "flag"
                  return (
                    <button
                      aria-label={b.type}
                      key={b.id}
                      onClick={() => revealBlip(b.id)}
                      className={[
                        "blip absolute rounded-full border-2 flex items-center justify-center transition-transform",
                        b.alive ? "alive" : "dead",
                        b.revealed ? "revealed" : "",
                        isFlag ? "flag" : b.type === "threat" ? "threat" : "decoy",
                      ].join(" ")}
                      style={{
                        left: `calc(${px}px - 12px)`,
                        top: `calc(${py}px - 12px)`,
                        width: b.alive ? 24 : 44,
                        height: b.alive ? 24 : 44,
                      }}
                      title={
                        b.alive
                          ? "Click to quarantine"
                          : b.type === "flag"
                          ? "Flag quarantined"
                          : b.type === "threat"
                          ? "Threat neutralized"
                          : "Decoy"
                      }
                    >
                      {!b.alive ? (
                        <div className="reveal-label text-xs font-medium pointer-events-none">
                          {b.type === "flag" ? "FLAG" : b.type === "threat" ? "THREAT" : "DECOY"}
                        </div>
                      ) : (
                        <div className="dot w-2 h-2 rounded-full" />
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="flex-1 min-w-[220px]">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="p-3 bg-muted/60 rounded-md border border-border text-sm">
                    <div className="text-muted-foreground text-xs">Time</div>
                    <div className="font-semibold text-lg">{timeLeft}s</div>
                  </div>
                  <div className="p-3 bg-muted/60 rounded-md border border-border text-sm">
                    <div className="text-muted-foreground text-xs">Flags</div>
                    <div className="font-semibold text-lg">{found} / {flagCount}</div>
                  </div>
                  <div className="col-span-2 p-3 bg-muted/60 rounded-md border border-border text-sm">
                    <div className="text-muted-foreground text-xs">Status</div>
                    <div className="text-medium mt-1">{running ? "Hunt in progress" : showResult === "win" ? "All flags secured" : showResult === "lose" ? "Time expired" : "Paused"}</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => setRunning((r) => !r)} type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-border bg-transparent hover:bg-muted text-sm">
                    {running ? "Pause" : "Resume"}
                  </button>
                  <button onClick={restart} type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-border bg-primary/6 text-sm hover:bg-primary/10">
                    Restart
                  </button>
                  <button type="button" onClick={() => {
                    setScore((s) => Math.max(0, s - 10))
                    setBlips((prev) => {
                      const alive = prev.filter((p) => p.alive)
                      if (!alive.length) return prev
                      const center = { x: 0.5, y: 0.5 }
                      alive.sort((a, b) => (a.x - center.x) ** 2 + (a.y - center.y) ** 2 - ((b.x - center.x) ** 2 + (b.y - center.y) ** 2))
                      const id = alive[0].id
                      return prev.map((p) => (p.id === id ? { ...p, alive: false, revealed: true } : p))
                    })
                  }} className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-border bg-transparent text-sm hover:bg-muted" title="Reveal nearest (cost -10)">
                    Reveal Hint
                  </button>
                </div>

                <div className="mt-4 text-sm text-muted-foreground">
                  Tip: Flags glow faintly when sweep passes — click moving blips to quarantine them. Flags give bonus points.
                </div>
              </div>
            </div>

            {showResult && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg pointer-events-none">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-5 rounded-lg text-center shadow-lg">
                  <div className="text-lg font-bold text-primary">
                    {showResult === "win" ? "Operation Complete — All Flags Secured" : "Operation Failed — Time Expired"}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Score: {score} • Flags: {found} / {flagCount}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .radar-wrap { position: relative; overflow: hidden; display: block; }
        .sweep {
          position: absolute;
          inset: 0;
          background: conic-gradient(rgba(99,102,241,0.16), rgba(56,189,248,0.06) 30%, rgba(0,0,0,0) 60%);
          mix-blend-mode: screen;
          transform-origin: 50% 50%;
          animation: sweep-rot 3.2s linear infinite;
          opacity: 0.95;
          filter: blur(6px) saturate(1.2);
          pointer-events: none;
        }
        @keyframes sweep-rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .blip { cursor: crosshair; }
        .blip .dot { background: rgba(255,255,255,0.95); box-shadow: 0 0 8px rgba(255,255,255,0.12); }
        .blip.alive { transition: transform 160ms linear; }
        .blip.dead { transform: scale(1.2); border-style: solid; }
        .blip.threat { border-color: rgba(244,63,94,0.9); }
        .blip.flag { border-color: rgba(245,158,11,0.95); box-shadow: 0 8px 24px rgba(245,158,11,0.12); }
        .blip.decoy { border-color: rgba(147,197,253,0.9); }
        .blip.revealed { background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(2,6,23,0.02)); }
        .reveal-label { color: white; letter-spacing: .08em; font-size: 10px; }
        .blip.flag .dot { background: rgba(245,158,11,1); box-shadow: 0 0 8px rgba(245,158,11,0.8); }
        .blip.threat .dot { background: rgba(244,63,94,1); box-shadow: 0 0 8px rgba(244,63,94,0.8); }
        .blip.decoy .dot { background: rgba(59,130,246,1); box-shadow: 0 0 8px rgba(59,130,246,0.6); }
        .blip.alive:hover { transform: scale(1.14); }
        @media (prefers-reduced-motion: reduce) {
          .sweep { animation: none; }
          .blip.alive:hover { transform: none; }
        }
      `}</style>
    </section>
  )
}
// ...existing code...