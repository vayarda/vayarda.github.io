import { vocabulaire } from './modules/vocabulaire.js';

// class Mot {
//     constructor(fr, jp, score)
//     {
//         this.fr = fr;
//         this.jp = jp;
//         this.score = score;
//         this.counter = 0;
//     }

//     getPercentage()
//     {
//         return this.counter === 0 ? -1 : this.score
//     }
// }

// // Variables

// const vocabulaire = [
//     new Mot(['bleu'],'あおい',0),
//     new Mot(['rouge'],'あかい',0),
//     new Mot(['automne'],'あき',0),
//     new Mot(['ouvrir'],'あける',0),
//     new Mot(['donner', 'offrir'],'あげる',0),
//     new Mot(['matin'],'あさ',0),
//     new Mot(['petit-déjeuner'],'あさごはん',0),
//     new Mot(['après-demain'],'あさって',0),
//     new Mot(['pied', 'jambe'],'あし',0),
//     new Mot(['demain'],'あした',0),
//     new Mot(['jouer'],'あそぶ',0),
//     new Mot(['tête'],'あたま',0),
//     new Mot(['nouveau'],'あたらしい',0),
//     new Mot(['chaud'],'あつい',0),
//     new Mot(['grand-frère'],'あに',0),
//     new Mot(['grande-soeur'],'あね',0),
//     new Mot(['appartement'],'アパート',0),
//     new Mot(['dangereux'],'あぶない',0),
//     new Mot(['sucré'],'あまい',0),
//     new Mot(['pluie'],'あめ',0),
//     new Mot(['laver'],'あらう',0),
//     new Mot(['marcher'],'あるく',0),
//     new Mot(['non'],'いいえ',0),
//     new Mot(['dire'],'いう',0),
//     new Mot(['maison'],'いえ',0),
//     new Mot(['aller'],'いく',0),
//     new Mot(['médecin', 'docteur'],'いしゃ',0),
//     new Mot(['chaise'],'いす',0),
//     new Mot(['occupé'],'いそがしい',0),
//     new Mot(['un'],'いち',0),
//     new Mot(['chien'],'いぬ',0),
//     new Mot(['maintenant'],'いま',0),
//     new Mot(['petite-soeur'],'いもうと',0),
//     new Mot(['entrée'],'いりぐち',0),
//     new Mot(['couleur'],'いろ',0),
//     new Mot(['dessus', 'au-dessus'],'うえ',0),
//     new Mot(['derrière'],'うしろ',0),
//     new Mot(['chanson'],'うた',0),
//     new Mot(['chanter'],'うたう',0),
//     new Mot(['mer'],'うみ',0),
//     new Mot(['vendre'],'うる',0),
//     new Mot(['manteau'],'うわぎ',0),
//     new Mot(['image'],'え',0),
//     new Mot(['film'],'えいが',0),
//     new Mot(['cinéma'],'えいがかん',0),
//     new Mot(['anglais'],'えいご',0),
//     new Mot(['gare'],'えき',0),
//     new Mot(['ascenseur'],'エレベーター',0),
//     new Mot(['yen'],'えん',0),
//     new Mot(['délicieux'],'おいしい',0),
//     new Mot(['grand', 'gros'],'おおきい',0),
//     new Mot(['argent'],'おかね',0),
//     new Mot(['thé'],'おちゃ',0),
//     new Mot(['toilettes'],'おてあらい',0),
//     new Mot(['petit-frère'],'おとうと',0),
//     new Mot(['homme'],'おとこ',0),
//     new Mot(['avant-hier'],'おととい',0),
//     new Mot(['adulte'],'おとな ',0),
//     new Mot(['nager'],'およぐ',0),
//     new Mot(['finir'],'おわる',0),
//     new Mot(['musique'],'おんがく',0),
//     new Mot(['femme'],'おんな',0),
//     new Mot(['étranger'],'がいこくじん',0),
//     new Mot(['entreprise'],'かいしゃ',0),
//     new Mot(['escalier'],'かいだん',0),
//     new Mot(['acheter'],'かう ',0),
//     new Mot(['visage'],'かお',0),
//     new Mot(['clé'],'かぎ',0),
//     new Mot(['écrire'],'かく ',0),
//     new Mot(['parapluie'],'かさ',0),
//     new Mot(['prêter'],'かす',0),
//     new Mot(['vent'],'かぜ ',0),
//     new Mot(['famille'],'かぞく',0),
//     new Mot(['école'],'がっこう',0),
//     new Mot(['sac'],'かばん',0),
//     new Mot(['papier'],'かみ',0),
//     new Mot(['appareil photo'],'カメラ',0),
//     new Mot(['mardi'],'かようび ',0),
//     new Mot(['épicé'],'からい',0),
//     new Mot(['emprunter'],'かりる',0),
//     new Mot(['léger'],'かるい',0),
//     new Mot(['calendrier'],'カレンダー',0),
//     new Mot(['rivière'],'かわ',0),
//     new Mot(['mignon'],'かわいい',0),
//     new Mot(['arbre'],'き',0),
//     new Mot(['jaune'],'きいろい',0),
//     new Mot(['écouter'],'きく',0),
//     new Mot(['nord'],'きた',0),
//     new Mot(['guitare'],'ギター',0),
//     new Mot(['sale'],'きたない',0),
//     new Mot(['timbre'],'きって',0),
//     new Mot(['ticket'],'きっぷ',0),
//     new Mot(['hier'],'きのう',0),
//     new Mot(['neuf'],'きゅう',0),
//     new Mot(['aujourd\'hui'],'きょう',0),
//     new Mot(['salle de classe'],'きょうしつ',0),
//     new Mot(['année dernière'],'きょねん',0),
//     new Mot(['beau'],'きれい',0),
//     new Mot(['banque'],'ぎんこう',0),
//     new Mot(['vendredi'],'きんようび',0),
//     new Mot(['médicament'],'くすり',0),
//     new Mot(['fruit'],'くだもの',0),
//     new Mot(['bouche', 'ouverture'],'くち',0),
//     new Mot(['chaussures'],'くつ',0),
//     new Mot(['chaussettes'],'くつした',0),
//     new Mot(['pays'],'くに',0),
//     new Mot(['voiture', 'automobile'],'くるま',0),
//     new Mot(['noir'],'くろい',0),
//     new Mot(['ce matin'],'けさ',0),
//     new Mot(['mariage'],'けっこん',0),
//     new Mot(['entrée', 'vestibule'],'げんかん',0),
//     new Mot(['cinq'],'ご',0),
//     new Mot(['parc'],'こうえん',0),
//     new Mot(['thé noir'],'こうちゃ',0),
//     new Mot(['voix'],'こえ',0),
//     new Mot(['café'],'コーヒー',0),
//     new Mot(['après-midi'],'ごご',0),
//     new Mot(['matin'],'ごぜん',0),
//     new Mot(['cette année'],'ことし',0),
//     new Mot(['mot'],'ことば',0),
//     new Mot(['enfant'],'こども',0),
//     new Mot(['repas'],'ごはん',0),
//     new Mot(['ce mois', 'ce mois-ci'],'こんげつ',0),
//     new Mot(['cette semaine'],'こんしゅう',0),
//     new Mot(['bonjour'],'こんにちは',0),
//     new Mot(['ce soir'],'こんばん',0),
//     new Mot(['bonsoir'],'こんばんは',0),
//     new Mot(['poisson'],'さかな',0),
//     new Mot(['alcool'],'さけ',0),
//     new Mot(['magazine', 'revue'],'ざっし',0),
//     new Mot(['sucre'],'さとう',0),
//     new Mot(['froid'],'さむい',0),
//     new Mot(['au revoir'],'さようなら',0),
//     new Mot(['assiette'],'さら',0),
//     new Mot(['trois', 'monsieur', 'madame'],'さん',0),
//     new Mot(['promenade', 'balade'],'さんぽ',0),
//     new Mot(['quatre'],'し',0),
//     new Mot(['heure'],'じ',0),
//     new Mot(['sel'],'しお',0),
//     new Mot(['mais', 'cependant'],'しかし',0),
//     new Mot(['travail'],'しごと',0),
//     new Mot(['dictionnaire'],'じしょ',0),
//     new Mot(['calme'],'しずか',0),
//     new Mot(['sous', 'dessous', 'en-dessous'],'した',0),
//     new Mot(['question'],'しつもん',0),
//     new Mot(['vélo', 'bicyclette'],'じてんしゃ',0),
//     new Mot(['fermer', 'attacher'],'しめる',0),
//     new Mot(['photo', 'photographie'],'しゃしん',0),
//     new Mot(['chemise'],'シャツ',0),
//     new Mot(['douche'],'シャワー',0),
//     new Mot(['cours'],'じゅぎょう',0),
//     new Mot(['sauce soja'],'しょうゆ',0),
//     new Mot(['savoir'],'しる',0),
//     new Mot(['blanc'],'しろい',0),
//     new Mot(['journal'],'しんぶん',0),
//     new Mot(['mercredi'],'すいようび',0),
//     new Mot(['jupe'],'スカート',0),
//     new Mot(['immédiatement'],'すぐに',0),
//     new Mot(['un peu'],'すこし',0),
//     new Mot(['frais'],'すずしい',0),
//     new Mot(['cuillère'],'スプーン',0),
//     new Mot(['sport'],'スポーツ',0),
//     new Mot(['pantalon'],'ズボン',0),
//     new Mot(['chaussons','pantoufles'],'スリッパ',0),
//     new Mot(['faire'],'する',0),
//     new Mot(['s\'asseoir'],'すわる',0),
//     new Mot(['pull','sweat'],'セーター',0),
//     new Mot(['savon'],'せっけん',0),
//     new Mot(['mille'],'せん',0),
//     new Mot(['mois dernier'],'せんげつ',0),
//     new Mot(['semaine dernière'],'せんしゅう',0),
//     new Mot(['maître','professeur','enseignant'],'せんせい',0),
//     new Mot(['lessive'],'せんたく',0),
//     new Mot(['ensuite','après'],'そうして',0),
//     new Mot(['extérieur','dehors'],'そと',0),
//     new Mot(['ciel'],'そら',0),
//     new Mot(['université'],'だいがく',0),
//     new Mot(['ambassade'],'たいしかん',0),
//     new Mot(['important'],'たいせつ',0),
//     new Mot(['cuisine'],'だいどころ',0),
//     new Mot(['haut','élevé','cher'],'たかい',0),
//     new Mot(['chat'],'ねこ',0),
//     new Mot(['souris'],'ねずみ',0)
// ]

