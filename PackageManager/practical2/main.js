//import { LoremIpsum } from "lorem-ipsum";

let LoremIpsum = require("lorem-ipsum").LoremIpsum;

//let paragraf = document.querySelector("div");


const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

lorem.generateWords(1);
lorem.generateSentences(5);
console.log(lorem.generateParagraphs(7));

//paragraf.innerHTML = lorem.generateParagraphs(7);

