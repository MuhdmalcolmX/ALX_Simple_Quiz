function checkAnswer() {
    // Function body

    // Identify the Correct Answer
    let correctAnswer = 4;

    // Retrieve the User’s Answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    console.log(userAnswer);

    // Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        const para = document.getElementById('feedback').textContent = "Correct! Well done.";
        console.log(para);     
    } else {
        const para = document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        console.log(para);  
    }

    // Add an Event Listener to the Submit Butto
    document.getElementById("submit-answer").addEventListener('click', function checkAnswer() {
        
    })

}

    

    // document.getElementById("submit-answer").addEventListener('click', function() {
    //     var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    //     console.log(userAnswer);

    //     if (userAnswer == 4) {
    //         const para = document.getElementById('feedback').textContent = "Correct! Well done.";
    //         console.log(para);     
    //     } else {
    //         const para = document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    //         console.log(para);  
    //     }

    // }) 
        

    //     if (userAnswer == 4) {
    //         const changeText = document.querySelector("feedback").textContent = "Correct";
    //         // changeText.textContent = "";
    //     }
    //     else {
    //         const changeText = document.querySelector("feedback");
    //         // changeText.textContent = "That's incorrect. Try again!";
    //     }
    // })


    // var userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // if (userAnswer == 4) {
    //     const tryit = document.getElementById("feedback").textContent = "Correct! Well done.";
    //     console.log(tryit);
    // }
    

    

