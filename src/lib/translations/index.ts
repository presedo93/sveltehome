import i18n, { type Config } from 'sveltekit-i18n';

export const defaultLocale = 'en';

interface Fields {
	name?: string;
	pentium?: string;
	jazz?: string;
	nintendo?: string;
	xbox?: string;
}

export const config: Config<Fields> = {
	log: {
		level: 'warn'
	},
	fallbackLocale: 'en',
	translations: {
		en: { en: 'English', es: 'Spanish' },
		es: { en: 'Inglés', es: 'Español' }
	},
	loaders: [
		{
			locale: 'en',
			key: 'navbar',
			loader: async () => (await import('./en/navbar.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'es',
			key: 'navbar',
			loader: async () => (await import('./es/navbar.json')).default
		},
		{
			locale: 'es',
			key: 'home',
			routes: ['/'],
			loader: async () => (await import('./es/home.json')).default
		}
	]
};

export const {
	t,
	loading,
	locales,
	locale,
	translations,
	loadTranslations,
	addTranslations,
	setLocale,
	setRoute
} = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
