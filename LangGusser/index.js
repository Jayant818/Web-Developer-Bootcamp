const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const languageCode = franc('Alle menslike wesens word vry');
if(languageCode =='und'){
    console.log("Couldn't Find that Language ".red)
}
const Guess= langs.where("3",languageCode);
console.log(`The Perfect Guess is ${Guess.name}`.green);
