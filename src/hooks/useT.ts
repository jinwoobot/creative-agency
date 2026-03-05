import { useLanguage } from '@/contexts/LanguageContext'
import { translations, type TranslationKey } from '@/lib/i18n'

export function useT() {
  const { lang } = useLanguage()
  return (key: TranslationKey): string => translations[lang][key]
}
