// JavaScript source code
var QuestionField;
var AnswerField;
var AnswerBall;

function get(x) {
    var temp = document.getElementById(x);
    return temp;
}

function Start() {
    QuestionField       = get("QuestionField");
    AnswerField         = get("AnswerField");
    AnswerBall          = get("Ball");


}

function Update() {
    ShowQuestion();
    moveBall(AnswerBall);
}

function ShowQuestion(Question) {
    QuestionField.innerHTML = Question;

}

function moveBall(target) {
    console.log("oiii");

}
function NextQuestion() {

}

window.addEventListener("load", Start,false);
window.setInterval(Update, 150);