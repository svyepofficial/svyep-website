import HandCoins from 'phosphor-svelte/lib/HandCoins';
import Star from 'phosphor-svelte/lib/Star';
import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';

export const raised = 315000;

// Shown on the home page and on /join.
export const benefits = [
	{
		icon: HandCoins,
		title: 'AI internship opportunities',
		description: 'Real, paid work at AI and tech startups across Silicon Valley.'
	},
	{
		icon: Star,
		title: 'Interviews with industry leaders',
		description: 'Exclusive conversations with founders, investors, and changemakers.'
	},
	{
		icon: EnvelopeSimple,
		title: 'Invites to SVYEP events',
		description: 'Speaker nights, workshops, and the biggest pitch events in the Valley.'
	}
];

export const stats = [
	{
		figure: '1,900+',
		label: 'members',
		lead: 'Our members are entrepreneurs, professionals, organizations, and most importantly, students, who are committed to growing through connection, collaboration, and shared opportunities.',
		body: 'By joining, they gain access to exclusive events, valuable resources, and a community that supports their business journey.',
		image: { src: '/images/home/stats/Members.webp', width: 1200, height: 800 }
	},
	{
		figure: `$${raised.toLocaleString('en-US')}+`,
		label: 'raised',
		lead: `We’ve raised $${raised.toLocaleString('en-US')} through investors and partnerships, demonstrating the strength and trust of our growing network.`,
		body: 'This level of backing and funding reflects the confidence our partners have in our mission and the value we deliver. It shows that our community believes in what we’re building and the impact we have on bright minds of the future.',
		image: { src: '/images/home/stats/Money Raised.webp', width: 1331, height: 887 }
	},
	{
		figure: '230,000+',
		label: 'students & attendees reached',
		lead: 'This is the total reach of the events and pitch competitions we’ve hosted and co-hosted — the students, professionals, and audiences we’ve connected to opportunity.',
		body: 'Most notably this year, SVYEP co-hosted the largest pitch event in Silicon Valley, drawing thousands of attendees, 350+ VCs, and 100+ investors.',
		image: { src: '/images/home/stats/ImpactedStudents.webp', width: 1024, height: 683 }
	},
	{
		figure: '25+',
		label: 'internships',
		lead: 'We connect students with impactful internship opportunities at leading AI, tech, and innovative companies.',
		body: 'Through hands-on experience, mentorship, and real-world projects, students gain valuable skills and insights that prepare them for careers in various industries.',
		image: { src: '/images/home/stats/Internships.webp', width: 1024, height: 683 }
	},
	{
		figure: '60+',
		label: 'businesses worked with',
		lead: 'We are committed to partnering with various businesses and companies who have assisted in our mission of helping the younger generation.',
		body: 'From being invited to dinner by companies such as Google Fiber to partnering and hosting monumental events, SVYEP is thankful to all organizations we have previously worked with and continue to grow alongside.',
		image: { src: '/images/home/stats/BusinessesWorkedWith.webp', width: 1147, height: 765 }
	}
];