let chosenWord = vocabulaire[0]
let answer = ''
let numberOfWords = 20
let goodAnswers = 0
let mark = 20
let qcm_mode = false

// Listeners

document.getElementById("answer").addEventListener("input", (event) => {
    answer = event.target.value;
})

document.getElementById("difficulty-20").addEventListener("click", (event) => {
    difficulty(20);
})

document.getElementById("difficulty-50").addEventListener("click", (event) => {
    difficulty(50);
})

document.getElementById("difficulty-100").addEventListener("click", (event) => {
    difficulty(100);
})

document.getElementById("mode-qcm").addEventListener("click", (event) => {
    mode(true)
})

document.getElementById("mode-answer").addEventListener("click", (event) => {
    mode(false)
})

document.getElementById("validation").addEventListener("click", (event) => {
    changeWord();
})

document.querySelectorAll("button[id^=qcm-]").forEach((button) => {
    button.addEventListener("click", (event) => {
        answer = button.innerHTML;

        changeWord();
    })
})

document.getElementById("question").addEventListener("transitionend", (event) => {
    document.getElementById("question").className = 'quiz'
})

document.getElementById("question-qcm").addEventListener("transitionend", (event) => {
    document.getElementById("question-qcm").className = 'quiz'
})

document.getElementById("answer").addEventListener("keydown", (event) => {
    if(event.key === 'Enter')
    {
        changeWord();
    }
})

