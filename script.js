import { vocabulaire } from './modules/vocabulaire.js';

// class Mot {
//     constructor(fr, jp, score)
//     {
//         this.fr = fr;
//         this.jp = jp;
//         this.score = score;
//         this.counter = 0;
//     }
// }

/************************/
/***    Variables     ***/
/************************/

// const basic_score = 15625

// const vocabulaire = [
//     new Mot(['bleu'],'あおい',basic_score),
//     new Mot(['rouge'],'あかい',basic_score),
//     new Mot(['automne'],'あき',basic_score),
//     new Mot(['ouvrir'],'あける',basic_score),
//     new Mot(['donner', 'offrir'],'あげる',basic_score),
//     new Mot(['matin'],'あさ',basic_score),
//     new Mot(['petit-déjeuner'],'あさごはん',basic_score),
//     new Mot(['après-demain'],'あさって',basic_score),
//     new Mot(['pied', 'jambe'],'あし',basic_score),
//     new Mot(['demain'],'あした',basic_score),
//     new Mot(['jouer'],'あそぶ',basic_score),
//     new Mot(['tête'],'あたま',basic_score),
//     new Mot(['nouveau'],'あたらしい',basic_score),
//     new Mot(['chaud'],'あつい',basic_score),
//     new Mot(['grand-frère'],'あに',basic_score),
//     new Mot(['grande-soeur'],'あね',basic_score),
//     new Mot(['appartement'],'アパート',basic_score),
//     new Mot(['dangereux'],'あぶない',basic_score),
//     new Mot(['sucré'],'あまい',basic_score),
//     new Mot(['pluie'],'あめ',basic_score),
//     new Mot(['laver'],'あらう',basic_score),
//     new Mot(['marcher'],'あるく',basic_score),
//     new Mot(['non'],'いいえ',basic_score),
//     new Mot(['dire'],'いう',basic_score),
//     new Mot(['maison'],'いえ',basic_score),
//     new Mot(['aller'],'いく',basic_score),
//     new Mot(['médecin', 'docteur'],'いしゃ',basic_score),
//     new Mot(['chaise'],'いす',basic_score),
//     new Mot(['occupé'],'いそがしい',basic_score),
//     new Mot(['un'],'いち',basic_score),
//     new Mot(['chien'],'いぬ',basic_score),
//     new Mot(['maintenant'],'いま',basic_score),
//     new Mot(['petite-soeur'],'いもうと',basic_score),
//     new Mot(['entrée'],'いりぐち',basic_score),
//     new Mot(['couleur'],'いろ',basic_score),
//     new Mot(['dessus', 'au-dessus'],'うえ',basic_score),
//     new Mot(['derrière'],'うしろ',basic_score),
//     new Mot(['chanson'],'うた',basic_score),
//     new Mot(['chanter'],'うたう',basic_score),
//     new Mot(['mer'],'うみ',basic_score),
//     new Mot(['vendre'],'うる',basic_score),
//     new Mot(['manteau'],'うわぎ',basic_score),
//     new Mot(['image'],'え',basic_score),
//     new Mot(['film'],'えいが',basic_score),
//     new Mot(['cinéma'],'えいがかん',basic_score),
//     new Mot(['anglais'],'えいご',basic_score),
//     new Mot(['gare'],'えき',basic_score),
//     new Mot(['ascenseur'],'エレベーター',basic_score),
//     new Mot(['yen'],'えん',basic_score),
//     new Mot(['délicieux'],'おいしい',basic_score),
//     new Mot(['grand', 'gros'],'おおきい',basic_score),
//     new Mot(['argent'],'おかね',basic_score),
//     new Mot(['thé'],'おちゃ',basic_score),
//     new Mot(['toilettes'],'おてあらい',basic_score),
//     new Mot(['petit-frère'],'おとうと',basic_score),
//     new Mot(['homme'],'おとこ',basic_score),
//     new Mot(['avant-hier'],'おととい',basic_score),
//     new Mot(['adulte'],'おとな ',basic_score),
//     new Mot(['nager'],'およぐ',basic_score),
//     new Mot(['finir'],'おわる',basic_score),
//     new Mot(['musique'],'おんがく',basic_score),
//     new Mot(['femme'],'おんな',basic_score),
//     new Mot(['étranger'],'がいこくじん',basic_score),
//     new Mot(['entreprise'],'かいしゃ',basic_score),
//     new Mot(['escalier'],'かいだん',basic_score),
//     new Mot(['acheter'],'かう',basic_score),
//     new Mot(['visage'],'かお',basic_score),
//     new Mot(['clé'],'かぎ',basic_score),
//     new Mot(['écrire'],'かく',basic_score),
//     new Mot(['parapluie'],'かさ',basic_score),
//     new Mot(['prêter'],'かす',basic_score),
//     new Mot(['vent'],'かぜ',basic_score),
//     new Mot(['famille'],'かぞく',basic_score),
//     new Mot(['école'],'がっこう',basic_score),
//     new Mot(['sac'],'かばん',basic_score),
//     new Mot(['papier'],'かみ',basic_score),
//     new Mot(['appareil photo'],'カメラ',basic_score),
//     new Mot(['mardi'],'かようび ',basic_score),
//     new Mot(['épicé'],'からい',basic_score),
//     new Mot(['emprunter'],'かりる',basic_score),
//     new Mot(['léger'],'かるい',basic_score),
//     new Mot(['calendrier'],'カレンダー',basic_score),
//     new Mot(['rivière'],'かわ',basic_score),
//     new Mot(['mignon'],'かわいい',basic_score),
//     new Mot(['arbre'],'き',basic_score),
//     new Mot(['jaune'],'きいろい',basic_score),
//     new Mot(['écouter'],'きく',basic_score),
//     new Mot(['nord'],'きた',basic_score),
//     new Mot(['guitare'],'ギター',basic_score),
//     new Mot(['sale'],'きたない',basic_score),
//     new Mot(['timbre'],'きって',basic_score),
//     new Mot(['ticket'],'きっぷ',basic_score),
//     new Mot(['hier'],'きのう',basic_score),
//     new Mot(['neuf'],'きゅう',basic_score),
//     new Mot(['aujourd\'hui'],'きょう',basic_score),
//     new Mot(['salle de classe'],'きょうしつ',basic_score),
//     new Mot(['année dernière'],'きょねん',basic_score),
//     new Mot(['beau'],'きれい',basic_score),
//     new Mot(['banque'],'ぎんこう',basic_score),
//     new Mot(['vendredi'],'きんようび',basic_score),
//     new Mot(['médicament'],'くすり',basic_score),
//     new Mot(['fruit'],'くだもの',basic_score),
//     new Mot(['bouche', 'ouverture'],'くち',basic_score),
//     new Mot(['chaussures'],'くつ',basic_score),
//     new Mot(['chaussettes'],'くつした',basic_score),
//     new Mot(['pays'],'くに',basic_score),
//     new Mot(['voiture', 'automobile'],'くるま',basic_score),
//     new Mot(['noir'],'くろい',basic_score),
//     new Mot(['ce matin'],'けさ',basic_score),
//     new Mot(['mariage'],'けっこん',basic_score),
//     new Mot(['entrée', 'vestibule'],'げんかん',basic_score),
//     new Mot(['cinq'],'ご',basic_score),
//     new Mot(['parc'],'こうえん',basic_score),
//     new Mot(['thé noir'],'こうちゃ',basic_score),
//     new Mot(['voix'],'こえ',basic_score),
//     new Mot(['café'],'コーヒー',basic_score),
//     new Mot(['après-midi'],'ごご',basic_score),
//     new Mot(['matin'],'ごぜん',basic_score),
//     new Mot(['cette année'],'ことし',basic_score),
//     new Mot(['mot'],'ことば',basic_score),
//     new Mot(['enfant'],'こども',basic_score),
//     new Mot(['repas'],'ごはん',basic_score),
//     new Mot(['ce mois', 'ce mois-ci'],'こんげつ',basic_score),
//     new Mot(['cette semaine'],'こんしゅう',basic_score),
//     new Mot(['bonjour'],'こんにちは',basic_score),
//     new Mot(['ce soir'],'こんばん',basic_score),
//     new Mot(['bonsoir'],'こんばんは',basic_score),
//     new Mot(['poisson'],'さかな',basic_score),
//     new Mot(['alcool'],'さけ',basic_score),
//     new Mot(['magazine', 'revue'],'ざっし',basic_score),
//     new Mot(['sucre'],'さとう',basic_score),
//     new Mot(['froid'],'さむい',basic_score),
//     new Mot(['au revoir'],'さようなら',basic_score),
//     new Mot(['assiette'],'さら',basic_score),
//     new Mot(['trois', 'monsieur', 'madame'],'さん',basic_score),
//     new Mot(['promenade', 'balade'],'さんぽ',basic_score),
//     new Mot(['quatre'],'し',basic_score),
//     new Mot(['heure'],'じ',basic_score),
//     new Mot(['sel'],'しお',basic_score),
//     new Mot(['mais', 'cependant'],'しかし',basic_score),
//     new Mot(['travail'],'しごと',basic_score),
//     new Mot(['dictionnaire'],'じしょ',basic_score),
//     new Mot(['calme'],'しずか',basic_score),
//     new Mot(['sous', 'dessous', 'en-dessous'],'した',basic_score),
//     new Mot(['question'],'しつもん',basic_score),
//     new Mot(['vélo', 'bicyclette'],'じてんしゃ',basic_score),
//     new Mot(['fermer', 'attacher'],'しめる',basic_score),
//     new Mot(['photo', 'photographie'],'しゃしん',basic_score),
//     new Mot(['chemise'],'シャツ',basic_score),
//     new Mot(['douche'],'シャワー',basic_score),
//     new Mot(['cours'],'じゅぎょう',basic_score),
//     new Mot(['sauce soja'],'しょうゆ',basic_score),
//     new Mot(['savoir'],'しる',basic_score),
//     new Mot(['blanc'],'しろい',basic_score),
//     new Mot(['journal'],'しんぶん',basic_score),
//     new Mot(['mercredi'],'すいようび',basic_score),
//     new Mot(['jupe'],'スカート',basic_score),
//     new Mot(['immédiatement'],'すぐに',basic_score),
//     new Mot(['un peu'],'すこし',basic_score),
//     new Mot(['frais'],'すずしい',basic_score),
//     new Mot(['cuillère'],'スプーン',basic_score),
//     new Mot(['sport'],'スポーツ',basic_score),
//     new Mot(['pantalon'],'ズボン',basic_score),
//     new Mot(['chaussons','pantoufles'],'スリッパ',basic_score),
//     new Mot(['faire'],'する',basic_score),
//     new Mot(['s\'asseoir'],'すわる',basic_score),
//     new Mot(['pull','sweat'],'セーター',basic_score),
//     new Mot(['savon'],'せっけん',basic_score),
//     new Mot(['mille'],'せん',basic_score),
//     new Mot(['mois dernier'],'せんげつ',basic_score),
//     new Mot(['semaine dernière'],'せんしゅう',basic_score),
//     new Mot(['maître','professeur','enseignant'],'せんせい',basic_score),
//     new Mot(['lessive'],'せんたく',basic_score),
//     new Mot(['ensuite','après'],'そうして',basic_score),
//     new Mot(['extérieur','dehors'],'そと',basic_score),
//     new Mot(['ciel'],'そら',basic_score),
//     new Mot(['université'],'だいがく',basic_score),
//     new Mot(['ambassade'],'たいしかん',basic_score),
//     new Mot(['important'],'たいせつ',basic_score),
//     new Mot(['cuisine'],'だいどころ',basic_score),
//     new Mot(['haut','élevé','cher'],'たかい',basic_score),
//     new Mot(['beaucoup'],'たくさん',basic_score),
//     new Mot(['taxi'],'タクシー',basic_score),
//     new Mot(['se lever'],'たつ',basic_score),
//     new Mot(['immeuble','bâtiment'],'たてもの',basic_score),
//     new Mot(['amusant','agréable','plaisant'],'たのしい',basic_score),
//     new Mot(['tabac'],'たばこ',basic_score),
//     new Mot(['peut-être'],'たぶん',basic_score),
//     new Mot(['nourriture'],'たべもの',basic_score),
//     new Mot(['manger'],'たべる',basic_score),
//     new Mot(['oeuf'],'たまご',basic_score),
//     new Mot(['qui'],'だれ',basic_score),
//     new Mot(['quelqu\'un'],'だれか',basic_score),
//     new Mot(['anniversaire'],'たんじょうび',basic_score),
//     new Mot(['petit'],'ちいさい',basic_score),
//     new Mot(['métro'],'ちかてつ',basic_score),
//     new Mot(['carte','plan'],'ちず',basic_score),
//     new Mot(['père'],'ちち',basic_score),
//     new Mot(['marron'],'ちゃいろ',basic_score),
//     new Mot(['utiliser'],'つかう',basic_score),
//     new Mot(['suivant'],'つぎ',basic_score),
//     new Mot(['bureau'],'つくえ',basic_score),
//     new Mot(['fabriquer','créer'],'つくる',basic_score),
//     new Mot(['allumer'],'つける',basic_score),
//     new Mot(['froid','glacial'],'つめたい',basic_score),
//     new Mot(['fort','puissant'],'つよい',basic_score),
//     new Mot(['main'],'て',basic_score),
//     new Mot(['table'],'テーブル',basic_score),
//     new Mot(['sortir','partir'],'でかける',basic_score),
//     new Mot(['lettre'],'てがみ',basic_score),
//     new Mot(['sortie'],'でぐち',basic_score),
//     new Mot(['test'],'テスト',basic_score),
//     new Mot(['mais'],'でも',basic_score),
//     new Mot(['télévision','télé'],'テレビ',basic_score),
//     new Mot(['météo','temps'],'てんき',basic_score),
//     new Mot(['électricité'],'でんき',basic_score),
//     new Mot(['train'],'でんしゃ',basic_score),
//     new Mot(['téléphone'],'でんわ',basic_score),
//     new Mot(['porte'],'ドア',basic_score),
//     new Mot(['toilettes'],'トイレ',basic_score),
//     new Mot(['pourquoi'],'どうして',basic_score),
//     new Mot(['animal'],'どうぶつ',basic_score),
//     new Mot(['loin','éloigné'],'とおい',basic_score),
//     new Mot(['montre','horloge'],'とけい',basic_score),
//     new Mot(['où'],'どこ',basic_score),
//     new Mot(['lieu','endroit'],'ところ',basic_score),
//     new Mot(['bibliothèque'],'としょかん',basic_score),
//     new Mot(['vraiment','très'],'とても',basic_score),
//     new Mot(['voisin','proche'],'となり',basic_score),
//     new Mot(['sauter','voler'],'とぶ',basic_score),
//     new Mot(['ami'],'ともだち',basic_score),
//     new Mot(['samedi'],'どようび',basic_score),
//     new Mot(['oiseau'],'とり',basic_score),
//     new Mot(['prendre','photographier'],'とる',basic_score),
//     new Mot(['lequel','laquelle'],'どれ',basic_score),
//     new Mot(['couteau'],'ナイフ',basic_score),
//     new Mot(['intérieur'],'なか',basic_score),
//     new Mot(['long'],'ながい',basic_score),
//     new Mot(['chat'],'ねこ',basic_score),
//     new Mot(['souris'],'ねずみ',basic_score)
// ]

