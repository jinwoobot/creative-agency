import { useLanguage, type Language } from '@/contexts/LanguageContext'
import { KoreanFlag } from '@/components/ui/flags/KoreanFlag'
import { UKFlag } from '@/components/ui/flags/UKFlag'

const FLAGS: { lang: Language; Flag: typeof KoreanFlag; label: string }[] = [
  { lang: 'ko', Flag: KoreanFlag, label: 'KR' },
  { lang: 'en', Flag: UKFlag, label: 'EN' },
]

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-0.5 border border-white/15 p-0.5">
      {FLAGS.map(({ lang: l, Flag, label }) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-label={`Switch to ${label}`}
          className={`flex items-center gap-1.5 px-2 py-1.5 transition-all duration-200 ${
            lang === l
              ? 'bg-white/10'
              : 'hover:bg-white/5 opacity-50 hover:opacity-80'
          }`}
        >
          <Flag className="w-5 h-[13px] shrink-0" />
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">
            {label}
          </span>
        </button>
      ))}
    </div>
  )
}
