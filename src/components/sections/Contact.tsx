import { useState } from 'react'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-10 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-[13px] text-white/40 uppercase tracking-wide mb-12">
          Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-3xl md:text-5xl font-bold text-white leading-snug tracking-tight mb-8">
              Have a project in mind? Let's talk.
            </p>

            <div className="flex flex-col gap-5 text-[13px]">
              <div>
                <p className="text-white/30 mb-1">Email</p>
                <a
                  href="mailto:hello@wegooli.co"
                  className="text-white hover:text-[#FF0000] transition-colors"
                >
                  hello@wegooli.co
                </a>
              </div>
              <div>
                <p className="text-white/30 mb-1">Location</p>
                <p className="text-white">Seoul, KR</p>
              </div>
              <div className="flex gap-5 mt-2">
                {['Instagram', 'LinkedIn', 'X'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="flex flex-col justify-center gap-4 py-8">
                <h3 className="text-2xl font-bold text-white">
                  Message received.
                </h3>
                <p className="text-white/50 text-[13px]">
                  We'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormState({
                      name: '',
                      email: '',
                      company: '',
                      message: '',
                    })
                  }}
                  className="text-white/40 hover:text-white text-[13px] transition-colors mt-2 self-start"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {[
                  { name: 'name', label: 'Name', type: 'text', required: true },
                  {
                    name: 'email',
                    label: 'Email',
                    type: 'email',
                    required: true,
                  },
                  {
                    name: 'company',
                    label: 'Company (optional)',
                    type: 'text',
                    required: false,
                  },
                ].map((field) => (
                  <input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    value={formState[field.name as keyof typeof formState]}
                    onChange={handleChange}
                    placeholder={field.label}
                    className="bg-transparent border-b border-white/15 focus:border-white outline-none py-3 text-white placeholder-white/25 transition-colors text-[15px]"
                  />
                ))}
                <textarea
                  name="message"
                  required
                  rows={3}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  className="bg-transparent border-b border-white/15 focus:border-white outline-none py-3 text-white placeholder-white/25 transition-colors resize-none text-[15px]"
                />
                <button
                  type="submit"
                  className="mt-2 bg-white text-black font-semibold text-[13px] px-6 py-3 hover:bg-[#FF0000] hover:text-white transition-all duration-200 self-start"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