const colors = {
                1: "#31B500",
                5: "#8AFF5F",
                25: "#D5FF6F",
                125: "#FFD32E",
                625: "#FF742E",
                3125: "#F20000",
                15625: "#C20000"
                }

let chosenWord = vocabulaire[0]
let answer = ''
let numberOfWords = 20
let goodAnswers = 0
let mark = 20
let qcm_mode = false
let progress_index = 0

/************************/
/***    Listeners     ***/
/************************/

// Récupération du local storage

window.onload = (event) => {
    if(localStorage.getItem("vocabulaire") !== null)
    {
        const saved_vocabulaire = JSON.parse(localStorage.getItem("vocabulaire"))

        saved_vocabulaire.forEach((word) => {
            for(let i=0; i<vocabulaire.length; i++)
            {
                if(word.jp === vocabulaire[i].jp)
                {
                    vocabulaire[i] = word

                    return;
                }
            }
        })
    }
}

// Menu accueil

document.getElementById("start").addEventListener("click", (event) => {
    start()
})

document.getElementById("progression").addEventListener("click", (event) => {
    progression()
})

// Menu progression

document.getElementById("return-menu-progress").addEventListener("mouseover", (event) => {
    document.getElementById("arrow-return-progress").className = "arrow arrow-hover"
})

