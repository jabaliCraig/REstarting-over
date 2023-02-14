//straight hijack from Juke Lab
const Sequelize = require('sequelize');
const db = require('./db');

const Campus = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: 'https://m.media-amazon.com/images/I/81I2fdZn92L.png',
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	text: {
		type: Sequelize.TEXT,
	}
});

module.exports = Campus;