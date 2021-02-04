import * as Knex from "knex";
import generateSeeds from '../../../util/generateSeeds';

export async function seed(knex: Knex): Promise<void> {
    let types = [
        'stocks',
        'bonds',
        'mutual fund',
        'exchange traded fund',
        'certificate of deposit',
        'retirement',
        'options',
        'crypto currency',
        'commodities',
        'other'
    ];
    await knex("types").del();
    const insertValue = generateSeeds(types, 'type')
    await knex("types").insert(insertValue);
};
