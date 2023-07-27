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
                        new Mot('nager','およぐ',0),
                        new Mot('finir','おわる',0),
                        new Mot('musique','おんがく',0),
                        new Mot('femme','おんな',0),
                        new Mot('étranger','がいこくじん',0),
                        new Mot('entreprise','かいしゃ',0),
                        new Mot('escalier','かいだん',0),
                        new Mot('acheter','かう ',0),
                        new Mot('visage','かお',0),
                        new Mot('clé','かぎ',0),
                        new Mot('écrire','かく ',0),
                        new Mot('parapluie','かさ',0),
                        new Mot('prêter','かす',0),
                        new Mot('vent','かぜ ',0),
                        new Mot('famille','かぞく',0),
                        new Mot('école','がっこう',0),
                        new Mot('sac','かばん',0),
                        new Mot('papier','かみ',0),
                        new Mot('appareil photo','カメラ',0),
                        new Mot('mardi','かようび ',0),
                        new Mot('épicé','からい',0),
                        new Mot('emprunter','かりる',0),
                        new Mot('léger','かるい',0),
                        new Mot('calendrier','カレンダー',0),
                        new Mot('rivière','かわ',0),
                        new Mot('mignon','かわいい',0),
                        new Mot('arbre','き',0),
                        new Mot('jaune','きいろい',0),
                        new Mot('écouter','きく',0),
                        new Mot('nord','きた',0),
                        new Mot('guitare','ギター',0),
                        new Mot('sale','きたない',0),
                        new Mot('timbre','きって',0),
                        new Mot('ticket','きっぷ',0),
                        new Mot('hier','きのう',0),
                        new Mot('neuf','きゅう',0),
                        new Mot('aujourd\'hui','きょう',0),
                        new Mot('salle de classe','きょうしつ',0),
                        new Mot('année dernière','きょねん',0),
                        new Mot('beau','きれい',0),
                        new Mot('banque','ぎんこう',0),
                        new Mot('vendredi','きんようび',0),
                        new Mot('chat','ねこ',0),
                        new Mot('poisson','さかな',0),
                        new Mot('souris','ねずみ',0)
                    ]

let chosenWord = vocabulaire[0]
let answer = ''
let numberOfWords = 20
let goodAnswers = 0
let mark = 20

// Listeners

document.getElementById("answer").addEventListener("input", (event) => {
    answer = event.target.value;
})

window.addEventListener('load', (event) => {
    let quiz = document.getElementById("quiz");
    let container_mark = document.getElementById("container-mark");

    quiz.style.display = "none"
    container_mark.style.display = "none"
})

// Functions

function difficulty(number) {
    let quiz = document.getElementById("quiz");
    let home = document.getElementById("home");

    home.style.display = "none"
    quiz.style.display = "grid"

    numberOfWords = number;
    mark = number;

    displayWord()
}

function nextWord() {
    randomIndex = Math.floor(Math.random() * (vocabulaire.length))

    chosenWord = vocabulaire[randomIndex];
}

function displayWord() {
    let div = document.getElementById("word");

    nextWord();

    div.innerHTML = chosenWord.jp;
}

function displayResult(result, answer) {
    numberOfWords--;

    if(result === true)
    {
        goodAnswers++;
    }

    if(numberOfWords === 0)
    {
        let quiz = document.getElementById("quiz");
        let container_mark = document.getElementById("container-mark");

        quiz.style.display = "none";
        container_mark.style.display = "flex";

        let div = document.getElementById("mark")
        let review = document.getElementById("review")

        div.innerHTML = goodAnswers + "/" + mark

        const percent = goodAnswers * 100 / mark

        if(percent < 0.25)
        {
            review.innerHTML = "Pas terrible, privé de bières !"
        }
        else if(percent < 0.5)
        {
            review.innerHTML = "Mouais, t'auras le droit à 1 gyoza..."
        }
        else if(percent < 0.75)
        {
            review.innerHTML = "Okay, okay, t'as le droit à une demi-bière !"
        }
        else
        {
            review.innerHTML = "Waouh, t'as bien mérité une bière !"
        }
    }
    else
    {
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
}

function changeWord() {
    chosenWord.score += answer.toLowerCase() === chosenWord.fr ? 1 : 0
    chosenWord.counter++

    displayResult(answer.toLowerCase() === chosenWord.fr, chosenWord.fr)

    answer = ''
    document.getElementById('answer').value = ''

    displayWord()
}

