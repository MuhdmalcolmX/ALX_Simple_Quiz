function checkAnswer() {
    // Function body

    // Identify the Correct Answer
    let correctAnswer = 4;

    // Retrieve the User’s Answer
    var userAnswer = parseFloat(document.querySelector('input[name="quiz"]:checked').value);
    //console.log(userAnswer);

    // Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";

        // const para = document.getElementById('feedback').textContent = "Correct! Well done.";
        // console.log(para);     
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";

        // const para = document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        // console.log(para);  
    }
}


document.getElementById("submit-answer").addEventListener('click', checkAnswer);

    

