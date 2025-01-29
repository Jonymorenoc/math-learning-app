const questions = [
    { question: "🐵 3 x 4 = ?", answer: "12" },
    { question: "🐸 5 x 2 = ?", answer: "10" },
    { question: "🐰 7 x 3 = ?", answer: "21" },
];

const quizContainer = document.getElementById("quiz");

questions.forEach((q, index) => {
    quizContainer.innerHTML += `<p>${q.question} <input type="text" id="q${index}"></p>`;
});

function checkAnswers() {
    questions.forEach((q, index) => {
        const input = document.getElementById(`q${index}`);
        if (input.value == q.answer) {
            input.style.color = "green";
        } else {
            input.style.color = "red";
            alert(`Incorrect! The correct answer is ${q.answer}.`);
        }
    });
}
