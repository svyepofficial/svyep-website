export type Location = {
	location: string;
	lat: string;
	lng: string;
	/** Kept explicitly because some locations (e.g. Washington, D.C.) have no named schools. */
	number_of_schools: number;
	schools?: string[];
};

const impact: { locations: Location[] } = {
	locations: [
		{
			location: 'California',
			lat: '36.44820697000031',
			lng: '-119.42799489020969',
			number_of_schools: 60,
			schools: [
				'California Crosspoint Academy — Hayward',
				'Moreau Catholic High School — Hayward',
				'Castro Valley High School — Castro Valley',
				'Quarry Lane School — Dublin',
				'Emerald High School — Dublin',
				'Dublin High School — Dublin',
				'Mission San Jose High School — Fremont',
				'Irvington High School — Fremont',
				'John F. Kennedy High School — Fremont',
				'BASIS Independent Fremont — Fremont',
				'Dougherty Valley High School — San Ramon',
				'San Ramon Valley High School — San Ramon',
				'Palos Verdes High School — Palos Verdes Estates',
				'Burbank High School — Burbank',
				'Irvine High School — Irvine',
				'Crystal Springs Uplands School — Hillsborough',
				'Nueva School — Hillsborough / San Mateo',
				'Carlmont High School — Belmont',
				'BASIS Independent Silicon Valley — San Jose',
				'Valley Christian High School — San Jose',
				'Bellarmine College Preparatory — San Jose',
				'The Harker School — San Jose',
				'Lynbrook High School — San Jose',
				'Leigh High School — San Jose',
				'Piedmont Hills High School — San Jose',
				'Santa Teresa High School — San Jose',
				'Summit Tahoma — San Jose',
				'Stratford Preparatory — San Jose',
				'Archbishop Mitty High School — San Jose',
				'Evergreen Valley High School — San Jose',
				'Branham High School — San Jose',
				'Saint Francis High School — Mountain View',
				'Khan Lab School — Mountain View',
				'Los Altos High School — Los Altos',
				'Cupertino High School — Cupertino',
				'Homestead High School — Cupertino',
				'Faria Elementary School — Cupertino',
				'De Anza College — Cupertino',
				'Milpitas High School — Milpitas',
				'The King’s Academy — Sunnyvale',
				'Fremont High School — Sunnyvale',
				'Washington Open Elementary — Santa Clara',
				'Wilcox High School — Santa Clara',
				'Homestead High School (Santa Clara campus) — Santa Clara',
				'Live Oak Academy — Santa Clara',
				'Los Gatos High School — Los Gatos',
				'Saratoga High School — Saratoga',
				'Castilleja School — Palo Alto',
				'Palo Alto High School — Palo Alto',
				'University High School — San Francisco',
				'American High School, Fremont',
				'Aragon High School, San Mateo',
				'California High School, San Ramon',
				'Foothill High School, Pleasanton',
				'Heritage High School, Brentwood',
				'Monta Vista High School, Cupertino',
				'Mountain House High School, Mountain House',
				'Santa Clara High School, Santa Clara',
				'Silver Creek High School, San Jose',
				'Washington High School, Fremont'
			]
		},
		{
			location: 'Arizona',
			lat: '34.34411290955422',
			lng: '-111.73033161250532',
			number_of_schools: 1,
			schools: ['ASU Preparatory Academy Digital, Tempe']
		},
		{
			location: 'Utah',
			lat: '39.1297698883113',
			lng: '-111.50605946884039',
			number_of_schools: 10,
			schools: [
				'Skyline High School — Salt Lake City',
				'West High School — Salt Lake City',
				'Hillcrest High School — Midvale',
				'Juab High School — Nephi',
				'East High School — Salt Lake City',
				'Corner Canyon High School — Draper',
				'Brighton High School — Cottonwood Heights',
				'Timpview High School — Provo',
				'American Fork High School — American Fork',
				'Park City High School — Park City'
			]
		},
		{
			location: 'Washington',
			lat: '47.32467740935813',
			lng: '-119.88484944022312',
			number_of_schools: 6,
			schools: [
				'Lakeside School — Seattle',
				'Bainbridge High School — Bainbridge Island',
				'Bellevue High School — Bellevue',
				'Garfield High School — Seattle',
				'Newport High School — Bellevue',
				'Mercer Island High School — Mercer Island'
			]
		},
		{
			location: 'Oregon',
			lat: '43.75126496936682',
			lng: '-120.5858894942988',
			number_of_schools: 5,
			schools: [
				'La Salle Catholic College Preparatory — Milwaukie',
				'Jesuit High School — Portland',
				'Lincoln High School — Portland',
				'Catlin Gabel School — Portland',
				'West Linn High School — West Linn'
			]
		},
		{
			location: 'Wisconsin',
			lat: '44.7321209871372',
			lng: '-89.82933208537688',
			number_of_schools: 5,
			schools: [
				'Oregon High School — Oregon',
				'Madison West High School — Madison',
				'Brookfield East High School — Brookfield',
				'Arrowhead High School — Hartland',
				'Nicolet High School — Glendale'
			]
		},
		{
			location: 'Maryland',
			lat: '39.4908283684953',
			lng: '-77.0200669789974',
			number_of_schools: 4,
			schools: [
				'Walt Whitman High School — Bethesda',
				'Walter Johnson High School — Bethesda / North Bethesda',
				'Bethesda-Chevy Chase High School — Bethesda',
				'Richard Montgomery High School — Rockville'
			]
		},
		{
			location: 'Mississippi',
			lat: '33.53483701249629',
			lng: '-89.79968618019814',
			number_of_schools: 2,
			schools: ['Northeast Jones High School — Laurel', 'Madison Central High School — Madison']
		},
		{
			location: 'Pennsylvania',
			lat: '40.8129011034711',
			lng: '-77.717183162574',
			number_of_schools: 5,
			schools: [
				'Penncrest High School — Media',
				'Lower Merion High School — Ardmore',
				'Radnor High School — Radnor',
				'Conestoga High School — Berwyn',
				'Central High School — Philadelphia'
			]
		},
		{
			location: 'Georgia',
			lat: '32.60450566000582',
			lng: '-83.39516933366816',
			number_of_schools: 8,
			schools: [
				'Georgia State University — Atlanta',
				'The Westminster Schools — Atlanta',
				'Pace Academy — Atlanta',
				'Woodward Academy — College Park',
				'Marist School — Atlanta',
				'Northview High School — Johns Creek',
				'Walton High School — Marietta',
				'Chamblee Charter High School — Chamblee'
			]
		},
		{
			location: 'Colorado',
			lat: '39.3045148868801',
			lng: '-105.84708517891858',
			number_of_schools: 7,
			schools: [
				'Cherry Creek High School — Greenwood Village',
				'Fairview High School — Boulder',
				'Denver East High School — Denver',
				'Regis Jesuit High School — Aurora',
				'Valor Christian High School — Highlands Ranch',
				'Arapahoe High School — Centennial',
				'Mead High School — Longmont'
			]
		},
		{
			location: 'Texas',
			lat: '31.408623161370713',
			lng: '-99.08788014706634',
			number_of_schools: 5,
			schools: [
				'St. Mark’s School of Texas — Dallas',
				'The Kinkaid School — Houston',
				'Carroll Senior High School — Southlake',
				'Westlake High School — Austin',
				'Strake Jesuit College Preparatory — Houston'
			]
		},
		{
			location: 'Ohio',
			lat: '40.34163738269912',
			lng: '-82.86994395408871',
			number_of_schools: 5,
			schools: [
				'Upper Arlington High School — Upper Arlington',
				'St. Xavier High School — Cincinnati',
				'Dublin Jerome High School — Dublin',
				'Hawken School — Gates Mills',
				'Shaker Heights High School — Shaker Heights'
			]
		},
		{
			location: 'New York',
			lat: '40.69215867850124',
			lng: '-73.88299822806276',
			number_of_schools: 2,
			schools: ['Horace Mann School — Bronx', 'Stuyvesant High School — New York City']
		},
		{
			location: 'New Jersey',
			lat: '39.54755482853616',
			lng: '-74.86525401950088',
			number_of_schools: 3,
			schools: [
				'North Star Academy Charter School of Newark — Newark',
				'South Brunswick High School — South Brunswick',
				'Hillsborough High School — Hillsborough Township'
			]
		},
		{
			location: 'Massachusetts',
			lat: '42.50257857050249',
			lng: '-71.9936820766734',
			number_of_schools: 3,
			schools: [
				'Milton Academy — Milton',
				'Boston Latin School — Boston',
				'Phillips Exeter Academy — Exeter'
			]
		},
		{
			location: 'Virginia',
			lat: '37.25764547156451',
			lng: '-78.92667173301456',
			number_of_schools: 2,
			schools: [
				'Thomas Jefferson High School for Science and Technology — Alexandria',
				'Langley High School — McLean'
			]
		},
		{
			location: 'Washington, D.C.',
			lat: '38.9062632611924',
			lng: '-77.04164954791005',
			number_of_schools: 2
		},
		{
			location: 'Florida',
			lat: '27.669276416438088',
			lng: '-81.6237188490888',
			number_of_schools: 4,
			schools: [
				'Ransom Everglades School — Miami',
				'Pine Crest School — Fort Lauderdale',
				'Gulliver Preparatory School — Miami',
				'Berkeley Preparatory School — Tampa'
			]
		},
		{
			location: 'Nevada',
			lat: '39.792933904268885',
			lng: '-116.91595797892175',
			number_of_schools: 3,
			schools: [
				'Desert Pines High School — Las Vegas',
				'Canyon Springs High School — North Las Vegas',
				'Liberty High School — Henderson'
			]
		},
		{
			location: 'Malawi',
			lat: '-13.544733572774474',
			lng: '34.203373265014775',
			number_of_schools: 1,
			schools: ['Blantyre International School — Blantyre']
		},
		{
			location: 'Egypt',
			lat: '26.689837449952268',
			lng: '30.069389851962075',
			number_of_schools: 1,
			schools: ['Cairo International Academy — Cairo']
		},
		{
			location: 'Colombia',
			lat: '3.4114598817482245',
			lng: '-73.49124667299962',
			number_of_schools: 2,
			schools: ['Colegio Nueva Granada — Bogotá', 'Colegio Anglo Colombiano — Bogotá']
		},
		{
			location: 'Japan',
			lat: '36.5116282009851',
			lng: '138.54691390211707',
			number_of_schools: 2,
			schools: ['Tokyo Global Academy — Tokyo', 'International School of Kobe — Kobe']
		},
		{
			location: 'Russia',
			lat: '62.012246228342896',
			lng: '93.6418926691844',
			number_of_schools: 1,
			schools: ['HSE Lyceum — Moscow']
		},
		{
			location: 'Singapore',
			lat: '1.2817305869776692',
			lng: '103.84492223446871',
			number_of_schools: 2,
			schools: ['Dunman High School — Singapore', 'Singapore American School — Singapore']
		},
		{
			location: 'Australia',
			lat: '-25.131200037543394',
			lng: '134.21271963901168',
			number_of_schools: 2,
			schools: ['Sydney Grammar School — Sydney', 'Melbourne International School — Melbourne']
		},
		{
			location: 'United Kingdom',
			lat: '54.90729473216072',
			lng: '-2.7824796457660383',
			number_of_schools: 2,
			schools: ['Eton College — Windsor', 'Harrow School — London']
		},
		{
			location: 'Michigan',
			lat: '45.0617',
			lng: '-84.9383',
			number_of_schools: 3,
			schools: [
				'Detroit County Day School — Beverly Hills',
				'Cranbrook Kingswood Upper School — Bloomfield Hills',
				'Troy High School — Troy'
			]
		},
		{
			location: 'India',
			lat: '20.5937',
			lng: '78.9629',
			number_of_schools: 1,
			schools: ['Allenhouse Public School — Kanpur']
		},
		{
			location: 'Vietnam',
			lat: '14.0583',
			lng: '108.2772',
			number_of_schools: 1,
			schools: ['Dewey International School of Applied Science — Hanoi']
		},
		{
			location: 'Pakistan',
			lat: '30.0000',
			lng: '70.0000',
			number_of_schools: 1,
			schools: ['Kalar International School — Pakistan']
		},
		{
			location: 'Ghana',
			lat: '7.9465',
			lng: '-1.0232',
			number_of_schools: 1,
			schools: ['The Roman Ridge School — Accra']
		},
		{
			location: 'Canada',
			lat: '56.1304',
			lng: '-106.3468',
			number_of_schools: 1,
			schools: ['Upper Canada College — Toronto']
		},
		{
			location: 'Iraq',
			lat: '33.2237',
			lng: '43.6859',
			number_of_schools: 1,
			schools: ['Kalar International School — Kurdistan']
		},
		{
			location: 'Cameroon',
			lat: '7.3653',
			lng: '12.3434',
			number_of_schools: 1,
			schools: ['Dewey International School of Applied Science — Douala']
		}
	]
};

export default impact;
