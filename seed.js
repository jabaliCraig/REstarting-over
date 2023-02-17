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