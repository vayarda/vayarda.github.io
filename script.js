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
                        new Mot('bleu','あおい',0),
                        new Mot('rouge','あかい',0),
                        new Mot('automne','あき',0),
                        new Mot('ouvrir','あける',0),
                        new Mot('donner','あげる',0),
                        new Mot('matin','あさ',0),
                        new Mot('petit-déjeuner','あさごはん',0),
                        new Mot('après-demain','あさって',0),
                        new Mot('pied','あし',0),
                        new Mot('demain','あした',0),
                        new Mot('jouer','あそぶ',0),
                        new Mot('tête','あたま',0),
                        new Mot('nouveau','あたらしい',0),
                        new Mot('chaud','あつい',0),
                        new Mot('grand-frère','あに',0),
                        new Mot('grande-soeur','あね',0),
                        new Mot('appartement','アパート',0),
                        new Mot('dangereux','あぶない',0),
                        new Mot('sucré','あまい',0),
                        new Mot('pluie','あめ',0),
                        new Mot('laver','あらう',0),
                        new Mot('marcher','あるく',0),
                        new Mot('non','いいえ',0),
                        new Mot('dire','いう',0),
                        new Mot('maison','いえ',0),
                        new Mot('aller','いく',0),
                        new Mot('médecin','いしゃ',0),
                        new Mot('chaise','いす',0),
                        new Mot('occupé','いそがしい',0),
                        new Mot('un','いち',0),
                        new Mot('chien','いぬ',0),
                        new Mot('maintenant','いま',0),
                        new Mot('petite-soeur','いもうと',0),
                        new Mot('entrée','いりぐち',0),
                        new Mot('couleur','いろ',0),
                        new Mot('dessus','うえ',0),
                        new Mot('derrière','うしろ',0),
                        new Mot('chanson','うた',0),
                        new Mot('chanter','うたう',0),
                        new Mot('mer','うみ',0),
                        new Mot('vendre','うる',0),
                        new Mot('manteau','うわぎ',0),
                        new Mot('image','え',0),
                        new Mot('film','えいが',0),
                        new Mot('cinéma','えいがかん',0),
                        new Mot('anglais','えいご',0),
                        new Mot('gare','えき',0),
                        new Mot('ascenseur','エレベーター',0),
                        new Mot('yen','えん',0),
                        new Mot('délicieux','おいしい',0),
                        new Mot('grand','おおきい',0),
                        new Mot('argent','おかね',0),
                        new Mot('thé','おちゃ',0),
                        new Mot('toilettes','おてあらい',0),
                        new Mot('petit-frère','おとうと',0),
                        new Mot('homme','おとこ',0),
                        new Mot('avant-hier','おととい',0),
                        new Mot('adulte','おとな ',0),
                        new Mot('bonne nuit','おやすみなさい',0),
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
    randomIndex = Math.floor(Math.random() * (vocabulaire.length))

    console.log(randomIndex)

    chosenWord = vocabulaire[randomIndex];
}

function displayWord() {
    let div = document.getElementById("word");

    nextWord();

    div.innerHTML = chosenWord.jp;
}

function displayResult(result, answer) {
    let div = document.getElementById("result");
    let robert = document.getElementById("robert");
    let peto = document.getElementById("peto");

    if(result === true)
    {
        div.innerHTML = "Bravo !";
        robert.src = "good-robert.png";
        peto.src = "good-peto.png";
    }
    else
    {
        div.innerHTML = "Aïe, la réponse était : " + answer;
        robert.src = "bad-robert.png";
        peto.src = "bad-peto.png";
    }
}

function changeWord() {
    chosenWord.score += answer === chosenWord.fr ? 1 : 0
    chosenWord.counter++

    displayResult(answer === chosenWord.fr, chosenWord.fr)

    answer = ''
    document.getElementById('answer').value = ''

    displayWord()
}

