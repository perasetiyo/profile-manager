exports.up = function(knex, Promise) {
    return knex.schema.createTable('people', (table) => {
        table.uuid('id').primary();

        // identity
        table.string('first_name');
        table.string('last_name');
        table.string('full_name');

        // personal data
        table.string('phone');
        table.string('address');
        table.string('current_job');
        table.string('profile_picture');

        // metas
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at');
        table.timestamp('deleted_at');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('merchants');
};
