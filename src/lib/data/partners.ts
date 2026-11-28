// Logos live in src/lib/logos/<group>/<file>.png so Vite fingerprints them.
// Order here is display order; `large` marks logos whose artwork has extra padding.
const urls = import.meta.glob<string>('/src/lib/logos/**/*.png', {
	eager: true,
	import: 'default'
});

const logo = (group: string, file: string, name: string, large = false) => {
	const url = urls[`/src/lib/logos/${group}/${file}.png`];
	if (!url) throw new Error(`Missing logo: ${group}/${file}.png`);
	return { name, url, large };
};

const company = (file: string, name: string, large?: boolean) =>
	logo('companies-and-organizations', file, name, large);

export const companies = [
	company('a16z', 'Andreessen Horowitz (a16z)'),
	company('softbank-group', 'SoftBank Group'),
	company('blackrock', 'BlackRock'),
	company('bay-area-founders-club', 'Bay Area Founders Club'),
	company('plug-and-play', 'Plug and Play'),
	company('metay', 'Metay'),
	company('gumi-cryptos', 'gumi Cryptos'),
	company('dcm', 'DCM'),
	company('izuma', 'Izuma'),
	company('deepbrain-chain', 'DeepBrain Chain'),
	company('tanka', 'Tanka'),
	company('california-miramar-university', 'California Miramar University'),
	company('project-hoops', 'Project Hoops'),
	company('gfiber', 'Google Fiber'),
	company('bessemer-venture-partners', 'Bessemer Venture Partners'),
	company('stanford-angels-and-entrepreneurs', 'Stanford Angels & Entrepreneurs'),
	company('500-global', '500 Global'),
	company('unusual-ventures', 'Unusual Ventures'),
	company('tess-ventures', 'Tess Ventures'),
	company('leonis-capital', 'Leonis Capital'),
	company('hybr', 'HYBR'),
	company('lifex-ventures', 'LifeX Ventures'),
	company('empallo', 'Empallo'),
	company('sizzle', 'Sizzle'),
	company('nfx', 'NFX'),
	company('xf', 'XF'),
	company('general-catalyst', 'General Catalyst'),
	company('the-bear-cave', 'The Bear Cave'),
	company('baremetrics', 'Baremetrics'),
	company('edgenesis', 'Edgenesis'),
	company('visionlist-commons-venture', 'Visionlist Commons Venture'),
	company('acsss', 'ACSSS'),
	company('amino-capital', 'Amino Capital'),
	company('artela', 'Artela'),
	company('aws', 'Amazon Web Services'),
	company('collov-labs', 'Collov Labs'),
	company('drlambda-ai', 'DrLambda AI'),
	company('futurex-capital', 'FutureX Capital'),
	company('grok', 'Grok'),
	company('homes-4-the-homeless', 'Homes 4 the Homeless'),
	company('nanonets', 'Nanonets'),
	company('pear-vc', 'Pear VC'),
	company('tailbox', 'Tailbox'),
	company('vocadian', 'Vocadian'),
	company('magstone-law', 'Magstone Law', true),
	company('star-one-credit-union', 'Star One Credit Union', true),
	company('7edu', '7EDU', true),
	company('stans-donuts', 'Stan’s Donuts', true),
	company('philz-coffee', 'Philz Coffee', true)
];

export const communityInitiatives = [
	logo('community-initiatives', 'american-heart-association', 'American Heart Association'),
	logo('community-initiatives', 'st-jude', 'St. Jude Children’s Research Hospital'),
	logo('community-initiatives', 'second-harvest', 'Second Harvest of Silicon Valley'),
	logo('community-initiatives', 'vt-seva', 'VT Seva')
];