document.getElementById("return-menu-progress").addEventListener("mouseout", (event) => {
    document.getElementById("arrow-return-progress").className = "arrow"
})

document.getElementById('return-menu-progress').addEventListener("click", (event) => {
    home()
})

document.getElementById("left-index-progress").addEventListener("mouseover", (event) => {
    document.getElementById("arrow-left").className = "arrow arrow-hover"
})

document.getElementById("left-index-progress").addEventListener("mouseout", (event) => {
    document.getElementById("arrow-left").className = "arrow"
})

document.getElementById('left-index-progress').addEventListener("click", (event) => {
    change_index(-1)
})

document.getElementById("right-index-progress").addEventListener("mouseover", (event) => {
    document.getElementById("arrow-right").className = "arrow-right arrow-hover"
})

document.getElementById("right-index-progress").addEventListener("mouseout", (event) => {
    document.getElementById("arrow-right").className = "arrow-right"
})

document.getElementById('right-index-progress').addEventListener("click", (event) => {
    change_index(1)
})

// Menu difficulté

document.getElementById("difficulty-20").addEventListener("click", (event) => {
    difficulty(20);
})

document.getElementById("difficulty-50").addEventListener("click", (event) => {
    difficulty(50);
})

document.getElementById("difficulty-100").addEventListener("click", (event) => {
    difficulty(100);
})

