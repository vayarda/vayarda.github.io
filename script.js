class Mot {
    constructor(fr, jp, score)
    {
        this.fr = fr;
        this.jp = jp;
        this.score = score;
        this.counter = 0;
    }

    getPercentage()
    {
        return this.counter === 0 ? -1 : this.score
    }
}

// Variables

const vocabulaire = [
                        new Mot('chien','いぬ',0),
                        new Mot('chat','ねこ',0),
                        new Mot('poisson','さかな',0),
                        new Mot('souris','ねずみ',0)
                    ]

let chosenWord = vocabulaire[0]
let answer = ''

// Listeners

document.getElementById("answer").addEventListener("input", (event) => {
    answer = event.target.value;
})

window.addEventListener('load', (event) => {
    displayWord();
})

// Functions

function nextWord() {
    vocabulaire.forEach((mot) => {
        console.log(mot)
        console.log("Percentage : "+mot.getPercentage())

        if(mot.getPercentage() < chosenWord.getPercentage())
        {
            chosenWord = mot;
        }
    })
}

function displayWord() {
    let div = document.getElementById("word");

    nextWord();

    div.innerHTML = chosenWord.jp;
}

function displayResult(result, answer) {
    let div = document.getElementById("result");
    // let img = document.getElementById("image");

    if(result === true)
    {
        div.innerHTML = "Bravo !";
        // img.src = "good.png";
    }
    else
    {
        div.innerHTML = "Aïe, la réponse était : " + answer;
        // img.src = "bad.png";
    }
}

function changeWord() {
    console.log('------------')

    chosenWord.score += answer === chosenWord.fr ? 1 : 0
    chosenWord.counter++

    displayResult(answer === chosenWord.fr, chosenWord.fr)

    answer = ''
    document.getElementById('answer').value = ''

    displayWord()
}

