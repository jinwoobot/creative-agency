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
    <section id="contact" className="py-20 md:py-28 px-6 md:px-10 bg-white border-t border-nota-border">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-apma-blue text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              Contact Us
            </p>
            <h2 className="font-display font-bold text-nota-navy text-4xl md:text-5xl tracking-[-0.02em] leading-tight mb-6">
              Start a<br />Project.
            </h2>
            <p className="text-nota-gray text-base leading-relaxed mb-12 max-w-sm">
              프로젝트에 대해 이야기해주세요. 모든 문의에 24시간 내 답변드립니다.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-nota-gray text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:hello@hailor.ai" className="text-nota-navy hover:text-apma-blue transition-colors font-medium">
                  hello@hailor.ai
                </a>
              </div>
              <div>
                <p className="text-nota-gray text-xs uppercase tracking-widest mb-1">Office</p>
                <p className="text-nota-navy font-medium">Seoul | Global Operations</p>
              </div>
              <div>
                <p className="text-nota-gray text-xs uppercase tracking-widest mb-2">Connect</p>
                <div className="flex gap-5">
                  {['LinkedIn', 'Twitter(X)', 'Global Agency Network'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-nota-gray hover:text-apma-blue text-sm transition-colors link-underline"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy callout */}
            <div id="about" className="mt-12 p-6 bg-apma-blue-pale rounded-lg border-l-4 border-apma-blue">
              <h4 className="font-display font-bold text-nota-navy text-lg mb-2">Time Quality Agency</h4>
              <p className="text-nota-gray text-sm leading-relaxed">
                우리는 고객의 시간을 값지게 하기 위해 존재합니다. 단순한 대행을 넘어, 기술로 삶의 퀄리티를 혁신하는 외과의사 같은 파트너가 되겠습니다.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-start gap-4 py-12">
                <div className="w-12 h-12 bg-apma-blue rounded-full flex items-center justify-center text-white text-xl">✓</div>
                <h3 className="text-3xl font-display font-bold text-nota-navy tracking-tight">Message received.</h3>
                <p className="text-nota-gray">24시간 내 연락드리겠습니다.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', company: '', message: '' }) }}
                  className="mt-4 text-apma-blue text-sm font-medium link-underline"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { name: 'name', label: 'Your Name', type: 'text', required: true },
                  { name: 'email', label: 'Email Address', type: 'email', required: true },
                  { name: 'company', label: 'Company (optional)', type: 'text', required: false },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label htmlFor={field.name} className="text-nota-gray text-xs uppercase tracking-widest">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={handleChange}
                      className="border border-nota-border rounded px-4 py-3 text-nota-navy placeholder-nota-gray/40 text-sm focus:outline-none focus:border-apma-blue transition-colors bg-white"
                      placeholder={field.label}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-nota-gray text-xs uppercase tracking-widest">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="border border-nota-border rounded px-4 py-3 text-nota-navy placeholder-nota-gray/40 text-sm focus:outline-none focus:border-apma-blue transition-colors resize-none bg-white"
                    placeholder="어떤 프로젝트를 구상하고 계신가요?"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-apma-blue text-white font-semibold text-sm px-7 py-3.5 rounded hover:bg-apma-blue-mid transition-all duration-200 self-start"
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
