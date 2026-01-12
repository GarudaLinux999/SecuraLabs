'use client'

import React, { useState } from 'react'
import HeaderNav from '../headerNav'
import FooterNav from '../footerNav'

type FormState = {
  fullName: string
  lastName: string
  phone: string
  email: string
  country: string
  message: string
  agree: boolean
}

export default function Page() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    lastName: '',
    phone: '',
    email: '',
    country: '',
    message: '',
    agree: false,
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!form.fullName || !form.lastName || !form.agree || !form.phone || !form.email) {
      setError('Please complete required fields.')
      return
    }
    setLoading(true)
    await new Promise(res => setTimeout(res, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <>
    <HeaderNav />
    <main className="page">
      <section className="hero">
        <div className="container">
          {/* LEFT */}
          <div className="hero-copy">
            <h1>READY TO SEE YOURSELF IN ACTION?</h1>
            <p className="subtitle">
              See how SecuraLabs helps you enterprise detect threats faster, reduce
              risk, and gain complete visibility across users, data, and cloud.
            </p>

            <ul className="value-points">
              <li>Behavior-based threat detection</li>
              <li>AI-powered analytics at scale</li>
              <li>Rapid deployment & easy integration</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="hero-form">
            <div className="form-card">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <h2>Let's Get Your Journey Started</h2>

                  <div className="grid">
                    <input
                      placeholder="Full name*"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                    />
                    <input
                      placeholder="Last name*"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>

                <div className="grid">
                    <input
                        placeholder="Phone*"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        pattern="^[0-9]{10}$"
                        title="Enter a 10-digit phone number (digits only)"
                        value={form.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
                            setForm(prev => ({ ...prev, phone: digits }))
                        }}
                        onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => {
                            const pasted = e.clipboardData.getData('Text')
                            const digits = pasted.replace(/\D/g, '').slice(0, 10)
                            e.preventDefault()
                            setForm(prev => ({ ...prev, phone: digits }))
                        }}
                    />
                    <input
                        placeholder="Email Address*"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email (e.g. user@example.com)"
                    />
                </div>

                  <select name="country" value={form.country} onChange={handleChange}>
                    <option value="">Country</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                  </select>

                  <textarea
                    rows={3}
                    placeholder="Message (optional)"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />

                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                    />
                    I agree to be contacted
                  </label>

                  {error && <div className="error">{error}</div>}

                  <button disabled={loading}>
                    {loading ? 'Submitting…' : 'Submit'}
                  </button>

                  <p className="legal">
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              ) : (
                <div className="thank-you">
                  <h3>Thank you!</h3>
                  <p>Our team will contact you shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page {
          font-family: Inter, system-ui, sans-serif;
          background: #f8fafc;
        }

        .hero {
          padding: 80px 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
        }

        h1 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #020617;
        }

        .subtitle {
          font-size: 18px;
          color: #475569;
          line-height: 1.6;
        }

        .value-points {
          margin-top: 24px;
          color: #334155;
          display: grid;
          gap: 10px;
        }

        .hero-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-card {
          background: white;
          border-radius: 14px;
          padding: 28px;
          box-shadow: 0 20px 40px rgba(2, 6, 23, 0.08);
        }

        h2 {
          font-size: 20px;
          margin-bottom: 16px;
          color: #020617;
        }

        input:not([type="checkbox"]),
        textarea,
        select {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          margin-bottom: 12px;
          font-size: 14px;
          color: #475569 !important;
        }

        textarea {
          min-height: 100px;
          resize: vertical;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        button {
          width: 100%;
          padding: 14px;
          background: #0f62fe;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 8px;
        }

        .checkbox {
          display: flex;
          gap: 8px;
          font-size: 13px;
          color: #475569;
          margin-bottom: 8px;
          align-items: center;
        }

        .checkbox input {
          width: auto;
          margin: 0;
          padding: 0;
        }

        .legal {
          font-size: 12px;
          color: #94a3b8;
          margin-top: 8px;
        }

        .trust {
          font-size: 12px;
          color: #64748b;
        }

        .logos {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }

        .logos div {
          background: #f1f5f9;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 12px;
        }

        .error {
          color: #dc2626;
          font-size: 13px;
          margin-bottom: 8px;
        }

        @media (max-width: 900px) {
          .container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
    <footer className="bg-slate-900/80 border-t border-white/10">
            <div className="px-0 py-8">
              <FooterNav />
            </div>
          </footer>
    </>
  )
}
