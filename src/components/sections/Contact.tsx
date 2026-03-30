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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 border-t border-hailor-white/10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-hailor-cobalt text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Get In Touch
            </p>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[1.0] text-hailor-white mb-8">
              Contact<br />Us.
            </h2>
            <p className="text-hailor-white/50 text-base leading-relaxed mb-12 max-w-sm">
              프로젝트에 대해 이야기해주세요. 모든 문의에 24시간 내 답변드립니다.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-hailor-white/30 text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:hello@hailor.ai" className="text-hailor-white hover:text-hailor-cobalt transition-colors font-medium">
                  hello@hailor.ai
                </a>
              </div>
              <div>
                <p className="text-hailor-white/30 text-xs uppercase tracking-widest mb-1">Office</p>
                <p className="text-hailor-white font-medium">Seoul | Global Operations</p>
              </div>
              <div>
                <p className="text-hailor-white/30 text-xs uppercase tracking-widest mb-2">Connect</p>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter(X)', 'Global Agency Network'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-hailor-white/40 hover:text-hailor-cobalt text-sm uppercase tracking-widest transition-colors"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-start gap-4 py-12">
                <div className="text-5xl text-hailor-cobalt">✓</div>
                <h3 className="text-3xl font-display font-bold text-hailor-white tracking-tight">Message received.</h3>
                <p className="text-hailor-white/50">24시간 내 연락드리겠습니다.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', company: '', message: '' }) }}
                  className="mt-4 text-hailor-white/40 hover:text-hailor-white text-sm uppercase tracking-widest transition-colors"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {[
                  { name: 'name', label: 'Your Name', type: 'text', required: true },
                  { name: 'email', label: 'Email Address', type: 'email', required: true },
                  { name: 'company', label: 'Company (optional)', type: 'text', required: false },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label htmlFor={field.name} className="text-hailor-white/40 text-xs uppercase tracking-widest">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={handleChange}
                      className="bg-transparent border-b border-hailor-white/20 focus:border-hailor-cobalt outline-none py-3 text-hailor-white placeholder-hailor-white/20 transition-colors duration-200 text-base"
                      placeholder={field.label}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-hailor-white/40 text-xs uppercase tracking-widest">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="bg-transparent border-b border-hailor-white/20 focus:border-hailor-cobalt outline-none py-3 text-hailor-white placeholder-hailor-white/20 transition-colors duration-200 resize-none text-base"
                    placeholder="어떤 프로젝트를 구상하고 계신가요?"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-hailor-cobalt text-hailor-white font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-hailor-cobalt/80 transition-all duration-200 self-start"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
