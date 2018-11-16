// The player will have a limited amount of time to finish the quiz. 
// setInterval ###
// The game ends whe n the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't forget to include a countdown timer.
// make quiz a function that runs on button click?
// You'll create a trivia form with multiple choice or true/false options (your choice).


// ON START CLICK, START FUNCTION FOR EVERYTHING
$("#start").on("click", startGame);
function startGame() {

    // $("#startGame").hide();
    console.log("its working");

    // Start timer goes here
    var timer = 30;
    var timerID = setInterval(function () {
        timer--;
        $("#clock").text(timer);
        if (timer === 0) {
            // $("#results").unhide;
            $("#display").text("00.00");
            clearInterval(timerID);
            finish();
        }

    }, 1000);

}
// STORE QUESTIONS IN ARRAY
var myQuestions = [
    {
        question: "What is the capital of Virginia",
        answers: {
            a: "Virginia Beach",
            b: "Richmond",
            c: "Alexandria"
        },
        correctAnswer: "Richmond"
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


// DYNAMICALLY ADD QUESTIONS TO HTML
var i;
for (i = 0; i < myQuestions.length; i++) {
    console.log(myQuestions[i]);
    $("#quiz").append("<p>" + myQuestions[i].question + "</p>");
    $("#quiz").append('<input type="radio" name="question-' + i + '" value="' + myQuestions[i].answers.a + '"> ' + myQuestions[i].answers.a + '<br>')
    $("#quiz").append('<input type="radio" name="question-' + i + '" value="' + myQuestions[i].answers.b + '"> ' + myQuestions[i].answers.b + '<br>')
    $("#quiz").append('<input type="radio" name="question-' + i + '" value="' + myQuestions[i].answers.c + '"> ' + myQuestions[i].answers.c + '<br>')
}



// ON SUBMIT, RECORD ANSWERS & CHECK QUESTIONS
$("#submitButton").on("click",
    finish
)

var correctChoices = 0;
var incorrectChoices = 0;

function finish() {
    var userAnswer = $('[name=question-i]:checked').val();
    var correctAnswer = myQuestions[i].correctAnswer
if (userAnswer == correctAnswer){
    correctChoices++;
    console.log(correctChoices);
}

    console.log(userAnswer);
    // for (var i = 0; i < myQuestions.length; i++) {
    //     // userAnswers.attr("data-userInput", userAnswers[i]);

    // }
    alert("game over!");
}

        // $('input[name=radioName]:checked', '#myForm').val();


//  create an empty array, and then assign it with push
// / Write code to add the new movie into the movies array
//           movies.push[movieInput]

//  user input . val
//     $("#submit").on("click"), funtion(event) {
//         event.preventDefault();
//         //    console.log($("#input['name=question-']:checked").val());
//         for (var i = 0; i < 2; i++) {
//             console.log("input[name='question-" + i + "']:checked");
//             console.log($("input[name='question-" + i + "']:checked").val());

//         }
//     });

// }


// write a for loop that turns the user answers into an array
// compare the answers to the correct 
// create new variable for user input to myQuestions

// $("#submit").on("click", function(){
//     var x = $(this).data("questions");
//     console.log(x);
// // })
// 

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
// function buildQuiz() { }
// function showResults() { }
// // display quiz right away
// on submit, show results W JQUERY

