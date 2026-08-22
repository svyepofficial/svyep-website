/*
- 'video' field is optional.
- Only Google Drive links are accepted.
- You must replace the '/share' in the link with '/preview'
*/

const events = {
	featured_events: [
		{
			title: 'The Global AI Pitch Summit: Silicon Valley 2025',
			subtitle:
				"(Silicon Valley's largest pitch event, in partnership with Bay Area Founders Club and Stanford Entrepreneurs)",
			description:
				'The pitch summit was attended by over 300+ startups, 100+ venture capitalists and investors, and had over 1,000 participants. With sponsors including Amazon Web Services, our event saw representatives from companies such as BlackRock, a16z, and SoftBank.',
			thumbnail: 'images/events/E2.webp',
			video: '',
			article: '020'
		},
		{
			title: 'The Amino Entrepreneur Mindset Summit',
			subtitle: '(in partnership with Amino Capital)',
			description:
				'The mindset summit gave selected high school students exclusive insights into how a VC and its partners operate. Students networked with partners at Amino Capital who gave insights into how they invest in startups and unicorns.',
			thumbnail: 'images/events/E3.webp',
			video: '',
			article: '011'
		},
		{
			title: 'GenAI in the Valley 2024',
			subtitle: '',
			description:
				'Representatives of SVYEP were invited to be a part of the conference, working on logistics in partnership with Valley 101. With over 700 attendees and speakers from companies including OpenAI and Google DeepMind, attendees were exposed to discussions about AI and where technology is headed.',
			thumbnail: 'images/events/E4.webp',
			article: '013'
		},
		{
			title: 'Congressional Networking Event',
			subtitle: '',
			description:
				'Working with the Bay Area Founders Club, SVYEP hosted congressional candidate Rishi Kumar for a speaker event about AI. With over 50 entrepreneurs in attendance, the event discussed the transformative impact of AI on Silicon Valley’s future.',
			thumbnail: 'images/events/E5.webp',
			article: '001'
		}
	],
	past_events: []
};

export default events;
