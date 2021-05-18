"use strict";
var gameSteps = [
    {
        id: 1,
        question: "God morgon - är du redo för denna dagen?",
        choices: {
            leftBtn: { answerText: "Ja, jag är redo! Tjohoo ", path: 2 },
            rightBtn: { answerText: "Nej, jag vill sova! Godnatt....", path: 7 }
        }
    }, {
        id: 2,
        question: "Vill du ha frukost?",
        choices: {
            leftBtn: { answerText: "Ja, gärna!", path: 3 },
            rightBtn: { answerText: "Nej, usch jag vill inte ha frukost", path: 4 }
        }
    }, {
        id: 3,
        question: "Vad vill du äta till frukost?",
        choices: {
            leftBtn: { answerText: "En kaffe med mjölk och en ostfralla med gurka", path: 4 },
            rightBtn: { answerText: "En äggmacka med kaffe", path: 4 }
        }
    }, {
        id: 4,
        question: "Vad vill du ha på dig idag?",
        choices: {
            leftBtn: { answerText: "En t-shirt och jeans", path: 6 },
            rightBtn: { answerText: "Inget, jag vill vara naken", path: 5 }
        }
    }, {
        id: 5,
        question: "OBS!!! du får inte gå naken.",
        choices: {
            leftBtn: { answerText: "Ok, jag tar kläder och går vidare!", path: 4 },
            rightBtn: null
        }
    }, {
        id: 6,
        question: "Du är nu redo att starta din dag!",
        choices: {
            leftBtn: { answerText: "Åh vad bra! Vi ses i vimlet", path: 1 },
            rightBtn: null
        }
    }, {
        id: 7,
        question: "Sov vidare då - vi ses senare...",
        choices: {
            leftBtn: { answerText: "Nu är jag redo att möta dagen...", path: 1 },
            rightBtn: null
        }
    }
];
var question = document.querySelector("#question"); //hämta question div
var leftBtn = document.querySelector("#leftBtn"); //hämtar vänster knapp
var rightBtn = document.querySelector("#rightBtn"); //hämtar höger knapp
var actualStep;
initGame(); //startar funktionen och kör i glabalscope
function initGame() {
    actualStep = gameSteps[0]; //hämtar array från rad 15
    question.innerText = actualStep.question; //hämtar frågan från arrayen
    leftBtn.innerText = actualStep.choices.leftBtn.answerText; //hämtar val i knappen
    rightBtn.innerText = actualStep.choices.rightBtn.answerText; //hämtar val i knappen
}
function toNextStep(choice) {
    var nextStep;
    gameSteps.forEach(function (step) {
        if (choice == "left" && actualStep.choices.leftBtn) {
            if (step.id == actualStep.choices.leftBtn.path) {
                nextStep = step;
            }
        }
        else if (actualStep.choices.rightBtn) {
            if (step.id == actualStep.choices.rightBtn.path) {
                nextStep = step;
            }
        }
    });
    if (nextStep) {
        actualStep = nextStep;
        updateGameboard();
    }
}
function updateGameboard() {
    question.innerText = actualStep.question;
    leftBtn.style.display = "block";
    rightBtn.style.display = "block";
    if (actualStep.choices.leftBtn) {
        leftBtn.innerText = actualStep.choices.leftBtn.answerText;
    }
    else {
        leftBtn.style.display = "none";
    }
    if (actualStep.choices.rightBtn) {
        rightBtn.innerText = actualStep.choices.rightBtn.answerText;
    }
    else {
        rightBtn.style.display = "none";
    }
}
