/*
 * Content for the Young Innovators Program page (/young-innovators).
 *
 * Kept in a data module — rather than inline in the route — so the copy can be
 * edited without touching layout, matching how about/events/impact/home work.
 */

export type LessonSegment = {
	/** e.g. "Hands-On Activity" — the kind of segment. */
	label: string;
	/** Optional name of the specific activity, e.g. "The Teamwork Tower". */
	name?: string;
	description: string;
};

export type Lesson = {
	/** "Lesson 1" etc. — shown as an eyebrow above the title. */
	number: string;
	title: string;
	focus: string;
	/** One-line hook, shown in italics. */
	hook: string;
	/** Intro paragraphs shown on the collapsed card. */
	summary: string[];
	/** "What Students Will Learn" bullets. */
	outcomes: string[];
	segments: LessonSegment[];
	takeaway: string;
	duration: string;
	materials: string;
};

const program = {
	tagline: 'Small Ideas. Big Possibilities.',
	email: 'svyep.official@gmail.com',

	/** Shown as pills under the hero. */
	highlights: ['Completely Free', 'Grades 3–8', '30-Minute Workshops'],

	approach: [
		{
			title: 'Learn Through Participation',
			description:
				'Our workshops combine short presentations, live demonstrations, and interactive questions to make learning engaging and understandable.'
		},
		{
			title: 'Create Through Collaboration',
			description:
				'Students work together on hands-on challenges that encourage communication, teamwork, and creativity.'
		},
		{
			title: 'Think Beyond the Classroom',
			description:
				'Our activities connect entrepreneurship to relatable situations, helping students understand how their ideas and skills can be useful in everyday life.'
		}
	],

	skills: [
		{
			title: 'Creativity',
			description:
				'Students learn to explore possibilities, brainstorm original ideas, and look at everyday problems from different perspectives.'
		},
		{
			title: 'Teamwork',
			description:
				'Students learn how to work with others, share responsibilities, and combine their strengths to achieve common goals.'
		},
		{
			title: 'Leadership',
			description:
				'Students explore how taking initiative, listening to others, and supporting teammates can make a positive difference.'
		},
		{
			title: 'Problem-Solving',
			description:
				'Students identify challenges, brainstorm possible solutions, and learn to improve their ideas.'
		},
		{
			title: 'Communication',
			description:
				'Students gain experience expressing their thoughts, explaining solutions, and listening to constructive feedback.'
		}
	],

	lessons: [
		{
			number: 'Lesson 1',
			title: 'The Power of Teamwork',
			focus: 'Communication, Collaboration, and Leadership',
			hook: 'Great ideas become stronger when people work together.',
			summary: [
				'In this interactive workshop, students explore how teamwork, listening, and cooperation help groups achieve shared goals.',
				"Through a hands-on building challenge and a fun communication game, students discover how different skills and perspectives can contribute to a team's success."
			],
			outcomes: [
				'Why teamwork is important in everyday life and entrepreneurship.',
				'How communication and active listening improve collaboration.',
				'Why different team members bring valuable strengths.',
				'How to solve disagreements and work toward a common goal.'
			],
			segments: [
				{
					label: 'Interactive Lesson',
					description:
						'An introduction to teamwork, leadership, and effective communication, including a live visual demonstration.'
				},
				{
					label: 'Hands-On Activity',
					name: 'The Teamwork Tower',
					description:
						'Students work in small groups to construct a freestanding tower using paper and tape. Teams practice planning, collaboration, and creative problem-solving.'
				},
				{
					label: 'Educational Game',
					name: 'Mystery Drawing',
					description:
						'One team member describes a hidden picture while teammates try to recreate it, reinforcing communication and active listening.'
				}
			],
			takeaway:
				'Successful teamwork requires cooperation, communication, and respect for different ideas.',
			duration: '30 Minutes',
			materials: 'Paper, tape, pencils, and printed drawing cards.'
		},
		{
			number: 'Lesson 2',
			title: 'Think Like an Entrepreneur',
			focus: 'Creativity, Entrepreneurship, and Problem-Solving',
			hook: 'Every great idea starts with a question: What could we make better?',
			summary: [
				'This lesson introduces students to the mindset of an entrepreneur by encouraging them to identify everyday problems and imagine creative solutions.',
				'Working in teams, students explore challenges at school, at home, or in their communities and develop original ideas to address them.'
			],
			outcomes: [
				'What an entrepreneur does.',
				'How everyday challenges can inspire new ideas.',
				'How to identify problems and consider who they affect.',
				'How brainstorming can lead to creative solutions.',
				'How to explain the purpose of an idea.'
			],
			segments: [
				{
					label: 'Interactive Lesson',
					description:
						'Students explore entrepreneurship through relatable examples and a live problem-solving demonstration.'
				},
				{
					label: 'Hands-On Activity',
					name: 'The Young Innovators Challenge',
					description:
						'Teams identify a real-world problem, brainstorm possible solutions, and design an original idea.'
				},
				{
					label: 'Educational Game',
					name: 'Guess the Problem!',
					description:
						'Students act out familiar everyday frustrations while classmates identify the problem and suggest possible solutions.'
				}
			],
			takeaway:
				'Young people can make a difference by noticing problems and thinking creatively about how to solve them.',
			duration: '30 Minutes',
			materials: 'Worksheets, paper, pencils, markers, and problem scenario cards.'
		},
		{
			number: 'Lesson 3',
			title: 'Ideas Into Action',
			focus: 'Innovation, Communication, and Constructive Feedback',
			hook: 'An idea becomes stronger when we listen, learn, and improve.',
			summary: [
				'In the final lesson, students explore how entrepreneurs refine their ideas using feedback and communicate their solutions.',
				'Building on their previous work, teams strengthen their designs and practice presenting them to others.'
			],
			outcomes: [
				'Why feedback is important when developing ideas.',
				'How to offer and receive constructive suggestions.',
				'How to improve a solution after considering other perspectives.',
				'How to explain an idea clearly and confidently.',
				'Why innovation is an ongoing process.'
			],
			segments: [
				{
					label: 'Interactive Lesson',
					description:
						'Students discover the importance of feedback and communication through a live product-pitch demonstration.'
				},
				{
					label: 'Hands-On Activity',
					name: 'The Innovation Workshop',
					description:
						'Teams review their solutions, exchange feedback, and improve their original designs.'
				},
				{
					label: 'Interactive Showcase',
					name: 'Young Innovators Showcase',
					description:
						'Students present their improved ideas and explain how their solutions could help others.'
				}
			],
			takeaway:
				'Great ideas develop through creativity, communication, feedback, and continuous improvement.',
			duration: '30 Minutes',
			materials: 'Innovation worksheets, paper, pencils, markers, and peer feedback cards.'
		}
	] satisfies Lesson[],

	challengeSteps: [
		{
			step: 'Step 1',
			title: 'Collaborate',
			description:
				'During The Power of Teamwork, students develop the communication and cooperation skills needed to work effectively in groups.'
		},
		{
			step: 'Step 2',
			title: 'Innovate',
			description:
				'During Think Like an Entrepreneur, students identify a challenge at school, home, or in their community and design a possible solution.'
		},
		{
			step: 'Step 3',
			title: 'Improve and Share',
			description:
				'During Ideas Into Action, students refine their solutions using peer feedback and present their ideas during the Young Innovators Showcase.'
		}
	],

	offerings: [
		{
			title: 'Free Classroom Workshops',
			description:
				'All Young Innovators Program lessons are offered at no charge to participating schools and students.'
		},
		{
			title: '30-Minute Sessions',
			description:
				'Our short, focused workshops are designed to fit into existing classroom and enrichment schedules.'
		},
		{
			title: 'Interactive Instruction',
			description:
				'Students participate in visual demonstrations, hands-on challenges, classroom games, and discussions.'
		},
		{
			title: 'Materials Provided',
			description: 'SVYEP prepares and supplies the materials needed for the workshops.'
		},
		{
			title: 'Grade-Appropriate Learning',
			description:
				'Activities are adapted to meet the needs of elementary and middle school students.'
		},
		{
			title: 'Flexible Participation',
			description:
				'Schools can begin with one workshop and request additional lessons if interested.'
		}
	],

	visitSteps: [
		{
			title: 'Request a Workshop',
			description: 'A teacher or school representative contacts SVYEP through our inquiry form.'
		},
		{
			title: 'Coordinate the Visit',
			description:
				'Our team discusses the grade level, number of students, preferred schedule, classroom setup, and school requirements.'
		},
		{
			title: 'Enjoy the Workshop',
			description:
				'SVYEP facilitators visit the classroom and lead the interactive lesson alongside school staff.'
		},
		{
			title: 'Explore Additional Lessons',
			description:
				'Schools interested in continuing may request the remaining Young Innovators workshops.'
		}
	],

	schoolsProvide: [
		'Classroom space.',
		'A supervising teacher or designated school staff member.',
		'Access to a screen or projector when available.',
		'Coordination regarding visitor approval and school policies.'
	],

	svyepProvides: [
		'Prepared lesson presentations.',
		'Workshop facilitators.',
		'Hands-on activity materials.',
		'Student worksheets and educational games.',
		'Reflection and feedback materials.'
	],

	partnerReasons: [
		{
			title: 'Engaging Educational Experiences',
			description:
				'Our lessons emphasize active participation and collaborative learning rather than lengthy lectures.'
		},
		{
			title: 'Skills Beyond the Classroom',
			description:
				'Students practice teamwork, leadership, communication, and creative thinking through familiar situations and hands-on experiences.'
		},
		{
			title: 'Positive Youth Role Models',
			description:
				'As a student-led organization, SVYEP hopes to inspire younger students by showing them that young people can take initiative, develop ideas, and make a positive difference.'
		},
		{
			title: 'A Simple Experience for Schools',
			description:
				'Our team provides the lesson plans and supplies, making it easier for teachers to host an engaging enrichment workshop.'
		},
		{
			title: 'Completely Free',
			description:
				'SVYEP does not charge schools or students for its Young Innovators workshops. Our goal is to give back to the community by expanding access to educational opportunities.'
		}
	],

	faqs: [
		{
			question: 'Is the Young Innovators Program free?',
			answer:
				'Yes. Our workshops are offered completely free of charge to schools and students. SVYEP provides the required activity materials.'
		},
		{
			question: 'What grade levels is the program designed for?',
			answer:
				'Our program is designed for students in grades 3–8. We adapt our examples, instructions, and activities for different age groups.'
		},
		{
			question: 'How long does each lesson last?',
			answer:
				'Each lesson lasts approximately 30 minutes, including the interactive presentation, hands-on challenge, game or showcase, and reflection.'
		},
		{
			question: 'Does our school need to host all three lessons?',
			answer:
				'No. Schools are welcome to begin with our introductory workshop, The Power of Teamwork. If interested, they can arrange additional visits for the remaining lessons.'
		},
		{
			question: 'Do students need any entrepreneurship experience?',
			answer:
				'Not at all. Our lessons are designed for beginners and introduce entrepreneurial thinking through simple, relatable examples.'
		},
		{
			question: 'Does the school need to provide materials?',
			answer:
				'SVYEP provides the necessary activity materials. We may request access to classroom desks and a presentation screen or projector.'
		},
		{
			question: 'Do teachers need to prepare anything?',
			answer:
				'No special lesson preparation is required. We coordinate classroom arrangements and school requirements in advance. A school staff member must remain present during the workshop.'
		},
		{
			question: 'Are the activities safe for younger students?',
			answer:
				'Our workshops focus on supervised classroom activities with minimal movement. We do not use running, chasing, or physical-contact games. Activities and materials will be reviewed with the host school before the visit.'
		},
		{
			question: 'What will students learn?',
			answer:
				'Students will practice teamwork, communication, creativity, leadership, and problem-solving. Students completing all three lessons also develop and present a simple innovation project.'
		},
		{
			question: 'Can our school request a customized lesson?',
			answer:
				"We are open to discussing age-appropriate adjustments to lesson examples, activities, and instruction with participating educators, subject to our team's capacity."
		},
		{
			question: 'How can we schedule a workshop?',
			answer:
				'Complete our school interest form or contact SVYEP directly at svyep.official@gmail.com.'
		}
	],

	/*
	 * The fields the interest form collects. Shown on the page so a teacher can
	 * see what will be asked before they start, and used to prefill the email
	 * fallback while no Google Form is linked.
	 */
	formFields: [
		{ label: 'Your Name', required: true },
		{ label: 'School or Organization Name', required: true },
		{ label: 'Your Role — Teacher, Principal, Coordinator, or Other', required: true },
		{ label: 'School Email Address', required: true },
		{ label: 'School City', required: true },
		{ label: 'Grade Level(s)', required: true },
		{ label: 'Approximate Number of Students', required: true },
		{
			label: 'Workshop Interest — The Power of Teamwork / Full Three-Lesson Series / Not Sure Yet',
			required: true
		},
		{ label: 'Preferred Date or General Timeframe', required: false },
		{ label: 'Additional Questions or Classroom Needs', required: false }
	]
};

export default program;
