// JavaScript source code
var QuestionField;
var AnswerField;
var AnswerBall;
var A, B, C, D, E;
var aQ, bQ, cQ, dQ, eQ;
var Aa, Ab, Ac, Ad, Ae;
var QuestionId = 0;
var score = 0;

function get(x) {
    var temp = document.getElementById(x);
    return temp;
}

function Start() {
    QuestionField       = get("QuestionField");
    AnswerField         = get("AnswerField");
    A = get("Aanswer");
    B = get("Banswer");
    C = get("Canswer");
    D = get("Danswer");
    E = get("Eanswer");

    Aa = get("Q1A");
    Ab = get("Q1B");
    Ac = get("Q1C");
    Ad = get("Q1D");
    Ae = get("Q1E");

    aQ = get("firstQuestion");
    bQ = get("secQuestion");
    cQ = get("thirthQuestion");
    dQ = get("fourtQuestion");
    eQ = get("fifthQuestion");

    ShowQuestion(QuestionsForPsychose[QuestionId]);

}

function Update() {
}

function ShowQuestion(target) {
    showElement([aQ, bQ, cQ, dQ, eQ]);
    QuestionField.innerHTML = target.Question;
    A.innerHTML = target.AnswerA;
    B.innerHTML = target.AnswerB;
    if (target.AmountOfAnswers > 2){
        C.innerHTML = target.AnswerC;
        if (target.AmountOfAnswers > 3) {
            D.innerHTML = target.AnswerD;
            if (target.AmountOfAnswers > 4) {
                E.innerHTML = target.AnswerE;
            } else {
                hideElement(eQ);
            }
        } else {
            hideElement([dQ,eQ]);
        }

    } else {
        hideElement([cQ,dQ,eQ]);

    }
    

}

function hideElement(x) {
    for (i = 0; i < x.length ; i++) {
        x[i].style.display = "none";
    }
}
function showElement(x) {
    for (i = 0; i < x.length ; i++) {
        console.log("hi");
        x[i].style.display = "block";
    }

}

function NextQuestion() {
    if (Aa.checked) {
        Aa.checked = false;
      score +=  AnswerValueForPsychose[QuestionId].AnswerAValue;
    } else if (Ab.checked) {
        Ab.checked = false;
        score += AnswerValueForPsychose[QuestionId].AnswerBValue;
    } else if (Ac.checked) {
        Ac.checked = false;
        score += AnswerValueForPsychose[QuestionId].AnswerCValue;
    } else if (Ad.checked) {
        Ad.checked = false;
        score += AnswerValueForPsychose[QuestionId].AnswerDValue;
    } else if (Ae.checked) {
        Ae.checked = false;
        score += AnswerValueForPsychose[QuestionId].AnswerEValue;
    }
    if (QuestionId < QuestionsForPsychose.length - 1) {
        QuestionId++;
        ShowQuestion(QuestionsForPsychose[QuestionId]);
    } else {
        if (score <= 50) {
            console.log("niks");
        } else if (score >= 51 && score <= 100) {
            console.log("lage kans");
        } else if (score >= 101 && score <= 150) {
            console.log("kans op");
        } else if (score > 150) {
            console.log("hoge kans");
        }
    }

}

function click(i){
    console.log("hello");
    document.getElementById(i).style.visibility='visible';
}

window.addEventListener("load", Start,false);
window.setInterval(Update, 150);