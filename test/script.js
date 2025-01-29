const questions = [
    {
        question: "🔲 ¿Cuántos vértices tiene un cubo?",
        options: ["6", "8", "12", "4"],
        answer: "8"
    },
    {
        question: "💰 Si tienes $120, ¿cuántas sodas puedes comprar?",
        options: ["2", "4", "6", "8"],
        answer: "4"
    },
    {
        question: "📏 ¿Cuántos mililitros tiene un litro?",
        options: ["500 ml", "1000 ml", "1500 ml", "2000 ml"],
        answer: "1000 ml"
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
