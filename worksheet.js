const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
function getNames(array) {
  return array.map((value) => {
    return value.name;
  });
}
const names = getNames(characters);

//2. Get array of all heights
function getHeights(array) {
  return array.map((value) => {
    return value.height;
  });
}
const heights = getHeights(characters);

//3. Get array of objects with just name and height properties
function getNameAndHeight(array) {
  return array.map((value) => {
    return {
      name: value.name,
      height: value.height,
    };
  });
}
const nameAndHeights = getNameAndHeight(characters);

//4. Get array of all first names
function getFirstNames(array) {
  return array.map((value) => {
    return value.name.split(" ")[0];
  });
}
const firstNames = getFirstNames(characters);

//***REDUCE***
//1. Get total mass of all characters
function getTotalMass(array) {
  return array.reduce((total, current) => {
    return total + current.mass;
  }, 0);
}
const totalMass = getTotalMass(characters);

//2. Get total height of all characters
function getTotalHeight(array) {
  return array.reduce((total, current) => {
    return total + current.height;
  }, 0);
}
const totalHeight = getTotalHeight(characters);

//3. Get total number of characters by eye color
//  -- this was confusing honestly --
function getTotalsByEyeColor(array) {
  return array.reduce((acc, current) => {
    const key = current["eye_color"];
    const currentGroup = acc[key] ?? [];
    const matchingCharacterLength = [...currentGroup, current].length;
    return {
      ...acc,
      [key]: [matchingCharacterLength],
    };
  }, {});
}
const totalsByEyeColor = getTotalsByEyeColor(characters);

//4. Get total number of characters in all the character names
function getTotalCharsInNames(array) {
  return array.reduce((total, current) => {
    const currentName = current.name.split(" ");
    const currentNameLength = currentName[0].length + currentName[1].length;
    return total + currentNameLength;
  }, 0);
}
const totalChars = getTotalCharsInNames(characters);

//***FILTER***
//1. Get characters with mass greater than 100
function getHeavyCharacters(array) {
  return array.filter((value) => {
    return value.mass > 100;
  });
}
const heavyCharacters = getHeavyCharacters(characters);

//2. Get characters with height less than 200
function getShortCharacters(array) {
  return array.filter((value) => {
    return value.height < 200;
  });
}
const shortCharacters = getShortCharacters(characters);

//3. Get all male characters
function getMale(array) {
  return array.filter((value) => {
    return value.gender === "male";
  });
}
const allMen = getMale(characters);

//4. Get all female characters
function getWomen(array) {
  return array.filter((value) => {
    return value.gender === "female";
  });
}
const allWomen = getWomen(characters);

//***SORT***
//1. Sort by mass
function sortByMass(array) {
  return array.sort((a, b) => {
    return a.mass - b.mass;
  });
}
const byMass = sortByMass([...characters]);

//2. Sort by height
function sortByHeight(array) {
  return array.sort((a, b) => {
    return a.height - b.height;
  });
}
const byHeight = sortByHeight([...characters]);

//3. Sort by name
function sortByName(array) {
  return array.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}
const byName = sortByName([...characters]);

//4. Sort by gender
function sortByGender(array) {
  return array.sort((a, b) => {
    return a.gender < b.gender ? -1 : 1;
  });
}
const byGender = sortByGender([...characters]);

//***EVERY***
//1. Does every character have blue eyes?

function isAllBlueEyed(array) {
  return array.every((value) => {
    return value.eye_color === "blue";
  });
}
const allBlueEyes = isAllBlueEyed(characters);

//2. Does every character have mass more than 40?
function isAllHeavierThan40(array) {
  return array.every((value) => {
    return value.mass > 40;
  });
}
const allHeavierThan40 = isAllHeavierThan40(characters);

//3. Is every character shorter than 200?
function isAllShorterThan200(array) {
  return array.every((value) => {
    return value.height < 200;
  });
}
const allShorterThan200 = isAllShorterThan200(characters);

//4. Is every character male?
function isAllMale(array) {
  return array.every((value) => {
    return value.gender === "male";
  });
}
const allMale = isAllMale(characters);

//***SOME***
//1. Is there at least one male character?
function doesManExist(array) {
  return array.some((value) => {
    return value.gender === "male";
  });
}
const manExists = doesManExist(characters);

//2. Is there at least one character with blue eyes?
function doesBlueEyesExist(array) {
  return array.some((value) => {
    return value.eye_color === "blue";
  });
}
const hasBlueEyes = doesBlueEyesExist(characters);

//3. Is there at least one character taller than 210?
function isOneTallerThan210(array) {
  return array.some((value) => {
    return value.height > 210;
  });
}
const tallerThan210 = isOneTallerThan210(characters);

//4. Is there at least one character that has mass less than 50?
function isOneLighterThan50(array) {
  return array.some((value) => {
    return value.mass < 50;
  });
}
const lighterThan50 = isOneLighterThan50(characters);
