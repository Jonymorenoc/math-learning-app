let attempts = {};

function checkAnswer(correct, id) {
    if (!attempts[id]) attempts[id] = 0;

    let feedback = document.getElementById("feedback" + id);
    let userAnswer = event.target.innerText;

    if (userAnswer === correct) {
        feedback.innerHTML = "🎉 Correct! Great job! 🎈";
        feedback.style.color = "green";
    } else {
        attempts[id]++;
        if (attempts[id] >= 2) {
            feedback.innerHTML = `❌ Incorrect. The correct answer is ${correct}.`;
        } else {
            feedback.innerHTML = "❌ Try again!";
        }
        feedback.style.color = "red";
    }
}
