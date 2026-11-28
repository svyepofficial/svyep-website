type Event = {
	title: string;
	/** Where, or who it was run with. */
	subtitle?: string;
	description: string;
	image: string;
	/** Chronicle article slug for the "Read more" link. */
	article: string;
	/** Youth Business Venture Competition editions also appear on /ybvc. */
	ybvc?: boolean;
	photosUrl?: string;
};

// Newest first.
const events: Event[] = [
	{
		title: "Bay Area Founders Club's 6th Top AI Researchers Roundtable and BBQ",
		subtitle: 'Los Altos Hills',
		description:
			'SVYEP volunteers checked in guests and speakers, directed parking, and helped with setup and cleanup at a roundtable on AI infrastructure and development.',
		image: '/images/events/ai-researchers-roundtable-6-audience.webp',
		article: '029'
	},
	{
		title: "Bay Area Founders Club's 5th Top AI Researchers Roundtable and BBQ",
		subtitle: 'Atherton',
		description:
			"SVYEP volunteers supported Bay Area Founders Club's fifth Top AI Researchers Roundtable and BBQ through event preparation and guest check-in.",
		image: '/images/events/ai-researchers-roundtable-5-panel.webp',
		article: '028'
	},
	{
		title: "Bay Area Founders Club's 4th Top AI Researchers Roundtable and BBQ",
		subtitle: 'Los Altos Hills',
		description:
			"SVYEP volunteers supported Bay Area Founders Club's fourth Top AI Researchers Roundtable and BBQ through guest check-in, venue setup, and event operations.",
		image: '/images/events/ai-researchers-roundtable-2026.webp',
		article: '027'
	},
	{
		title: 'Youth Business Venture Competition 2026',
		subtitle: 'Stanford University',
		description:
			'Fifteen student startup teams gathered at Stanford to pitch ventures, receive professional feedback, and explore the future of business innovation.',
		image: '/images/articles/ybvc-2026/ArticleMainPhoto.webp',
		article: '026',
		ybvc: true
	},
	{
		title: 'Youth Business Venture Challenge 2025',
		subtitle: 'In partnership with Berkeley Summit House',
		description:
			'A global pitch competition for high school students. Participants submitted proposals for a chance to win over $10,000 in prize money and pitch live at Stanford.',
		image: '/images/articles/ybvc/2025.webp',
		article: '024',
		ybvc: true,
		photosUrl: 'https://lightroom.adobe.com/shares/b68ae08650da484d8485673e59c454e3'
	},
	{
		title: 'The Global AI Pitch Summit: Silicon Valley 2025',
		subtitle:
			"Silicon Valley's largest pitch event, in partnership with Bay Area Founders Club and Stanford Entrepreneurs",
		description:
			'The pitch summit was attended by over 300+ startups, 100+ venture capitalists and investors, and had over 1,000 participants. With sponsors including Amazon Web Services, our event saw representatives from companies such as BlackRock, a16z, and SoftBank.',
		image: '/images/events/E2.webp',
		article: '020'
	},
	{
		title: 'The Amino Entrepreneur Mindset Summit',
		subtitle: 'In partnership with Amino Capital',
		description:
			'The mindset summit gave selected high school students exclusive insights into how a VC and its partners operate. Students networked with partners at Amino Capital who gave insights into how they invest in startups and unicorns.',
		image: '/images/events/E3.webp',
		article: '011'
	},
	{
		title: 'GenAI in the Valley 2024',
		description:
			'Representatives of SVYEP were invited to be a part of the conference, working on logistics in partnership with Valley 101. With over 700 attendees and speakers from companies including OpenAI and Google DeepMind, attendees were exposed to discussions about AI and where technology is headed.',
		image: '/images/events/E4.webp',
		article: '013'
	},
	{
		title: 'Congressional Networking Event',
		description:
			'Working with the Bay Area Founders Club, SVYEP hosted congressional candidate Rishi Kumar for a speaker event about AI. With over 50 entrepreneurs in attendance, the event discussed the transformative impact of AI on Silicon Valley’s future.',
		image: '/images/events/E5.webp',
		article: '001'
	}
];

export default events;
