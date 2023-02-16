const { db, Campus, Student } = require('./server/db/index')

const campuses = [
	{
		name: 'Daily Bugle',
		address: '76178 LEGO St.',
		description: 'LEGO® Marvel Spider-Man Daily Bugle (76178) brings together a cast of 25 classic characters from the Spiderverse in a stunning build-and-display construction project for adults. (READ MORE at https://www.lego.com/en-us/product/daily-bugle-76178)',
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-daily-bugle-set-76178-15.jpg'
	}, 
	{
		name: 'Table Football',
		address: '21337 LEGO St.',
		description: 'Assemble your own team of champions and let the games begin with LEGO® Ideas Table Football (21337). Focus like a champion to build this scaled-down version of a retro Table Football game, featuring color-coded sliding knobs behind each goal to keep score. The set includes 22 LEGO minifigures (11 for each team), with 44 different heads and 43 hairstyle elements so you can customize the look of each character. (READ MORE at https://www.lego.com/en-us/product/table-football-21337)',
		imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-table-football-set-21337-15.jpg'
	}, 
];
const students = [
	{
		firstName: 'Spider-',
		lastName: 'Man',
		email: 'definitelyNOTmiles_morales@super-hero.net',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-miles-morales-minifigure-185891-28.jpg',
		gpa: 4.0,
		campusId: 1,
	}, 
	{
		firstName: 'Gwen',
		lastName: 'Stacey',
		email: 'definitelyNOTghostspider@regular-person.gov',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-gwen-stacy-minifigure-28.jpg',
		gpa: 4.0,
		campusId: 1,
	}, 
	{
		firstName: 'Peter',
		lastName: 'Parker',
		email: 'photos@daily-bugle.com',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-peter-parker-red-jacket-minifigure-28.jpg',
		gpa: 4.0,
		campusId: 1,
	}, 
	{
		firstName: 'Godric',
		lastName: 'Gryffindor',
		email: 'og_lion@hogwarts.min',
		imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-godric-gryffindor-minifigure-28.jpg',
		gpa: 3.2
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