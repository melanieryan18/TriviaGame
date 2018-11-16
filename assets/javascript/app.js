// The player will have a limited amount of time to finish the quiz. 
// setInterval ###
// The game ends whe n the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't forget to include a countdown timer.
// make quiz a function that runs on button click?
// You'll create a trivia form with multiple choice or true/false options (your choice).


// ON START CLICK, START FUNCTION FOR EVERYTHING

$("#start").on("click", startGame());
function startGame() {

    // $("#startGame").hide();
    console.log("its working");
   
    // Start timer goes here
    clearInterval(timerID);
    var timer = 30;
    var timerID = setInterval(function () {
        timer--;
        $("#displayText").text(timer);
        if (timer === 0) {
        }
    }, 1000)


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
            question: "What is the capital of Oregon?",
            answers: {
                a: "Salem",
                b: "Portland",
                c: "Eugene",
            },
            correctAnswer: "Salem"
        },
        {
            question: "What is the capital of Alaska",
            answers: {
                a: "Juno",
                b: "Anchorage",
                c: "Sitka",
            },
            correctAnswer: "Juno"
        }
    ];

    var score = 0;


    var i;
    for (i = 0; i < myQuestions.length; i++) {
        console.log(myQuestions[i]);
        $("#quiz").append("<p>" + myQuestions[i].question + "</p>");
        $("#quiz").append('<input type="radio" name="question-' + i + '" value="' + myQuestions[i].answers.a + '"> ' + myQuestions[i].answers.a + '<br>')
        $("#quiz").append('<input type="radio" name="question-' + i + '" value="' + myQuestions[i].answers.b + '"> ' + myQuestions[i].answers.b + '<br>')
        $("#quiz").append('<input type="radio" name="question-' + i + '" value="' + myQuestions[i].answers.c + '"> ' + myQuestions[i].answers.c + '<br>')
    }



}




    // write a for loop that turns the user answers into an array
    // compare the answers to the correct 




// create new variable for user input to myQuestions

// $("#submit").on("click", function(){
//     var x = $(this).data("questions");
//     console.log(x);
// // })
// function check(){
//     $("#submit").on("click")
//     var i;
//     for (i = 0; i < myQuestions.answers; i++) {
//         console.log(myQuestions.answers);
//         if
//     }
// }


// for (var i=0; i < myQuestions.length; i+){
//     // store responses as variable to compare like in class on 11/15
//     var response = input.$(name.value);
//     // grab value from HTML to compare
//     // if answer is correct, score goes up. If not, nothing changes
//     if (response == questions[i].answer) {
//         score++;        
//     }
//     else {

//     }
// }


// add a function to run on button click for submit the quiz that compares the answer to the question




// Don't let the player pick more than one answer per question.

// function buildQuiz() { }

// function showResults() { }

// // display quiz right away
// buildQuiz();

// on submit, show results W JQUERY

