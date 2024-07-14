function checkAnswer() {
    // Function body

    // Identify the Correct Answer
    let correctAnswer = 4;

    // Retrieve the User’s Answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    //console.log(userAnswer);

    // Compare the User’s Answer with the Correct Answer
    if (userAnswer == correctAnswer) {
        const para = document.getElementById('feedback').textContent = "Correct! Well done.";
        //console.log(para);     
    } else {
        const para = document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        //console.log(para);  
    }
}


document.getElementById("submit-answer").addEventListener('click', checkAnswer);

    

