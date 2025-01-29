const questions = [
    {
        question: "✖️ ¿Cuánto es 4 × 3?",
        options: ["10", "12", "14", "16"],
        answer: "12"
    },
    {
        question: "💰 Si compras 2 jugos a $35 cada uno, ¿cuánto pagas?",
        options: ["$70", "$65", "$75", "$80"],
        answer: "$70"
    },
    {
        question: "📏 ¿Cuántos mililitros hay en 1 litro?",
        options: ["500 ml", "1000 ml", "1500 ml", "2000 ml"],
        answer: "1000 ml"
    },
    {
        question: "📐 ¿Cuántas aristas tiene un cubo?",
        options: ["6", "8", "12", "14"],
        answer: "12"
    }
];

let score = 0;
let currentQuestion = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    let answersHTML = "";
    
    q.options.forEach(option => {
        answersHTML += `<button class="option" onclick="checkAnswer('${option}')">${option}</button>`;
    });

    document.getElementById("answers").innerHTML = answersHTML;
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score += 10;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "🎉 ¡Examen terminado!";
        document.getElementById("answers").innerHTML = `<p>Tu puntaje final: ${score}</p>`;
    }

    document.getElementById("score").innerText = `Puntaje: ${score}`;
}

window.onload = loadQuestion;
