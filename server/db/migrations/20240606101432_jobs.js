/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id')
    table.string('company')
    table.string('logo')
    table.string('logo_background')
    table.string('position')
    table.string('posted_at')
    table.string('contract')
    table.string('location')
    table.string('website')
    table.string('apply')
    table.string('description')
    table.json('requirements')
    table.json('role')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('jobs')
}
