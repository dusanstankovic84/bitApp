let funnyWords = require('funny-words');
let randomWords = require('random-words');
let oneLinerJoke = require('one-liner-joke');
let figlet = require('figlet');
let cowsay = require("cowsay");


/* funny words */
const mixWords = (words) => funnyWords(words);
const text = mixWords("mis niz pusku, mis uz pusku");
console.log(text);

console.log(funnyWords("Don't worry, be happy!"));



/* random words */
const randomArray = (numb) => console.log(randomWords(numb));
randomArray(10);

const randomJoinArray = (numb, connect) => console.log(randomWords(({ exactly: 5, join: connect })));
randomJoinArray(5, "*");

console.log(randomWords(4));



/* oneliner joke */
const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body);
console.log(getRandomJoke.tags);



/* figlet */
const sampras = (string) => figlet(string, function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

sampras("sam pojede prase");



figlet('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});




/* cowsay */
const kravica = (cokoladno, eyes, tongue) => console.log(cowsay.say({
    text: cokoladno,
    e: eyes,
    T: tongue
}));

kravica("dajem mleko", "**", "V ");

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));