// Menu mode

document.getElementById("mode-qcm").addEventListener("click", (event) => {
    mode(true)
})

document.getElementById("mode-answer").addEventListener("click", (event) => {
    mode(false)
})

document.getElementById("return-menu").addEventListener("mouseover", (event) => {
    document.getElementById("arrow").className = "arrow arrow-hover"
})

document.getElementById("return-menu").addEventListener("mouseout", (event) => {
    document.getElementById("arrow").className = "arrow"
})

document.getElementById('return-menu').addEventListener("click", (event) => {
    home()
})

// Mode clavier

document.getElementById("answer").addEventListener("input", (event) => {
    answer = event.target.value;
})

document.getElementById("answer").addEventListener("keydown", (event) => {
    if(event.key === 'Enter')
    {
        changeWord();
    }
})

document.getElementById("validation").addEventListener("click", (event) => {
    changeWord();
})

document.getElementById("question").addEventListener("transitionend", (event) => {
    document.getElementById("question").className = 'quiz'
})

// Mode QCM

document.querySelectorAll("button[id^=qcm-]").forEach((button) => {
    button.addEventListener("click", (event) => {
        answer = button.innerHTML;

        changeWord();
    })
})

document.getElementById("question-qcm").addEventListener("transitionend", (event) => {
    document.getElementById("question-qcm").className = 'quiz'
})

