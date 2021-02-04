import * as Knex from "knex";
import generateSeeds from '../../../util/generateSeeds';

export async function seed(knex: Knex): Promise<void> {
    let tags: string[] = [
        'personal',
        'auto',
        'student',
        'mortgage',
        'home equity',
        'credit builder',
        'family/friends',
        'payday',
        'other'
    ];
    await knex("tags").del();
    const insertValue = generateSeeds(tags, 'tag')
    await knex("tags").insert(insertValue);
};
