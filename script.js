var counter = 0;
var correctCount = 0;
var second_val = 0;
var high_score = 0.0;

var questionAnswers = {

    question1: {
        question: "What does CSS stand for?",
        answers: ["Classic Style Sheet", "Cascading Style Sheet", "Cascading Start Sheet"],
        correctAnswer: "Cascading Style Sheet"
    },
    question2: {
        question: "What does html stand for?",
        answers: ["Hypertext Markup Language", "Home Markup Language", "Hypertext Making Language"],
        correctAnswer: "Hypertext Markup Language"
    },
    question3: {
        question: "What does URL stand for?",
        answers: ["Universal Reading Link", "Uniform Resource Locator", "United Resource Location"],
        correctAnswer: "Uniform Resource Locator"
    }
};

var x = setInterval(function() {
   second_val -= 1;
   document.getElementById("demo").innerHTML = "Timer" + second_val;
}, 1000);

function selectingQuestion(inpQestion) {
    document.getElementById("quest1").innerHTML = inpQestion.question;
    document.getElementById("button1").innerHTML = inpQestion.answers[0];
    document.getElementById("button2").innerHTML = inpQestion.answers[1];
    document.getElementById("button3").innerHTML = inpQestion.answers[2];
    counter++;
}

function startQuiz() {
    counter = 0;
    correctCount = 0;
    document.getElementById("sec1").style.display = 'block';
    document.getElementById("startButton").style.display = 'none';
    document.getElementById("title1").style.display = 'none';
    document.getElementById("start_text").style.display = 'none';
    selectingQuestion(questionAnswers.question1);
    second_val = 30;
    document.getElementById("demo").style.display = "block";

}
var elements = document.getElementsByClassName("quiz-answers");

Array.from(elements).forEach(pass_elem);



function delay(delaytime) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delaytime);
    })
}

function pass_elem(element) {
    element.addEventListener('click', function () {
        var correctAnswer;
        if (counter == 1) {
            correctAnswer = questionAnswers.question1.correctAnswer;
        }
        else if (counter == 2) {
            correctAnswer = questionAnswers.question2.correctAnswer;
        }
        else {
            correctAnswer = questionAnswers.question3.correctAnswer;
        }

        if (correctAnswer == this.textContent) {
            correctCount++;
            document.getElementById("result").innerHTML = "Correct";
            document.getElementById("result").style.display = 'block';
        }
        else {
            document.getElementById("result").innerHTML = "Wrong";
            document.getElementById("result").style.display = 'block';
        }

        setTimeout(function() {  
            document.getElementById("result").style.display = 'none';
        }, 2000);
        

        if (counter == 1) {
            selectingQuestion(questionAnswers.question2);
        }
        else if (counter == 2){
            selectingQuestion(questionAnswers.question3);
        }
        else {
            var score = correctCount / 3.0;
            var sval = Number(score).toLocaleString(undefined, {style: 'percent', minimumFractionDigits:0});
            //document.getElementById("result").innerHTML = "Score: " + sval + "; with a time of: " + second_val;
            //document.getElementById("result").style.display = "block";
            document.getElementById("sec2").style.display = 'block';
            document.getElementById("demo").style.display = 'none';

            if (score > high_score )
                high_score = score;
        }
    })
    
}

function startOver() {
    document.getElementById("result").style.display = "none";
    document.getElementById("sec2").style.display = "none";
    startQuiz();
}







function makeChoice(inputVariable) {
    if (currentQuestion === 1) {
        return inputVariable === questionAnswers.question1.correctAnswer
    }
}


