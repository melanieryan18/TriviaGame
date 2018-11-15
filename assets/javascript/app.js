// You'll create a trivia form with multiple choice or true/false options (your choice).
// STORE QUESTIONS IN ARRAY
var myQuestions = [
    {
        question: "What is the capital of Virginia",
        answers: {
            a: "Virginia Beach",
            b: "Arlington",
            c: "Alexandria"
        },
        correctAnswer: "Arlington"
    },
    {
        question: "What is the capital of Alabama?",
        answers: {
            a: "Montgomery",
            b: "Piedmont",
            c: "Birgmingham"
        },
        correctAnswer: "Montgomery"
    },
    {
        question: "What is the capital of New York?",
        answers: {
            a: "New York City",
            b: "Buffalo",
            c: "Albany",
        },
        correctAnswer: "Albany"
    },
    {
        question: "Oregon?",
        answers: {
            a: "Salem",
            b: "Portland",
            c: "Eugene",
        },
        correctAnswer: "Salem"
    },
    {
        question: "Alaska",
        answers: {
            a: "Juno",
            b: "Anchorage",
            c: "Sitka",
        },
        correctAnswer: "Juno"
    }
];

var i;
for (i = 0; i < myQuestions.length; i++) { 
    console.log(myQuestions[i]);
    $("#quiz").append("<p>"+myQuestions[i].question+"</p>");
    $("#quiz").append('<input type="radio" name="question-'+i+'" value="'+myQuestions[i].answers.a+'"> '+myQuestions[i].answers.a+'<br>')
    $("#quiz").append('<input type="radio" name="question-'+i+'" value="'+myQuestions[i].answers.b+'"> '+myQuestions[i].answers.b+'<br>')
    $("#quiz").append('<input type="radio" name="question-'+i+'" value="'+myQuestions[i].answers.c+'"> '+myQuestions[i].answers.c+'<br>')
}
// add another loop for comparisons

// The player will have a limited amount of time to finish the quiz. 
// setInterval ###
// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't forget to include a countdown timer.

// Don't let the player pick more than one answer per question.

function buildQuiz() { }

function showResults() { }

// display quiz right away
buildQuiz();

// on submit, show results W JQUERY