document.getElementById("return").addEventListener("click", (event) => {
    home();
})

// window.addEventListener('load', (event) => {})

// Functions

function difficulty(number) {
    let difficulty = document.getElementById("difficulty");
    let mode = document.getElementById("mode");

    difficulty.style.display = "none"
    mode.style.display = "flex"

    numberOfWords = number;
    mark = number;
}

function mode(qcm) {

    let quiz = qcm === true ? document.getElementById("quiz-qcm") : document.getElementById("quiz");
    let home = document.getElementById("home");

    home.style.display = "none"
    quiz.style.display = "grid"

    qcm_mode = qcm

    displayWord();
}

function nextWord() {
    let randomIndex = Math.floor(Math.random() * (vocabulaire.length))

    chosenWord = vocabulaire[randomIndex];
}

function displayWord() {
    let div = qcm_mode === true ? document.getElementById("word-qcm") : document.getElementById("word");

    nextWord();

    div.innerHTML = chosenWord.jp;

    if(qcm_mode === true)
    {
        let buttons = document.querySelectorAll("button[id^=qcm-]");

        let answers = [chosenWord.fr[0]];

        for(let i=0; i<7; i++)
        {
            let randomIndex = Math.floor(Math.random() * (vocabulaire.length))

            while(answers.includes(vocabulaire[randomIndex].fr[0]))
            {
                randomIndex = Math.floor(Math.random() * (vocabulaire.length))
            }

            answers.push(vocabulaire[randomIndex].fr[0])
        }

        console.log(answers)

        let currentIndex = answers.length;

        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [answers[currentIndex], answers[randomIndex]] = [answers[randomIndex], answers[currentIndex]];
        }

        console.log(answers)

        for(let i=0; i<8; i++)
        {
            buttons[i].innerHTML = answers[i]
        }
    }
}

