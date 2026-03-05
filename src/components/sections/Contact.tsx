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
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Get In Touch
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9] text-white mb-8">
              Start a<br />project.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-12 max-w-sm">
              Tell us about what you're building. We respond to every inquiry within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:hello@studioform.co" className="text-white hover:text-accent transition-colors font-medium">
                  hello@studioform.co
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Location</p>
                <p className="text-white font-medium">Seoul, KR — New York, US</p>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Social</p>
                <div className="flex gap-4">
                  {['Instagram', 'LinkedIn', 'X'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-white/40 hover:text-white text-sm uppercase tracking-widest transition-colors"
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
                <div className="text-5xl">✓</div>
                <h3 className="text-3xl font-black text-white tracking-tight">Message received.</h3>
                <p className="text-white/50">We'll be in touch within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', company: '', message: '' }) }}
                  className="mt-4 text-white/40 hover:text-white text-sm uppercase tracking-widest transition-colors"
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
                    <label htmlFor={field.name} className="text-white/40 text-xs uppercase tracking-widest">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={handleChange}
                      className="bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white placeholder-white/20 transition-colors duration-200 text-base"
                      placeholder={field.label}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-white/40 text-xs uppercase tracking-widest">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white/20 focus:border-white outline-none py-3 text-white placeholder-white/20 transition-colors duration-200 resize-none text-base"
                    placeholder="What are you working on?"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-white text-black font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-accent hover:text-white transition-all duration-200 self-start"
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
