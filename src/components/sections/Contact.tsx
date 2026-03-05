import { useState } from 'react'
import { useT } from '@/hooks/useT'

export function Contact() {
  const t = useT()
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

  const fields = [
    { name: 'name' as const, labelKey: 'form_name' as const, type: 'text', required: true },
    { name: 'email' as const, labelKey: 'form_email' as const, type: 'email', required: true },
    { name: 'company' as const, labelKey: 'form_company' as const, type: 'text', required: false },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.3em] mb-3">
              {t('contact_eyebrow')}
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9] text-white mb-8">
              {t('contact_title_1')}<br />{t('contact_title_2')}
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-12 max-w-sm">
              {t('contact_sub')}
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.25em] mb-1">Email</p>
                <a href="mailto:hello@wegooli.co" className="text-white hover:text-accent transition-colors font-medium">
                  hello@wegooli.co
                </a>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.25em] mb-1">Location</p>
                <p className="text-white font-medium">Seoul, KR</p>
              </div>
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.25em] mb-2">Social</p>
                <div className="flex gap-5">
                  {['Instagram', 'LinkedIn', 'X'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors"
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
                <div className="w-12 h-12 border-2 border-accent flex items-center justify-center text-accent text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight">{t('form_success_title')}</h3>
                <p className="text-white/50">{t('form_success_sub')}</p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormState({ name: '', email: '', company: '', message: '' })
                  }}
                  className="mt-4 text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors"
                >
                  {t('form_success_back')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                {fields.map((field) => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label htmlFor={field.name} className="text-white/35 text-[10px] uppercase tracking-[0.25em]">
                      {t(field.labelKey)}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={formState[field.name]}
                      onChange={handleChange}
                      className="bg-transparent border-b border-white/15 focus:border-white outline-none py-3 text-white placeholder-white/15 transition-colors duration-200 text-base"
                      placeholder={t(field.labelKey)}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-white/35 text-[10px] uppercase tracking-[0.25em]">
                    {t('form_message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white/15 focus:border-white outline-none py-3 text-white placeholder-white/15 transition-colors duration-200 resize-none text-base"
                    placeholder={t('form_message')}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-white text-black font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-accent hover:text-white transition-all duration-200 self-start"
                >
                  {t('form_submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
