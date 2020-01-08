const knex = require('knex');
const config = require('../knexfile.js'); // for config obj

module.exports = knex(config.development);// pass in config obj