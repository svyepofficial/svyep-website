<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import program from '$lib/data/young-innovators';

	import Lightbulb from 'phosphor-svelte/lib/Lightbulb';
	import UsersThree from 'phosphor-svelte/lib/UsersThree';
	import Compass from 'phosphor-svelte/lib/Compass';
	import PuzzlePiece from 'phosphor-svelte/lib/PuzzlePiece';
	import ChatsCircle from 'phosphor-svelte/lib/ChatsCircle';
	import Presentation from 'phosphor-svelte/lib/Presentation';
	import Handshake from 'phosphor-svelte/lib/Handshake';
	import RocketLaunch from 'phosphor-svelte/lib/RocketLaunch';
	import Gift from 'phosphor-svelte/lib/Gift';
	import Clock from 'phosphor-svelte/lib/Clock';
	import ChalkboardTeacher from 'phosphor-svelte/lib/ChalkboardTeacher';
	import Package from 'phosphor-svelte/lib/Package';
	import GraduationCap from 'phosphor-svelte/lib/GraduationCap';
	import FlowArrow from 'phosphor-svelte/lib/FlowArrow';
	import Target from 'phosphor-svelte/lib/Target';
	import Star from 'phosphor-svelte/lib/Star';
	import Toolbox from 'phosphor-svelte/lib/Toolbox';
	import HandHeart from 'phosphor-svelte/lib/HandHeart';
	import CheckCircle from 'phosphor-svelte/lib/CheckCircle';
	import CaretDown from 'phosphor-svelte/lib/CaretDown';
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';

	/* Icons live here rather than in the data module — they are presentation. */
	const skillIcons = [Lightbulb, UsersThree, Compass, PuzzlePiece, ChatsCircle];
	const approachIcons = [Presentation, Handshake, RocketLaunch];
	const offeringIcons = [Gift, Clock, ChalkboardTeacher, Package, GraduationCap, FlowArrow];
	const partnerIcons = [Lightbulb, Target, Star, Toolbox, HandHeart];

	/*
	 * Email fallback for the interest form. The rest of the site collects
	 * sign-ups through embedded Google Forms; until a form exists for this
	 * program, a prefilled email carries the same questions so nothing is lost.
	 */
	const requestSubject = 'SVYEP Young Innovators — Workshop Request';
	const requestBody = [
		'Hello SVYEP team,',
		'',
		'We would like to request a Young Innovators workshop.',
		'',
		...program.formFields.map((field) => `${field.label}:`),
		'',
		'Thank you!'
	].join('\n');
	const requestMailto = `mailto:${program.email}?subject=${encodeURIComponent(
		requestSubject
	)}&body=${encodeURIComponent(requestBody)}`;
</script>

<Seo
	title="Young Innovators"
	description="Small Ideas. Big Possibilities. SVYEP's Young Innovators Program brings free, 30-minute entrepreneurship and leadership workshops directly into grade 3–8 classrooms."
/>