// Résultats

document.getElementById("return").addEventListener("click", (event) => {
    home();
})

/************************/
/***    Functions     ***/
/************************/

function start() {
    let home = document.getElementById("home");
    let game = document.getElementById("game");

    home.style.display = "none"
    game.style.display = "flex"
}

function progression() {
    let home = document.getElementById("home");
    let progression = document.getElementById("container-progression");
    let container_card = document.getElementById("container-card");
    let percentage_bar = document.getElementById("percentage");
    let index = document.getElementById("index-progression");

    home.style.display = "none"
    progression.style.display = "grid"

    for(let i=30*progress_index; i<(30*progress_index + 30); i++)
    {
        if(i < vocabulaire.length)
        {
            container_card.appendChild(createCard(vocabulaire[i]))
        }
    }

    const score_progress = {
        15625: 7,
        3125: 6,
        625: 5,
        125: 4,
        25: 3,
        5: 2,
        1: 1
    }

    const percentage = 100 - (((vocabulaire.reduce((acc,value) => acc + score_progress[value.score], 0)) - vocabulaire.length) * 100 / (vocabulaire.length * 7 - vocabulaire.length))

    const progress = Object.assign(document.createElement("span"),{className: 'percent-bar'});

    progress.style.width = percentage.toFixed(0) + '%'

    percentage < 25
        ? progress.style.backgroundColor = '#FF742E'
        : percentage < 50
            ? progress.style.backgroundColor = '#FFD32E'
            : percentage < 75
                ? progress.style.backgroundColor = '#8AFF5F'
                : progress.style.backgroundColor = '#31B500'


    if(percentage === 100)
    {
        progress.style.borderTopRightRadius = '20px'
        progress.style.borderBottomRightRadius = '20px'
    }

    percentage_bar.appendChild(progress)

    percentage_bar.appendChild(
        Object.assign(document.createElement('span'),{
            innerHTML: percentage.toFixed(0) + "%",
            className: 'percent'
        })
    )

    index.innerHTML = progress_index + 1
}

function change_index(value)
{
    if((value === -1 && progress_index - 1 >= 0) || (value === 1 && (progress_index + 1)*30 < vocabulaire.length))
    {
        progress_index += value;

        let container_card = document.getElementById("container-card");
        let index = document.getElementById("index-progression");

        container_card.textContent = '';

        for(let i=30*progress_index; i<(30*progress_index + 30); i++)
        {
            if(i < vocabulaire.length)
            {
                container_card.appendChild(createCard(vocabulaire[i]))
            }
        }

        index.innerHTML = progress_index + 1;
    }
}

