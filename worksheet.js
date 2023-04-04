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
const names = characters.map((character) => {
  return character.name;
});

//2. Get array of all heights
const heights = characters.map((character) => {
  return character.height;
});

//3. Get array of objects with just name and height properties
const nameAndHeights = characters.map((character) => {
  return {
    name: character.name,
    height: character.height,
  };
});

//4. Get array of all first names
const firstNames = characters.map((character) => {
  return character.name.split(" ")[0];
});

// console.log({
//   names: names,
//   heights: heights,
//   nameAndHeights: nameAndHeights,
//   firstNames: firstNames,
// });

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((total, currentVal) => total + currentVal.mass, 0);

//2. Get total height of all characters
const totalHeight = characters.reduce((total, current) => total + current.height, 0);

//3. Get total number of characters by eye color
//  -- this was confusing honestly --
const totalsByEyeColor = characters.reduce((acc, currentObj) => {
  const key = currentObj["eye_color"];
  const curGroup = acc[key] ?? [];
  const matchingCharacterLength = [...curGroup, currentObj].length;
  return { ...acc, [key]: [matchingCharacterLength] };
}, {});

//4. Get total number of characters in all the character names
const totalChars = characters.reduce((total, current) => {
  const currentName = current.name.split(" ");
  const currentNameLength = currentName[0].length + currentName[1].length;
  return total + currentNameLength;
}, 0);

// console.log({
//   totalMass: totalMass,
//   totalHeight: totalHeight,
//   totalsByEyeColor: totalsByEyeColor,
//   totalChars: totalChars,
// });

//***FILTER***
//1. Get characters with mass greater than 100
const heavyCharacters = characters.filter((character) => character.mass > 100);

//2. Get characters with height less than 200
const shortCharacters = characters.filter((character) => character.height < 200);

//3. Get all male characters
const manyMen = characters.filter((character) => character.gender === "male");
//4. Get all female characters
const women = characters.filter((character) => character.gender === "female");

// console.log({
//   heavyCharacters: heavyCharacters,
//   shortCharacters: shortCharacters,
//   manyMen: manyMen,
//   women: women,
// });

//***SORT***
//1. Sort by mass
const byMass = [...characters].sort((a, b) => a.mass - b.mass);

//2. Sort by height
const byHeight = [...characters].sort((a, b) => a.height - b.height);

//3. Sort by name
const byName = [...characters].sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  }
  return 0;
});

//4. Sort by gender
const byGender = [...characters].sort((a, b) => {
  if (a.gender < b.gender) {
    return -1;
  }
  return 1;
});

// console.log({
//   byMass: byMass,
//   byHeight: byHeight,
//   byName: byName,
//   byGender: byGender,
// });

//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every((character) => character.eye_color === "blue");

//2. Does every character have mass more than 40?
const allHeavierThan40 = characters.every((character) => character.mass > 40);

//3. Is every character shorter than 200?
const allShorterThan200 = characters.every((character) => character.height < 200);

//4. Is every character male?
const allMen = characters.every((character) => character.gender === "male");

// console.log({
//   allBlueEyes: allBlueEyes,
//   allHeavierThan40: allHeavierThan40,
//   allShorterThan200: allShorterThan200,
//   allMen: allMen,
// });

//***SOME***
//1. Is there at least one male character?
const manExists = characters.some((character) => character.gender === "male");

//2. Is there at least one character with blue eyes?
const hasBlueEyes = characters.some((character) => character.eye_color === "blue");

//3. Is there at least one character taller than 210?
const tallerThan210 = characters.some((character) => character.height > 210);

//4. Is there at least one character that has mass less than 50?
const lighterThan50 = characters.some((character) => character.mass < 50);

console.log({
  manExists: manExists,
  hasBlueEyes: hasBlueEyes,
  tallerThan210: tallerThan210,
  lighterThan50: lighterThan50,
});
