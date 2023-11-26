import 'server-only'

import type { Locale } from '@/i18n.config'

const dictionaries = {
  ar: () => import('@/localization/ar.json').then((module) => module.default),
  en: () => import('@/localization/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
