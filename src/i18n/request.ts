import {getRequestConfig} from "next-intl/server";

import {defaultLocale, locales} from "./routing";

function isLocale(value: string): value is (typeof locales)[number] {
  return locales.includes(value as (typeof locales)[number]);
}

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  const safeLocale = locale && isLocale(locale) ? locale : defaultLocale;

  const messages = (await import(`../messages/${safeLocale}.json`)).default;

  return {
    locale: safeLocale,
    messages,
    // Having `formats` here is optional; messages cover our current needs.
  };
});

