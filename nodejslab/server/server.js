const path = require("path");
const fs = require("fs");

const chirpArr = [
    {
        message: "Everybody get your chirp on!",
        user: "Donald Duck"
    },
    {
        message: "Chirp AWAY!!",
        user: "Darkwing Duck"
    },
    {
        message: "Chirpitty Chirp!!",
        user: "Huey Duck"
    },
    {
        message: "I can finally chirp!",
        user: "Louie Duck"
    },
    {
        message: "Look at me chirping and chirping",
        user: "Dewey Duck"
    }
];

const writePath = path.join(__dirname, "chirps.json");

fs.writeFile(writePath, JSON.stringify(chirpArr), function (err) {
    if (err) throw err;
    console.log('Got It!');
});

fs.readFile('chirps.json', function (err, data) {
    if (err) throw err;
    console.log(JSON.parse(data));
});