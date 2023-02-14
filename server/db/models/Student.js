//straight hijack from Juke Lab
const Sequelize = require('sequelize');
const db = require('./db');

const Student = db.define('student', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			isEmail: true,
		},
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: 'https://m.media-amazon.com/images/I/81I2fdZn92L.png',
	},
	gpa: {
		type: Sequelize.DECIMAL(2,1),
		validate: {
			min: 0.0,
			max: 4.0,
		}
	}
});

module.exports = Student;