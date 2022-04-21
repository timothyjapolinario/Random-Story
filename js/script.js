function getRandomElement(array){
    return array[Math.floor(Math.random() * array.length)];
}


body = document.querySelector('.story-holder');
characters = ["Mark", "Jasper", "Josh", "Angeliree", "Gilbert", "Dayang"];
actions = ["kumain", "tumae", "takbo", "umupo", "suminghot", "sumapi"];
objects = ["tae", "tinapay", "burat", "kamote", "kambing", "kalabaw", "fita", "martilyo"];
adjectives = ["manyakis", "malibog", "duwag", "bobo", "supot", "patay gutom", "sabog", "angry birds"];
character1 = getRandomElement(characters)
character2 = getRandomElement(characters)
let story = `
Merong dalawang magkaaway, ang pangalan nila'y ${character1} na ${getRandomElement(adjectives)} at ${character2} na ${getRandomElement(adjectives)}.\n
Mahilig si ${character1} sa ${getRandomElement(objects)}.\n
Si ${character2} naman ay mahilig ${getRandomElement(actions)} ng ${getRandomElement(objects)} `;
body.innerText = story;
