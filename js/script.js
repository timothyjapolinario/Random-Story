function getRandomElement(array){
    return array[Math.floor(Math.random() * array.length)];
}


body = document.querySelector('.story-holder');
characters = ["Mark", "Jasper", "Josh", "Angeliree", "Gilbert", "Dayang"];
actions = ["kumain", "tumae", "takbo", "umupo", "suminghot", "sumapi"];
objects = ["tae", "tinapay", "burat", "kamote", "kambing", "kalabaw", "fita", "martilyo"];
adjectives = ["manyakis", "malibog", "duwag", "bobo", "supot", "patay gutom", "sabog", "angry birds"];

let story = `Merong dalawang magkaaway, ang pangalan nila'y ${getRandomElement(characters)} at ${getRandomElement(characters)}`;
body.innerText = story;