<div class="relative flex flex-col items-center overflow-hidden px-6 pt-36 pb-24 sm:pt-44">
	<!-- ============================ 1. HERO ============================ -->
	<section class="flex w-full max-w-[1000px] flex-col items-center">
		<p class="mb-4 font-serif text-lg tracking-tighter text-indigo-400">Young Innovators Program</p>
		<h1 class="text-center text-5xl leading-[1.05] tracking-tighter sm:text-7xl">
			Small ideas.
			<span class="font-serif tracking-tighter text-indigo-500 italic">Big possibilities.</span>
		</h1>
		<h2
			class="mt-5 max-w-[800px] text-center font-serif text-lg tracking-tighter text-zinc-200 sm:text-2xl"
		>
			Empowering the next generation of innovators, leaders, and problem-solvers.
		</h2>

		<div
			class="mt-8 flex max-w-[780px] flex-col gap-4 text-center text-lg leading-relaxed font-light text-zinc-400"
		>
			<p>
				At SVYEP, we believe that young people have the potential to create meaningful change,
				regardless of their age.
			</p>
			<p>
				Our Young Innovators Program brings interactive entrepreneurship education directly into
				classrooms, helping students develop essential skills in teamwork, leadership, creativity,
				and problem-solving through engaging, hands-on experiences.
			</p>
			<p>
				Through fun educational challenges and collaborative activities, students learn to think
				creatively, work together, and turn everyday problems into innovative ideas.
			</p>
		</div>

		<p class="mt-8 text-zinc-300">{program.highlights.join(' · ')}</p>

		<div class="mt-10 flex flex-wrap items-center justify-center gap-3">
			<a href="#request" class="btn btn-primary btn-lg">Request a free workshop</a>
			<a href="#lessons" class="btn btn-secondary btn-lg">Explore our lessons</a>
		</div>
	</section>

	<!-- ====================== 2. ABOUT OUR PROGRAM ====================== -->
	<section class="mt-32 flex w-full max-w-[1100px] flex-col items-center">
		<h2 class="mb-6 max-w-[900px] text-center font-serif text-4xl tracking-tighter sm:text-6xl">
			Inspiring young minds through entrepreneurship
		</h2>
		<div
			class="mt-4 flex max-w-[860px] flex-col gap-4 text-center text-lg leading-relaxed font-light text-zinc-400"
		>
			<p>
				Entrepreneurship is about more than starting a business. It is about noticing opportunities,
				solving problems, thinking creatively, and taking initiative.
			</p>
			<p>
				The SVYEP Young Innovators Program introduces elementary and middle school students to these
				ideas in a way that is approachable, engaging, and relevant to their everyday lives.
			</p>
			<p>
				We believe students should have opportunities to explore their creativity, discover their
				strengths, and build confidence in their abilities.
			</p>
			<p>
				Through interactive lessons and collaborative challenges, we aim to inspire students to
				recognize that even small ideas can lead to meaningful improvements in their schools, homes,
				and communities.
			</p>
		</div>

		<div class="mt-12 grid w-full gap-6 md:grid-cols-2">
			<div class="card flex flex-col p-8">
				<h3 class="font-serif text-3xl tracking-tighter">Our mission</h3>
				<p class="mt-3 text-base leading-relaxed font-light text-zinc-400">
					To make entrepreneurship education accessible to younger students by providing free,
					interactive learning experiences that encourage creativity, collaboration, leadership, and
					real-world problem-solving.
				</p>
			</div>
			<div class="card flex flex-col p-8">
				<h3 class="font-serif text-3xl tracking-tighter">Our vision</h3>
				<p class="mt-3 text-base leading-relaxed font-light text-zinc-400">
					A future where young people feel empowered to think independently, collaborate with
					others, and use their ideas to make a positive difference.
				</p>
			</div>
		</div>

		<h3 class="mt-16 text-center font-serif text-3xl tracking-tighter sm:text-4xl">Our approach</h3>
		<div class="mt-8 grid w-full gap-6 md:grid-cols-3">
			{#each program.approach as item, index}
				{@const Icon = approachIcons[index]}
				<div class="card flex flex-col items-center gap-3 p-7 text-center">
					<Icon size={32} class="text-indigo-400" />
					<h4 class="text-lg leading-6 font-medium tracking-tighter">{item.title}</h4>
					<p class="text-sm leading-relaxed font-light text-zinc-400">{item.description}</p>
				</div>
			{/each}
		</div>

		<a href="#lessons" class="btn btn-primary btn-lg mt-10">Discover our curriculum</a>
	</section>

	<!-- ==================== 3. WHY ENTREPRENEURSHIP? ==================== -->
	<section class="mt-32 flex w-full max-w-[1200px] flex-col items-center">
		<h2 class="mb-6 text-center font-serif text-4xl tracking-tighter sm:text-6xl">
			Entrepreneurship is for everyone
		</h2>
		<div
			class="mt-4 flex max-w-[820px] flex-col gap-4 text-center text-lg leading-relaxed font-light text-zinc-400"
		>
			<p>You don't need to own a business to think like an entrepreneur.</p>
			<p>
				Entrepreneurial thinking helps students approach challenges with curiosity, confidence,
				creativity, and a willingness to explore new solutions.
			</p>
			<p class="text-zinc-300">Our program focuses on five foundational skills:</p>
		</div>

		<div class="mt-10 flex flex-wrap justify-center gap-6">
			{#each program.skills as skill, index}
				{@const Icon = skillIcons[index]}
				<div
					class="card flex w-full max-w-[320px] flex-col items-center gap-3 p-7 text-center sm:w-[320px]"
				>
					<Icon size={32} class="text-indigo-400" />
					<h3 class="font-serif text-2xl tracking-tighter">{skill.title}</h3>
					<p class="text-sm leading-relaxed font-light text-zinc-400">{skill.description}</p>
				</div>
			{/each}
		</div>

		<p
			class="mt-12 max-w-[760px] text-center font-serif text-xl leading-snug tracking-tighter text-zinc-200 sm:text-2xl"
		>
			Our goal is not to turn every child into a business owner. It is to help every child recognize
			the <span class="text-indigo-400 italic">value of their ideas</span>.
		</p>
	</section>

	<!-- ======================= 4. OUR CURRICULUM ======================= -->
	<section id="lessons" class="mt-32 flex w-full max-w-[1000px] scroll-mt-32 flex-col items-center">
		<h2 class="mb-6 text-center font-serif text-4xl tracking-tighter sm:text-6xl">
			Explore our lessons
		</h2>
		<div
			class="mt-4 flex max-w-[860px] flex-col gap-4 text-center text-lg leading-relaxed font-light text-zinc-400"
		>
			<p>
				The Young Innovators Program consists of three interactive, 30-minute workshops designed to
				build students' skills in collaboration, creativity, leadership, and communication.
			</p>
			<p>
				Each workshop combines a short interactive lesson, a hands-on activity, an educational game
				or showcase, and a brief reflection.
			</p>
			<p>
				Schools are welcome to begin with a single workshop and explore the additional lessons if
				interested.
			</p>
		</div>

		<div class="mt-12 flex w-full flex-col gap-6">
			{#each program.lessons as lesson, index}
				<article class="card flex flex-col overflow-hidden">
					<div class="flex flex-col px-6 py-7 sm:px-9">
						<p class="font-serif text-sm tracking-tighter text-indigo-400 sm:text-base">
							{lesson.number}
						</p>
						<h3 class="mt-1 text-3xl font-semibold tracking-tighter sm:text-4xl">
							{lesson.title}
						</h3>
						<p class="mt-2 text-sm text-zinc-300">
							<span class="text-zinc-400">Focus:</span>
							{lesson.focus}
						</p>
						<p
							class="mt-4 font-serif text-lg leading-snug tracking-tighter text-zinc-200 italic sm:text-xl"
						>
							{lesson.hook}
						</p>
						{#each lesson.summary as paragraph}
							<p class="mt-3 text-base leading-relaxed font-light text-zinc-400">{paragraph}</p>
						{/each}

						<p class="mt-4 flex items-center gap-2 text-sm text-zinc-400">
							<Clock size={16} />
							{lesson.duration}
						</p>
					</div>

					<details name="lesson" class="group border-t border-white/8">
						<summary
							class="flex cursor-pointer list-none items-center gap-2 px-6 py-4 text-sm font-medium text-zinc-300 transition-colors hover:text-zinc-100 sm:px-9 [&::-webkit-details-marker]:hidden"
						>
							Lesson details
							<CaretDown size={14} class="transition-transform group-open:rotate-180" />
						</summary>
						<div class="flex flex-col gap-7 px-6 pt-2 pb-8 sm:px-9">
							<div>
								<h4 class="font-serif text-xl tracking-tighter">What students will learn</h4>
								<ul class="mt-3 flex flex-col gap-2">
									{#each lesson.outcomes as outcome}
										<li class="flex items-start gap-2.5 text-sm text-zinc-400">
											<CheckCircle
												size={18}
												weight="fill"
												class="mt-0.5 shrink-0 text-indigo-400"
											/>
											<span>{outcome}</span>
										</li>
									{/each}
								</ul>
							</div>

							<div class="grid gap-4 md:grid-cols-3">
								{#each lesson.segments as segment}
									<div class="rounded-xl border border-white/8 bg-zinc-950/60 p-5">
										<p class="text-sm text-indigo-400">
											{segment.label}
										</p>
										{#if segment.name}
											<h5 class="mt-1.5 font-serif text-lg leading-6 tracking-tighter">
												{segment.name}
											</h5>
										{/if}
										<p class="mt-2 text-sm leading-relaxed font-light text-zinc-400">
											{segment.description}
										</p>
									</div>
								{/each}
							</div>

							<div class="rounded-xl border border-indigo-400/25 p-5">
								<p class="text-sm text-indigo-400">Student takeaway</p>
								<p class="mt-2 font-serif text-lg leading-snug tracking-tighter text-zinc-200">
									{lesson.takeaway}
								</p>
							</div>

							<div class="flex flex-col gap-2 text-sm text-zinc-400">
								<p><span class="text-zinc-400">Duration:</span> {lesson.duration}</p>
								<p><span class="text-zinc-400">Materials:</span> {lesson.materials}</p>
							</div>
						</div>
					</details>
				</article>
			{/each}
		</div>
	</section>

	<!-- ============== 5. THE YOUNG INNOVATORS CHALLENGE ================ -->
	<section class="mt-32 flex w-full max-w-[1100px] flex-col items-center">
		<h2 class="mb-6 text-center font-serif text-4xl tracking-tighter sm:text-6xl">
			From everyday problems to big ideas
		</h2>
		<div
			class="mt-4 flex max-w-[860px] flex-col gap-4 text-center text-lg leading-relaxed font-light text-zinc-400"
		>
			<p>
				A unique part of the SVYEP Young Innovators Program is our connected student innovation
				project.
			</p>
			<p>
				Throughout the three lessons, students work together to identify a problem, develop a
				creative solution, and improve their ideas through feedback.
			</p>
		</div>

		<div class="mt-12 grid w-full gap-6 md:grid-cols-3">
			{#each program.challengeSteps as item}
				<div class="card flex flex-col p-7">
					<p class="font-serif text-sm tracking-tighter text-indigo-400">{item.step}</p>
					<h3 class="mt-1 font-serif text-2xl tracking-tighter">{item.title}</h3>
					<p class="mt-3 text-sm leading-relaxed font-light text-zinc-400">{item.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- ====================== 6. OUR SCHOOL VISITS ====================== -->
	<section id="schools" class="mt-32 flex w-full max-w-[1200px] scroll-mt-32 flex-col items-center">
		<h2 class="mb-6 max-w-[950px] text-center font-serif text-4xl tracking-tighter sm:text-6xl">
			Bringing learning directly to your classroom
		</h2>
		<div
			class="mt-4 flex max-w-[860px] flex-col gap-4 text-center text-lg leading-relaxed font-light text-zinc-400"
		>
			<p>We believe meaningful educational experiences should be accessible to students.</p>
			<p>
				Through our school outreach initiative, SVYEP brings free, hands-on entrepreneurship and
				leadership workshops directly to elementary and middle school classrooms.
			</p>
			<p>
				Our lessons are designed to be engaging, age-appropriate, and easy to incorporate into a
				school's existing schedule.
			</p>
		</div>

		<h3 class="mt-16 text-center font-serif text-3xl tracking-tighter sm:text-4xl">
			What we offer
		</h3>
		<div class="mt-8 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each program.offerings as offering, index}
				{@const Icon = offeringIcons[index]}
				<div class="card flex flex-col items-center gap-3 p-7 text-center">
					<Icon size={32} class="text-indigo-400" />
					<h4 class="text-lg leading-6 font-medium tracking-tighter">{offering.title}</h4>
					<p class="text-sm leading-relaxed font-light text-zinc-400">{offering.description}</p>
				</div>
			{/each}
		</div>

		<h3 class="mt-16 text-center font-serif text-3xl tracking-tighter sm:text-4xl">
			How school visits work
		</h3>
		<div class="mt-8 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each program.visitSteps as step, index}
				<div class="card flex flex-col p-7">
					<span class="font-serif text-3xl tracking-tighter text-indigo-400 tabular-nums"
						>{index + 1}</span
					>
					<h4 class="mt-4 font-serif text-xl leading-6 tracking-tighter">{step.title}</h4>
					<p class="mt-2 text-sm leading-relaxed font-light text-zinc-400">{step.description}</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 grid w-full max-w-[1000px] gap-6 md:grid-cols-2">
			<div class="card flex flex-col p-8">
				<h4 class="font-serif text-2xl tracking-tighter">What schools provide</h4>
				<ul class="mt-4 flex flex-col gap-2.5">
					{#each program.schoolsProvide as item}
						<li class="flex items-start gap-2.5 text-sm text-zinc-400">
							<CheckCircle size={18} weight="fill" class="mt-0.5 shrink-0 text-zinc-500" />
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div class="card flex flex-col p-8">
				<h4 class="font-serif text-2xl tracking-tighter">What SVYEP provides</h4>
				<ul class="mt-4 flex flex-col gap-2.5">
					{#each program.svyepProvides as item}
						<li class="flex items-start gap-2.5 text-sm text-zinc-400">
							<CheckCircle size={18} weight="fill" class="mt-0.5 shrink-0 text-indigo-400" />
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<p class="mt-8 max-w-[760px] text-center text-sm text-zinc-400">
			All visits are subject to school approval and applicable supervision, visitor, and safety
			requirements.
		</p>

		<div class="mt-10 flex flex-wrap items-center justify-center gap-3">
			<a href="#request" class="btn btn-primary btn-lg">Request a free workshop</a>
			<a href="mailto:{program.email}" class="btn btn-secondary btn-lg">Contact our team</a>
		</div>
	</section>

	<!-- =================== 7. WHY PARTNER WITH SVYEP =================== -->
	<section class="mt-32 flex w-full max-w-[1200px] flex-col items-center">
		<h2 class="mb-6 text-center font-serif text-4xl tracking-tighter sm:text-6xl">
			Meaningful learning, at no cost
		</h2>
		<p class="mt-4 max-w-[820px] text-center text-lg leading-relaxed font-light text-zinc-400">
			Our Young Innovators Program aims to make entrepreneurship education more accessible while
			helping students develop practical skills they can apply throughout their lives.
		</p>

		<div class="mt-10 flex flex-wrap justify-center gap-6">
			{#each program.partnerReasons as reason, index}
				{@const Icon = partnerIcons[index]}
				<div
					class="card flex w-full max-w-[340px] flex-col items-center gap-3 p-7 text-center sm:w-[340px]"
				>
					<Icon size={32} class="text-indigo-400" />
					<h3 class="text-lg leading-6 font-medium tracking-tighter">{reason.title}</h3>
					<p class="text-sm leading-relaxed font-light text-zinc-400">{reason.description}</p>
				</div>
			{/each}
		</div>

		<a href="#request" class="btn btn-primary btn-lg mt-10">Bring Young Innovators to your school</a
		>
	</section>

	<!-- ========================= 8. FAQ ========================= -->
	<section id="faq" class="mt-32 flex w-full max-w-[900px] scroll-mt-32 flex-col items-center">
		<h2 class="mb-10 text-center font-serif text-4xl tracking-tighter sm:text-6xl">
			Frequently asked questions
		</h2>

		<div class="flex w-full flex-col gap-3">
			{#each program.faqs as faq, index}
				<details name="faq" class="group card">
					<summary
						class="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-lg font-medium [&::-webkit-details-marker]:hidden"
					>
						{faq.question}
						<CaretDown
							size={18}
							class="shrink-0 text-indigo-400 transition-transform group-open:rotate-180"
						/>
					</summary>
					<p class="border-t border-white/8 px-6 py-5 leading-relaxed font-light text-zinc-400">
						{faq.answer}
					</p>
				</details>
			{/each}
		</div>
	</section>

	<!-- ================== 9. REQUEST A FREE WORKSHOP ================== -->
	<section id="request" class="mt-32 flex w-full max-w-[900px] scroll-mt-32 flex-col items-center">
		<h2 class="mb-6 text-center font-serif text-4xl tracking-tighter sm:text-6xl">
			Bring Young Innovators to your school
		</h2>
		<div
			class="mt-4 flex max-w-[800px] flex-col gap-4 text-center text-lg leading-relaxed font-light text-zinc-400"
		>
			<p>
				Interested in introducing your students to teamwork, entrepreneurship, and creative
				problem-solving? We would love to explore bringing the Young Innovators Program to your
				classroom.
			</p>
			<p>
				Our introductory workshop, <span class="text-zinc-200">The Power of Teamwork</span>, offers
				a fun, hands-on learning experience focused on communication, collaboration, and leadership.
			</p>
		</div>

		<p class="mt-8 text-zinc-300">30 minutes · Completely free · All materials provided</p>

		<!--
			The interest form. Other sign-ups on the site are embedded Google Forms
			(see /join and /partner). To swap this email fallback for a real form,
			replace the block below with:

			<iframe
				class="mt-10 w-full opacity-90 sm:w-[840px]"
				title="SVYEP Young Innovators Workshop Request"
				src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
				width="840"
				height="2000"
				frameborder="0"
				marginheight="0"
				marginwidth="0">Loading...</iframe
			>
		-->
		<div class="card mt-10 flex w-full flex-col p-8 sm:p-10">
			<h3 class="font-serif text-2xl tracking-tighter sm:text-3xl">
				Request a free SVYEP workshop
			</h3>
			<p class="mt-3 text-sm leading-relaxed font-light text-zinc-400">
				Email our team and we will follow up to discuss scheduling. So we can respond quickly,
				please include:
			</p>
			<ul class="mt-5 grid gap-2.5 sm:grid-cols-2">
				{#each program.formFields as field}
					<li class="flex items-start gap-2.5 text-sm text-zinc-400">
						<CheckCircle size={18} weight="fill" class="mt-0.5 shrink-0 text-indigo-400" />
						<span>
							{field.label}
							{#if !field.required}
								<span class="text-zinc-400">(optional)</span>
							{/if}
						</span>
					</li>
				{/each}
			</ul>
			<div class="mt-8 flex flex-wrap items-center gap-3">
				<a href={requestMailto} class="btn btn-primary btn-lg flex items-center gap-2">
					<EnvelopeSimple size={20} />
					Send workshop request
				</a>
				<span class="text-sm text-zinc-400">
					or email <a href="mailto:{program.email}" class="link">{program.email}</a>
				</span>
			</div>
			<p class="mt-6 text-sm leading-relaxed font-light text-zinc-400">
				Our team will review your request and reach out to discuss potential workshop opportunities
				and scheduling. We look forward to the possibility of working with your school.
			</p>
		</div>
	</section>

	<!-- ======================== 10. ABOUT SVYEP ======================== -->
	<section class="mt-32 flex w-full max-w-[900px] flex-col items-center">
		<h2 class="mb-6 text-center font-serif text-4xl tracking-tighter sm:text-6xl">About SVYEP</h2>
		<div
			class="mt-4 flex flex-col gap-4 text-center text-lg leading-relaxed font-light text-zinc-400"
		>
			<p>
				The Silicon Valley Youth Entrepreneurship Program (SVYEP) is a student-led organization
				dedicated to empowering young people through entrepreneurship, professional opportunities,
				mentorship, and education.
			</p>
			<p>
				Through our programs and initiatives, we aim to help students develop leadership skills,
				pursue their interests, connect with new opportunities, and use entrepreneurial thinking to
				create positive change.
			</p>
			<p>
				Our Young Innovators Program extends this mission to younger students by introducing
				foundational skills in teamwork, creativity, communication, and problem-solving.
			</p>
			<p>
				We believe that inspiring entrepreneurship at an early age can help students develop
				confidence, curiosity, and a willingness to take initiative.
			</p>
		</div>
		<a href="/about" class="btn btn-secondary btn-lg mt-10"> Learn more about SVYEP </a>
	</section>

	<!-- ===================== 11. FINAL CALL TO ACTION ===================== -->
	<section class="mt-32 flex w-full max-w-[900px] flex-col items-center">
		<h2 class="text-center text-4xl leading-tight tracking-tighter sm:text-6xl">
			Every big idea
			<span class="font-serif tracking-tighter text-indigo-500 italic">starts somewhere</span>
		</h2>
		<p class="mt-6 max-w-[760px] text-center text-lg leading-relaxed font-light text-zinc-400">
			Help us inspire the next generation of innovators, leaders, and problem-solvers. Partner with
			SVYEP to bring free, interactive entrepreneurship and leadership education to your students.
		</p>
		<div class="mt-10 flex flex-wrap items-center justify-center gap-3">
			<a href="#request" class="btn btn-primary btn-lg">Request a free workshop</a>
			<a href="mailto:{program.email}" class="btn btn-secondary btn-lg">Email our team</a>
		</div>
	</section>
</div>
