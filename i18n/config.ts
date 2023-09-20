export const fallbackLng = 'en'
export const languages = [fallbackLng, 'zh-CN']
export const defaultNS = 'common'
export const cookieName = 'i18next'
export type ILanguages = "en" | "zh-CN"

export function getOptions (lng = fallbackLng, ns:string|string[] = defaultNS) {
  return {
    debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}