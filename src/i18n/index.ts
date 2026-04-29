import { createI18n } from 'vue-i18n'
import fr from './locales/fr'
import en from './locales/en'
import es from './locales/es'

export type LocaleCode = 'fr' | 'en' | 'es'

const STORAGE_KEY = 'portfolio-locale'

export function getStoredLocale(): LocaleCode {
  if (typeof localStorage === 'undefined') return 'fr'
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw === 'en' || raw === 'es' || raw === 'fr') return raw
  return 'fr'
}

export function persistLocale(locale: LocaleCode) {
  localStorage.setItem(STORAGE_KEY, locale)
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getStoredLocale(),
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
    es,
  },
})

export function applyDocumentLocale(locale: LocaleCode) {
  document.documentElement.lang = locale === 'en' ? 'en' : locale === 'es' ? 'es' : 'fr'
  document.title = String(i18n.global.t('meta.title'))
}
