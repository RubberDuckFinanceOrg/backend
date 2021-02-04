import * as Knex from "knex";
import generateSeeds from '../../../util/generateSeeds';


export async function seed(knex: Knex): Promise<void> {
    await knex("categories").del();
    let categories: string[] = ['need', 'want']
    const insertValue = generateSeeds(categories, 'category')
    await knex("categories").insert(insertValue);
};
