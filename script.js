var counter = 0;
var correctCount = 0;





function startQuiz() {
    document.getElementById("sec1").style.display = 'block';
    document.getElementById("startButton").style.display = 'none';
    document.getElementById("quest1").innerHTML = 'What does CSS stand for?';
    document.getElementById("button1").innerHTML = 'Classic Style Sheet';
    document.getElementById("button2").innerHTML = 'Cascading Style Sheet';
    document.getElementById("button3").innerHTML = 'Cascading Start Sheet';

}

function makeChoice(inputVariable) {
    counter += 1;
 
    if (counter == 1)
    {
        if (inputVariable == "2") {
            alert ("Correct");
            }
            else {
                alert ("Wrong");
            }
        document.getElementById("quest1").innerHTML = 'What does html stand for?';
        document.getElementById("button1").innerHTML = 'Hypertext Markup Language';
        document.getElementById("button2").innerHTML = 'Home Markup License';
        document.getElementById("button3").innerHTML = 'Hypertext Making Language';  
    }
    else if (counter == 2) {

    }
}