function createCard(mot) {
    const card = Object.assign(document.createElement('div'),{className: 'card'})
        
    card.appendChild(
        Object.assign(
            document.createElement('div'),
            {
                innerHTML: mot.jp,
                classList: 'card-text'
            }
        )
    )
    
    card.appendChild(
        Object.assign(
            document.createElement('div'),
            {
                innerHTML: mot.fr.reduce((acc,value) => acc === "" ? value : acc + ", " + value, ""),
                classList: 'card-text'
            }
        )
    )

    const progression = Object.assign(document.createElement('div'),{className: 'progression'})
    
    const scores = [15625,3125,625,125,25,5,1]

    scores.forEach((score) =>
    {
        const bar = Object.assign(document.createElement('span'),{className: score === 15625 ? 'progress-bar progress-bar-left' : score === 1 ? 'progress-bar progress-bar-right' : 'progress-bar'})

        bar.style.backgroundColor = score >= mot.score ? colors[mot.score] : 'white'

        progression.appendChild(bar)
    })

    card.appendChild(progression)

    return card
}

function difficulty(number) {
    let difficulty = document.getElementById("difficulty");
    let mode = document.getElementById("mode");

    difficulty.style.display = "none"
    mode.style.display = "grid"

    numberOfWords = number;
    mark = number;
}

function mode(qcm) {

    let quiz = qcm === true ? document.getElementById("quiz-qcm") : document.getElementById("quiz");
    let game = document.getElementById("game");

    game.style.display = "none"
    quiz.style.display = "grid"

    qcm_mode = qcm

    displayWord();
}

function nextWord() {
    let randomIndex = Math.floor(Math.random() * (vocabulaire.reduce((acc,value) => acc + value.score, 0))) + 1

    let cumScore = 0

    for(let i=0; i< vocabulaire.length; i++)
    {
        cumScore += vocabulaire[i].score

        if(randomIndex <= cumScore)
        {
            chosenWord = vocabulaire[i]
            return
        }
    }
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

        let currentIndex = answers.length;

        while (currentIndex != 0) {

            // Pick a remaining element.
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [answers[currentIndex], answers[randomIndex]] = [answers[randomIndex], answers[currentIndex]];
        }

        for(let i=0; i<8; i++)
        {
            buttons[i].innerHTML = answers[i]
        }
    }
}

function changeWord() {
    chosenWord.score += chosenWord.fr.includes(answer.toLowerCase()) 
                            ? chosenWord.score > 1
                                ? chosenWord.score === 5
                                    ? -4
                                    : chosenWord.score === 25
                                        ? -20
                                        : chosenWord.score === 125
                                            ? -100
                                            : chosenWord.score === 625
                                                ? -500
                                                : chosenWord.score === 3125
                                                    ? -2500
                                                    : -12500
                                : 0
                            : chosenWord.score < 121
                                ? chosenWord.score === 1
                                    ? 4
                                    : chosenWord.score === 5
                                        ? 20
                                        : chosenWord.score === 25
                                            ? 100
                                            : chosenWord.score === 125
                                                ? 500
                                                : chosenWord.score === 625
                                                    ? 2500
                                                    : 12500
                                : 0
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

        window.localStorage.setItem('vocabulaire',JSON.stringify(vocabulaire))
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
    let difficulty = document.getElementById("difficulty");
    let mode = document.getElementById("mode");
    let result = document.getElementById("result");
    let result_qcm = document.getElementById("result-qcm");
    let question = document.getElementById("question");
    let question_qcm = document.getElementById("question-qcm");
    let robert = document.getElementById("robert");
    let robert_qcm = document.getElementById("robert-qcm");
    let peto = document.getElementById("peto");
    let peto_qcm = document.getElementById("peto-qcm");
    let progression = document.getElementById("container-progression");
    let percentage = document.getElementById("percentage");
    let cards = document.getElementById("container-card");

    container_mark.style.display = "none";
    home.style.display = "grid";
    difficulty.style.display = "flex";
    mode.style.display = "none";
    progression.style.display = "none";

    percentage.textContent = '';
    cards.textContent = '';

    chosenWord = vocabulaire[0]
    answer = ''
    numberOfWords = 20
    goodAnswers = 0
    mark = 20
    qcm_mode = false
    progress_index = 0
    result.innerHTML = ''
    result_qcm.innerHTML = ''
    question.className = 'quiz'
    question_qcm.className = 'quiz'
    robert.src = ''
    robert_qcm.src = ''
    peto.src = ''
    peto_qcm.src = ''
}