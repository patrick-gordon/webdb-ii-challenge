
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('VIN', 128).unique().notNullable();
        tbl.string('make', 20).notNullable();
        tbl.string('model', 20).notNullable();
        tbl.integer('milage').notNullable();
        tbl.string('transmittion_type');
        tbl.string('title_status');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')

};
