// JavaScript source code
var AnswerValueForPsychose = [
    new AnswerValues(0, 5, 0, 5, 10, 15, 20),
    new AnswerValues(1, 5, 0, 5, 10, 15, 20),
    new AnswerValues(2, 5, 0, 5, 10, 15, 20),
    new AnswerValues(3, 5, 0, 5, 10, 15, 20),
    new AnswerValues(4, 5, 0, 5, 10, 15, 20),
    new AnswerValues(5, 3, 20, 10, 0),
    new AnswerValues(6, 5, 0, 5, 10, 15, 20),
    new AnswerValues(7, 5, 0, 5, 10, 15, 20),
    new AnswerValues(8, 5, 0, 5, 10, 15, 20),
    new AnswerValues(9, 5, 0, 5, 10, 15, 20),
];

var QuestionsForPsychose = [
   new QA(0, 5, "Ben je meer teruggetrokken dan normaal?", "Niet", "Weinig", "Regelmatig", "Vaak", "Altijd"),
   new QA(1, 5, "Hoe vaak ben je schuw of angstig geweest deze week?", "Niet", "Weinig", "Regelmatig", "Vaak", "Altijd"),
   new QA(2, 5, "Hoe vaak heb je concentratieproblemen?", "Niet", "Weinig", "Regelmatig", "Vaak", "Altijd"),
   new QA(3, 5, "Hoe vaak ben je snel geirriteerd?", "Niet", "Weinig", "Regelmatig", "Vaak", "Altijd"),
   new QA(4, 5, "Presteer je minder goed op school of op het werk dan normaal?", "Niet", "Weinig", "Regelmatig", "Vaak", "Altijd"),
   new QA(5, 3, "Heb je minder geslapen dan normaal?", "minder ", "beetje ", "normaal "),
   new QA(6, 5, "Hoe vaak heb je problemen in contacten met anderen?", "Niet", "Weinig", "Regelmatig", "Vaak", "Altijd"),
   new QA(7, 5, "Hoe vaak ben je wantrouwend of achterdochtig?", "Niet", "Weinig", "Regelmatig", "Vaak", "Altijd"),
   new QA(8, 5, "Hoe vaak praat je in jezelf ?", "Niet", "Weinig", "Regelmatig", "Vaak", "Altijd"),
   new QA(9, 5, "Hoe vaak ervaar je dingen die er niet zijn?", "Niet", "Weinig", "Regelmatig", "Vaak", "Altijd"),

];

function AnswerValues(idNmbr, AmountOfAnswers, AnswerAValue, AnswerBValue, AnswerCValue, AnswerDValue, AnswerEValue) {
    this.idNmbr = idNmbr;
    this.AmountOfAnswers = AmountOfAnswers;
    this.AnswerAValue = AnswerAValue;
    this.AnswerBValue = AnswerBValue;
    if (AmountOfAnswers > 2) {
        this.AnswerCValue = AnswerCValue;
        if (AmountOfAnswers > 4) {
            this.AnswerDValue = AnswerDValue;
            if (AmountOfAnswers == 5) {
                this.AnswerEValue = AnswerEValue;
            } else {

                this.AnswerEValue = null;
            }
        } else {
            this.AnswerDValue = null;

        }
    } else {
        this.AnswerCValue = null;
        this.AnswerDValue = null;
    }

}

function QA(idNmbr, AmountOfAnswers, Question, AnswerA, AnswerB, AnswerC, AnswerD, AnswerE) {
    this.idNmbr = idNmbr;
    this.AmountOfAnswers = AmountOfAnswers;
    this.Question = Question;
    this.AnswerA = AnswerA;
    this.AnswerB = AnswerB;
    if (AmountOfAnswers > 2) {
        this.AnswerC = AnswerC;
        if (AmountOfAnswers > 4) {
            this.AnswerD = AnswerD;
            if (AmountOfAnswers == 5) {
                this.AnswerE = AnswerE;
            } else {

                this.AnswerE = null;
            }
        } else {
            this.AnswerD = null;

        }
    } else {
        this.AnswerC = null;
        this.AnswerD = null;
    }

}