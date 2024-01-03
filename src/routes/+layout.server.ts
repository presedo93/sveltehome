import { locales, loadTranslations, translations, defaultLocale } from '$lib/translations';

// @ts-expect-error Missing type for data
export const load = async ({ url, cookies, request }) => {
	const { pathname } = url;

	// try to get the locale from cookies
	let locale = (cookies.get('lang') || '').toLowerCase();

	// get user preferred locale
	if (!locale) {
		locale = `${`${request.headers.get('accept-language')}`.match(
			/[a-zA-Z]+?(?=-|_|,|;)/
		)}`.toLowerCase();
	}

	// get defined locales
	const supportedLocales = locales.get().map((l) => l.toLowerCase());

	// user default locale if current locale is not supported
	if (!supportedLocales.includes(locale)) {
		locale = defaultLocale;
	}

	await loadTranslations(locale, pathname);

	return {
		i18n: { locale, route: pathname },
		translations: translations.get() // `translations` on server contain all translations loaded by different clients
	};
};