function changeWord() {
    chosenWord.score += chosenWord.fr.includes(answer.toLowerCase()) ? 1 : 0
    chosenWord.counter++

    displayResult(chosenWord.fr.includes(answer.toLowerCase()), chosenWord.fr.reduce((acc,value) => acc === "" ? value : acc + ", " + value, ""))

    answer = ''
    document.getElementById('answer').value = ''

    displayWord()
}

function displayResult(result, answer) {
    numberOfWords--;

    if(result === true)
    {
        goodAnswers++;
    }

    if(numberOfWords === 0)
    {
        let quiz = qcm_mode === true ? document.getElementById("quiz-qcm") : document.getElementById("quiz");
        let container_mark = document.getElementById("container-mark");

        quiz.style.display = "none";
        container_mark.style.display = "flex";

        let div = document.getElementById("mark")
        let review = document.getElementById("review")

        div.innerHTML = goodAnswers + "/" + mark

        const percent = goodAnswers * 100 / mark

        if(percent < 25)
        {
            review.innerHTML = "Pas terrible, privé de bières !"
        }
        else if(percent < 50)
        {
            review.innerHTML = "Mouais, t'auras le droit à 1 gyoza..."
        }
        else if(percent < 75)
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
        let div = qcm_mode === true ? document.getElementById("result-qcm") : document.getElementById("result");
        let question = qcm_mode === true ? document.getElementById("question-qcm") : document.getElementById("question");
        let robert = qcm_mode === true ? document.getElementById("robert-qcm") : document.getElementById("robert");
        let peto = qcm_mode === true ? document.getElementById("peto-qcm") : document.getElementById("peto");

        if(result === true)
        {
            div.innerHTML = "Bravo !";
            div.className = 'good';
            question.className = 'quiz quiz-good';
            robert.src = "good-robert.png";
            peto.src = "good-peto.png";
        }
        else
        {
            div.innerHTML = "Aïe, la réponse était : " + answer;
            div.className = 'bad';
            question.className = 'quiz quiz-bad';
            robert.src = "bad-robert.png";
            peto.src = "bad-peto.png";
        }
    }
}

function home() {
    let container_mark = document.getElementById("container-mark");
    let home = document.getElementById("home");
    let result = document.getElementById("result");
    let result_qcm = document.getElementById("result-qcm");
    let question = document.getElementById("question");
    let question_qcm = document.getElementById("question-qcm");
    let robert = document.getElementById("robert");
    let robert_qcm = document.getElementById("robert-qcm");
    let peto = document.getElementById("peto");
    let peto_qcm = document.getElementById("peto-qcm");

    container_mark.style.display = "none";
    home.style.display = "flex";

    chosenWord = vocabulaire[0]
    answer = ''
    numberOfWords = 20
    goodAnswers = 0
    mark = 20
    qcm_mode = false
    result.innerHTML = ''
    result_qcm.innerHTML = ''
    question.className = 'quiz'
    question_qcm.className = 'quiz'
    robert.src = ''
    robert_qcm.src = ''
    peto.src = ''
    peto_qcm.src = ''
}