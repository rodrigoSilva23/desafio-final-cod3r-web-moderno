/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("articles", (table) => {
    table.increments("id").primary();
    table.string("name").notNull();
    table.string("description", 1000).notNull();
    table.string("imageUrl", 1000).notNull();
    table.binary("content ").notNull();
    table.integer("userId").references("id").inTable("users");
    table
      .integer("categoryId")
      .references("id")
      .inTable("categories")
      .notNull();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
