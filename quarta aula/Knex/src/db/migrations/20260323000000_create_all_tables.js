export const up = async function(knex) {
  await knex.schema.createTable('usuarios', (table) => {
    table.uuid('id').primary();
    table.string('nome', 100).notNullable();
    table.string('email', 150).notNullable();
    table.string('senha', 255).notNullable();
    table.date('data_nascimento').notNullable();
    table.string('genero', 20);
    table.string('bio', 300);
    table.timestamp('criado_em').defaultTo(knex.fn.now());
    table.timestamp('atualizado_em').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('enderecos', (table) => {
    table.uuid('id').primary();
    table.uuid('usuario_id').notNullable()
      .references('id').inTable('usuarios').onDelete('CASCADE');
    table.string('logradouro', 150);
    table.string('numero', 10);
    table.string('complemento', 50);
    table.string('bairro', 100);
    table.string('cidade', 100);
    table.string('estado', 50);
    table.string('cep', 15);
    table.decimal('latitude', 9, 6);
    table.decimal('longitude', 9, 6);
  });

  await knex.schema.createTable('interesses', (table) => {
    table.increments('id').primary();
    table.string('nome', 50).notNullable();
  });

  await knex.schema.createTable('usuarios_interesses', (table) => {
    table.uuid('usuario_id').notNullable()
      .references('id').inTable('usuarios').onDelete('CASCADE');
    table.integer('interesse_id').unsigned().notNullable()
      .references('id').inTable('interesses').onDelete('CASCADE');
    table.primary(['usuario_id', 'interesse_id']);
  });

  await knex.schema.createTable('fotos_usuarios', (table) => {
    table.uuid('id').primary();
    table.uuid('usuario_id').notNullable()
      .references('id').inTable('usuarios').onDelete('CASCADE');
    table.string('url_foto', 255).notNullable();
    table.boolean('principal').defaultTo(false);
    table.timestamp('criado_em').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('interacoes', (table) => {
    table.uuid('id').primary();
    table.uuid('usuario_origem').notNullable()
      .references('id').inTable('usuarios').onDelete('CASCADE');
    table.uuid('usuario_destino').notNullable()
      .references('id').inTable('usuarios').onDelete('CASCADE');
    table.string('tipo', 10).notNullable();
    table.timestamp('criado_em').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('matches', (table) => {
    table.uuid('id').primary();
    table.uuid('usuario1_id').notNullable()
      .references('id').inTable('usuarios').onDelete('CASCADE');
    table.uuid('usuario2_id').notNullable()
      .references('id').inTable('usuarios').onDelete('CASCADE');
    table.timestamp('criado_em').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('mensagens', (table) => {
    table.uuid('id').primary();
    table.uuid('match_id').notNullable()
      .references('id').inTable('matches').onDelete('CASCADE');
    table.uuid('remetente_id').notNullable()
      .references('id').inTable('usuarios').onDelete('CASCADE');
    table.text('conteudo').notNullable();
    table.timestamp('enviado_em').defaultTo(knex.fn.now());
  });
};

export const down = async function(knex) {
  await knex.schema.dropTableIfExists('mensagens');
  await knex.schema.dropTableIfExists('matches');
  await knex.schema.dropTableIfExists('interacoes');
  await knex.schema.dropTableIfExists('fotos_usuarios');
  await knex.schema.dropTableIfExists('usuarios_interesses');
  await knex.schema.dropTableIfExists('interesses');
  await knex.schema.dropTableIfExists('enderecos');
  await knex.schema.dropTableIfExists('usuarios');
};
