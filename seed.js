const { db, Campus, Student } = require('./server/db/index')

const campuses = [
	{
		name: 'Death Star',
		address: '75159 LEGO St.',
		description: "Reenact amazing scenes from the Star Wars saga with the Empire’s ultimate planet-zapping weapon—the Death Star! With over 4,000 pieces, this fantastic model has a galaxy of intricate and authentic environments, including a superlaser control room, Imperial conference chamber, hangar bay with moving launch rack and Lord Vader’s TIE Advanced with space for Vader inside, Emperor Palpatine’s throne room, Droid maintenance room, detention block, trash compactor, tractor beam, cargo area, turbo laser with spring-loaded shooters and seats for the 2 Death Star Gunners, and 2 movable turbo laser towers. This fantastic set also includes 23 iconic minifigures and 2 Droids to ensure hours of Star Wars battle fun. READ MORE at https://www.lego.com/en-us/product/death-star-75159",
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-death-star-set-75159-15.jpg'
	}, 
	{
		name: 'Hogwarts Castle',
		address: '71043 LEGO St.',
		description: "Make the magic come alive at the LEGO® Harry Potter™ 71043 Hogwarts™ Castle! This highly detailed LEGO Harry Potter collectible has over 6,000 pieces and offers a rewarding build experience. It comes packed with highlights from the Harry Potter series, where you will discover towers, turrets, chambers, classrooms, creatures, the Whomping Willow™ and Hagrid´s hut, plus many more iconic features. And with 4 minifigures, 27 microfigures featuring students, professors and statues, plus 5 Dementors, this advanced building set makes the perfect Harry Potter gift. READ MORE at https://www.lego.com/en-us/product/hogwarts-castle-71043",
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-hogwarts-castle-set-71043-15.jpg'
	}, 
	{
		name: "Rivendell",
		address: '10316 LEGO St.',
		description: "Journey into Rivendell™ with this LEGO® The Lord of the Rings™ collectible (10316). Based on the Middle-earth™ valley where the famous quest began, this impressive 6,167-piece project for adults is bursting with details that movie fans will adore. READ MORE at https://www.lego.com/en-us/product/the-lord-of-the-rings-rivendell-10316",
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-the-lord-of-the-rings-rivendell-set-10316-15.jpg'
	},  
	{
		name: 'Table Football',
		address: '21337 LEGO St.',
		description: 'Assemble your own team of champions and let the games begin with LEGO® Ideas Table Football (21337). Focus like a champion to build this scaled-down version of a retro Table Football game, featuring color-coded sliding knobs behind each goal to keep score. The set includes 22 LEGO minifigures (11 for each team), with 44 different heads and 43 hairstyle elements so you can customize the look of each character. (READ MORE at https://www.lego.com/en-us/product/table-football-21337)',
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-table-football-set-21337-15.jpg'
	}, 
	{
		name: "Destiny's Bounty",
		address: '70618 LEGO St.',
		description: "Construct Wu’s huge ninja training base, Destiny’s Bounty. This highly detailed THE LEGO® NINJAGO® MOVIE™ model consists of 3 modular levels and features a double-headed dragon figurehead, decorated sails, wind-up-and-release anchors, dojo area for ninja training, a bathroom and Wu’s bedroom in the hull. This amazing model also includes hidden weapons including the ultimate weapon— the laser-style pointer, plus 7 minifigures with assorted weapons to bolster the exciting role-play possibilities. READ MORE at https://www.lego.com/en-us/product/destiny-s-bounty-70618",
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-destiny-s-bounty-set-70618-15.jpg'
	},  
	{
		name: 'Daily Bugle',
		address: '76178 LEGO St.',
		description: 'LEGO® Marvel Spider-Man Daily Bugle (76178) brings together a cast of 25 classic characters from the Spiderverse in a stunning build-and-display construction project for adults. (READ MORE at https://www.lego.com/en-us/product/daily-bugle-76178)',
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-daily-bugle-set-76178-15.jpg'
	}, 
	{
		name: "Endgame Final Battle",
		address: '76192 LEGO St.',
		description: "Bring classic Marvel movie action to life with the LEGO® Marvel Avengers: Endgame Final Battle (76192) playset. READ MORE at https://www.lego.com/en-us/product/avengers-endgame-final-battle-76192",
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-avengers-endgame-final-battle-set-76192-15.jpg'
	},
];
const students = [
	{
		firstName: 'C-',
		lastName: '3PO',
		email: 'c-3po@droid.protocol',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-c-3po-protocol-droid-with-leg-wire-decoration-minifigure-25.jpg',
		gpa: 4.0,
		campusId: 1,
	}, 
	{
		firstName: 'Darth',
		lastName: 'Vader',
		email: 'vader@sith.lord',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-darth-vader-minifigure-784731-25.jpg',
		gpa: 0,
		campusId: 1,
	}, 
	{
		firstName: 'Godric',
		lastName: 'Gryffindor',
		email: 'og_lion@hogwarts.min',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-godric-gryffindor-minifigure-28.jpg',
		gpa: 3.2,
		campusId: 2,
	}, 
	{
		firstName: 'Helga',
		lastName: 'Hufflepuff',
		email: 'og_badger@hogwarts.min',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-helga-hufflepuff-minifigure-25.jpg',
		gpa: 3.5,
		campusId: 2,
	},
	{
		firstName: 'Aragorn',
		lastName: 'Elessar',
		email: 'fellow_4@rings.org',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/bltec4efab761eba33d/10316-PDP-2303-Block-Standard-4.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 3.5,
		campusId: 3,
	}, 
	{
		firstName: 'Legolas',
		lastName: "th'Elf",
		email: 'fellow_6@rings.org',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/bltf947adf5fbf6d96a/10316-PDP-2303-Block-Standard-11.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 3.6,
		campusId: 3,
	}, 
  {
		firstName: 'Spider-',
		lastName: 'Man',
		email: 'definitelyNOTmiles_morales@super-hero.net',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-miles-morales-minifigure-185891-28.jpg',
		gpa: 4.0,
		campusId: 6,
	}, 
	{
		firstName: 'Gwen',
		lastName: 'Stacey',
		email: 'definitelyNOTghostspider@regular-person.gov',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-gwen-stacy-minifigure-28.jpg',
		gpa: 4.0,
		campusId: 6,
	}, 
	{
		firstName: 'Peter',
		lastName: 'Parker',
		email: 'photos@daily-bugle.com',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-peter-parker-red-jacket-minifigure-28.jpg',
		gpa: 4.0,
		campusId: 6,
	}, 
	{
		firstName: 'Amber',
		lastName: 'Grant',
		email: 'sales@daily-bugle.com',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-amber-grant-minifigure-28.jpg',
		gpa: 2.8,
		campusId: 6,
	}, 
  {
		firstName: 'Sensei',
		lastName: 'Wu',
		email: 'sensei@me.wu',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-sensei-wu-with-long-robe-minifigure-28.jpg',
		gpa: 4.0,
		campusId: 5,
	}, 
	{
		firstName: 'Lloyd',
		lastName: 'Garmadon',
		email: 'itsPronounced_LOID@jitzu.spin',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-lloyd-minifigure-with-dual-sided-head-25.jpg',
		gpa: 3.0,
		campusId: 5,
	}, 
	{
		firstName: 'tiny',
		lastName: 'Ant-Man',
		email: 'tic-tac@avengers.us',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-ant-man-trophy-minifigure-27.jpg',
		gpa: 3.7,
		campusId: 7,
	}, 
	{
		firstName: 'Black',
		lastName: 'Panther',
		email: 'king@wakanda.gov',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-black-panther-minifigure-95431-28.jpg',
		gpa: 3.9,
		campusId: 7,

	},
	{
		firstName: 'Rowena',
		lastName: 'Ravenclaw',
		email: 'og_raven@hogwarts.min',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-rowena-ravenclaw-minifigure-28.jpg',
		gpa: 4.0,
		campusId: 2,
	}, 
	{
		firstName: 'Salazar',
		lastName: 'Slytherin',
		email: 'OG_SNAKE@hogwarts.min',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-salazar-slytherin-minifigure-28.jpg',
		gpa: 4.0,
		campusId: 2,
	}, 
	{
		firstName: 'Boromir',
		lastName: "O'Denethor",
		email: 'og_lion@hogwarts.min',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/bltb9322b9fa71bca78/10316-PDP-2303-Block-Standard-6.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 3.2,
		campusId: 3,
	}, 
	{
		firstName: 'Samwise',
		lastName: 'Gamgee',
		email: 'fellow_1@rings.org',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt5964c6b343dbaff0/10316-PDP-2303-Block-Standard-10.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 1.7,
		campusId: 3,
	},
	{
		firstName: 'Pippin',
		lastName: 'Took',
		email: 'fellow_2@rings.org',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt2e6c59e1d8cf2ca8/10316-PDP-2303-Block-Standard-9.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 3.2,
		campusId: 3,
	}, 
	{
		firstName: 'Merry',
		lastName: "Brandybuck",
		email: 'fellow_3@rings.org',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt2e6c59e1d8cf2ca8/10316-PDP-2303-Block-Standard-9.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 2.8,
		campusId: 3,
	}, 
  {
		firstName: 'Gandalf',
		lastName: 'the Gray',
		email: 'fellow_7@rings.org',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt4e63a45c4647f26d/10316-PDP-2303-Block-Standard-2.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 4.0,
		campusId: 3,
	}, 
	{
		firstName: 'Gimli',
		lastName: "O'Gloin",
		email: 'fellow_8@rings.org',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt3f79d5f6e325ed30/10316-PDP-2303-Block-Standard-8.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 2.2,
		campusId: 3,
	}, 
	{
		firstName: 'Frodo',
		lastName: 'Baggins',
		email: 'bearer@rings.org',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/bltbb3a6ca3c48ca364/10316-PDP-2303-Block-Standard-1.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 3.4,
		campusId: 3,
	}, 
	{
		firstName: 'Bilbo',
		lastName: 'Baggins',
		email: 'manager@rivendellestates.com',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt9682777d84d7e07b/10316-PDP-2303-Block-Standard-5.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 3.8,
		campusId: 3,
	}, 
  {
		firstName: 'Elrond',
		lastName: 'Star-dome',
		email: 'lord@council.gov',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt71cced70ee4cb5ee/10316-PDP-2303-Block-Standard-3.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 4.0,
		campusId: 3,
	}, 
	{
		firstName: 'Arwen',
		lastName: 'Undómiel',
		email: 'evenstar@rivendellestates.com',
		imageUrl: 'https://www.lego.com/cdn/cs/set/assets/bltbf63febf846ba24b/10316-PDP-2303-Block-Standard-7.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
		gpa: 3.9,
		campusId: 3,
	}, 
	{
		firstName: 'Olivia',
		lastName: 'McDonowitz',
		email: 'purple@goalie.net',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-soccer-goalie-female-lavender-minifigure-28.jpg',
		gpa: 1.1,
		campusId: 4,
	}, 
	{
		firstName: 'Emma',
		lastName: 'Gronkowski',
		email: 'orange@goalie.net',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-soccer-goalie-female-orange-minifigure-1.jpg',
		gpa: 3.6,
		campusId: 4,

	},
	{
		firstName: 'Aunt',
		lastName: 'May',
		email: 'spider@unt.com',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-aunt-may-gray-sweater-minifigure-28.jpg',
		gpa: 3.3,
		campusId: 6,

	},  
	{
		firstName: 'Zane',
		lastName: 'del Julien',
		email: 'aREALhuman@jizu.spin',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-zane-with-quiver-minifigure-25.jpg',
		gpa: 4.0,
		campusId: 5,
	}, 
	{
		firstName: 'Captain',
		lastName: 'America',
		email: 'steve.rogers@avengers.us',
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-captain-america-with-hair-and-detailed-suit-minifigure-1.jpg',
		gpa: 3.0,
		campusId: 7,
	}, 
	{
		firstName: 'Chewbacca',
		lastName: '(Wookiee)',
		email: 'whrrraaargh@grraaargh.hwhmmgh',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-chewbacca-minifigure-725457-28.jpg',
		gpa: 3.4,
		campusId: 1,
	}, 
	{
		firstName: 'Han',
		lastName: 'Solo',
		email: 'justME@galaxy.net',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-death-star-han-solo-minifigure-25.jpg',
		gpa: 3.1,
		campusId: 1,
	},
	{
		firstName: 'Sheev',
		lastName: 'Palpatine',
		email: 'EMPEROR@galaxy.net',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-emperor-palpatine-minifigure-706268-25.jpg',
		gpa: 4.0,
		campusId: 1,
	}, 
	{
		firstName: 'Grand Moff',
		lastName: "Tarkin",
		email: 'foul_stench@board.gov',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-grand-moff-tarkin-minifigure-911745-25.jpg',
		gpa: 4.0,
		campusId: 1,
	}, 
  {
		firstName: 'Jedi',
		lastName: 'Knight',
		email: 'like-my-father@before.me',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-luke-skywalker-75093-minifigure-25.jpg',
		gpa: 3.3,
		campusId: 1,
	}, 
	{
		firstName: 'TK-421',
		lastName: '...or is he?',
		email: 'maybe_Luke@rescue.org',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-luke-skywalker-with-stormtrooper-outfit-minifigure-25.jpg',
		gpa: 3.3,
		campusId: 1,
	}, 
	{
		firstName: 'Peter',
		lastName: '...or is he?',
		email: 'maybe_Han@rescue.org',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-han-solo-with-stormtrooper-outfit-minifigure-527757-25.jpg',
		gpa: 3.1,
		campusId: 1,
	}, 
	{
		firstName: 'Luke',
		lastName: 'Skywalker',
		email: 'moisture@farm.tatooine',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-luke-skywalker-with-tatooine-outfit-minifigure-25.jpg',
		gpa: 3.3,
		campusId: 1,
	}, 
  {
		firstName: 'mouse',
		lastName: 'droid',
		email: 'mouse@maintenance.droid',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-mouse-droid-minifigure-dark-stone-gray-28.jpg',
		gpa: 0.7,
		campusId: 1,
	}, 
	{
		firstName: 'Obi-wan',
		lastName: 'Kenobi',
		email: 'old_Ben@aol.com',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-obi-wan-kenobi-with-gray-hair-and-dark-brown-robe-minifigure-28.jpg',
		gpa: 3.8,
		campusId: 1,
	}, 
	{
		firstName: 'Leia',
		lastName: 'Organa',
		email: 'princess@alderaan.gov',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-princess-leia-minifigure-662837-25.jpg',
		gpa: 3.8,
		campusId: 1,
	}, 
	{
		firstName: 'TK-',
		lastName: '883',
		email: 'stormtrooper@stormtrooper.stormtrooper',
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-stormtrooper-minifigure-838379-28.jpg',
		gpa: 1.1,
		campusId: 1,

	},
	{
		firstName: 'TK-',
		lastName: '615',
		email: 'stormtrooper@stormtrooper.stormtrooper',
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-stormtrooper-minifigure-838379-28.jpg',
		gpa: 1.1,
		campusId: 1,
	}, 
	{
		firstName: 'Royal',
		lastName: 'Guard',
		email: 'marty@palace.gov',
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-royal-guard-with-dark-red-arms-and-hands-minifigure-stretchable-cape-25.jpg',
		gpa: 3.9,
		campusId: 1,
	}, 
	{
		firstName: 'Royal',
		lastName: 'Guard',
		email: 'fernando@palace.gov',
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-royal-guard-with-dark-red-arms-and-hands-minifigure-stretchable-cape-25.jpg',
		gpa: 3.9,
		campusId: 1,
	}, 
	{
		firstName: 'R2-',
		lastName: "D2",
		email: 'r2-d2@astromech.droid',
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-r2-d2-minifigure-flat-silver-head-dark-blue-printing-lavender-dots-25.jpg',
		gpa: 4.0,
		campusId: 1,
	}, 
	// {
	// 	firstName: 'Samwise',
	// 	lastName: 'Gamgee',
	// 	email: 'fellow_1@rings.org',
	// 	imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt5964c6b343dbaff0/10316-PDP-2303-Block-Standard-10.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
	// 	gpa: 1.7,
	// 	campusId: 3,
	// },
	// {
	// 	firstName: 'Pippin',
	// 	lastName: 'Took',
	// 	email: 'fellow_2@rings.org',
	// 	imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt2e6c59e1d8cf2ca8/10316-PDP-2303-Block-Standard-9.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
	// 	gpa: 3.2,
	// 	campusId: 3,
	// }, 
	// {
	// 	firstName: 'Merry',
	// 	lastName: "Brandybuck",
	// 	email: 'fellow_3@rings.org',
	// 	imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt2e6c59e1d8cf2ca8/10316-PDP-2303-Block-Standard-9.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
	// 	gpa: 2.8,
	// 	campusId: 3,
	// }, 
  // {
	// 	firstName: 'Gandalf',
	// 	lastName: 'the Gray',
	// 	email: 'fellow_7@rings.org',
	// 	imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt4e63a45c4647f26d/10316-PDP-2303-Block-Standard-2.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
	// 	gpa: 4.0,
	// 	campusId: 3,
	// }, 
	// {
	// 	firstName: 'Gimli',
	// 	lastName: "O'Gloin",
	// 	email: 'fellow_8@rings.org',
	// 	imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt3f79d5f6e325ed30/10316-PDP-2303-Block-Standard-8.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
	// 	gpa: 2.2,
	// 	campusId: 3,
	// }, 
	// {
	// 	firstName: 'Frodo',
	// 	lastName: 'Baggins',
	// 	email: 'bearer@rings.org',
	// 	imageUrl: 'https://www.lego.com/cdn/cs/set/assets/bltbb3a6ca3c48ca364/10316-PDP-2303-Block-Standard-1.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
	// 	gpa: 3.4,
	// 	campusId: 3,
	// }, 
	// {
	// 	firstName: 'Bilbo',
	// 	lastName: 'Baggins',
	// 	email: 'manager@rivendellestates.com',
	// 	imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt9682777d84d7e07b/10316-PDP-2303-Block-Standard-5.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
	// 	gpa: 3.8,
	// 	campusId: 3,
	// }, 
  // {
	// 	firstName: 'Elrond',
	// 	lastName: 'Star-dome',
	// 	email: 'lord@council.gov',
	// 	imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt71cced70ee4cb5ee/10316-PDP-2303-Block-Standard-3.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
	// 	gpa: 4.0,
	// 	campusId: 3,
	// }, 
	// {
	// 	firstName: 'Arwen',
	// 	lastName: 'Undómiel',
	// 	email: 'evenstar@rivendellestates.com',
	// 	imageUrl: 'https://www.lego.com/cdn/cs/set/assets/bltbf63febf846ba24b/10316-PDP-2303-Block-Standard-7.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1',
	// 	gpa: 3.9,
	// 	campusId: 3,
	// }, 
];

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(campuses.map(campus => {
      return Campus.create(campus);
    }));

    await Promise.all(students.map(student => {
      return Student.create(student);
    }));

    console.log('Seeding success!')
    db.close()
  }
  catch (err) {
    console.error('Oh noes! Something went wrong!')
    console.error(err)
    db.close()
  }
}

seed();