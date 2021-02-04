import * as Knex from "knex";
import generateSeeds from '../../../util/generateSeeds';

export async function seed(knex: Knex): Promise<void> {
    let incomeStreams: string[] = [
        'earned',
        'profit',
        'interest',
        'dividend',
        'capital gains',
        'rental',
        'royalty',
        'other'
    ];
    await knex("streams").del();
    const insertValue = generateSeeds(incomeStreams, 'income_stream')
    await knex("streams").insert(insertValue);
};
