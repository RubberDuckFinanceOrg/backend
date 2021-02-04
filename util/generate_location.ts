type Location = {
  [key: string]: string
}

function generateLocationObject(key: string, id: string): Location {
  const keyValue = key;
  const idValue = id;
  const location: Location = {};
  location[keyValue] = idValue;
  return location;
}

export = generateLocationObject;
