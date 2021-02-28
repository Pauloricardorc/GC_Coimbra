
exports.up = function (knex) {
    return knex.schema.createTable('Locacao_de_Servicos', function (table) {
        table.string('cte_razao_social').notNullable();
        table.string('cte_cnpj').notNullable();
        table.string('cte_endereco').notNullable();
        table.string('cte_telefone').notNullable();

        table.string('cto_razao_social').notNullable();
        table.string('cto_cnpj').notNullable();
        table.string('cto_endereco').notNullable();
        table.string('cto_telefone').notNullable();

        table.string('tipo_do_contrato').notNullable();

        table.boolean('carencia');
        table.boolean('vigencia');
        table.float('valores');
        table.date('prazos');

        table.string('status').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('locacao_de_servicos')
};
