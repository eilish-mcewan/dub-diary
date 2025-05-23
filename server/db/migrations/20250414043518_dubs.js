/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('dubs', (table) => {
   table.increments('id')
   table.string('dub')
   table.timestamp('created_at').defaultTo(knex.raw(`(datetime('now', 'localtime'))`))
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('dubs')
};
