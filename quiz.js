function checkAnswer() {
    // Function body
    let correctAnswer = 4;

    var userAnswer = document.querySelector('input[name="quiz"]:checked');

    if (userAnswer == correctAnswer) {
        const changeText = document.querySelector("feedback");
        changeText.textContent = "Correct! Well done.";
    }
    else {
        const changeText = document.querySelector("feedback");
        changeText.textContent = "That's incorrect. Try again!";
    }

    document.getElementById("submit-answer").addEventListener('click', function() {
        changeText;
    })


    // if(userAnswer != null) {
    //     document.getElementById("disp").innerHTML
    //         = userAnswer.value
    //         + " radio button checked";
    // }
    // else {
    //     document.getElementById("disp").innerHTML
    //         = "No one selected";
    // } 


}