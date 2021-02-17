import db from '../db/db-config'
import generateLocationObject from './generate_location'

export {
  Create,
  Edit,
  Delete,
  GetOne,
  GetAll,
  Users,
  recordCheck
};

// ! Reference Information
// ** database = table
// ** data = record
// ** key = what database id key you are referencing
// ** id = record id

type Database = string
type InsertValue = {}
type Key = string
type Id = string

// Create a record
function Create(database: Database, data: InsertValue) {
  return db(database).insert(data);
}
// Edit a record
function Edit(database: Database, key: Key, id: Id, data: InsertValue) {
  const location = generateLocationObject(key, id);
  return db(database)
    .where(location)
    .update(data);
}
// Delete a record
function Delete(database: Database, key: Key, id: Id) {
  const location = generateLocationObject(key, id);
  return db(database)
    .where(location)
    .delete();
}

// Returns all records
function GetAll(database: Database, key: Key, id: Id) {
  const location = generateLocationObject(key, id);
  return db(database)
    .where(location)
    .orderBy('id');
}

// Returns a single record
function GetOne(database: Database, key: Key, id: Id) {
  const location = generateLocationObject(key, id);
  return db(database).where(location);
}

async function recordCheck(database: Database, key: Key) {
  const ref: any[] = await db(database).where({ code: key })
  return (ref.length === 1)
}

// ! Place holder for user testing purposes
function Users() {
  return db('users').select('email', 'id', 'referrer_id', 'referral_id');
}
