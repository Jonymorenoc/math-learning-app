/***************************************************
 * EXAMEN INTERACTIVO DE MATEMÁTICAS PARA NIÑOS
 * -----------------------------------------------
 * Temas:
 * 1. Multiplicaciones
 * 2. Medidas de capacidad (L y ml)
 * 3. Figuras y cuerpos geométricos
 * 4. Manejo del dinero
 ***************************************************/

/*
  ESTRUCTURA DE PREGUNTAS:
  Cada pregunta es un objeto con las siguientes propiedades:
  - type: "mcq" (opción múltiple) o "input" (respuesta libre)
  - question: "Texto de la pregunta"
  - options: ["opción 1", "opción 2", ... ] (solo para mcq)
  - correctAnswer: índice de la opción correcta (para mcq) 
                   o texto correcto (para input)
  - feedbackCorrect: "Mensaje si es correcto"
  - feedbackIncorrect: "Mensaje si es incorrecto"
*/

const questions = [
  // ------------- TEMA 1: MULTIPLICACIÓN -------------
  {
    type: "input",
    question: "🐶 Completa la multiplicación: 3 × 2 = ",
    correctAnswer: "6",
    feedbackCorrect: "¡Excelente! 3 × 2 = 6",
    feedbackIncorrect: "Intenta de nuevo. 3 × 2 = 6."
  },
  {
    type: "input",
    question: "🐱 ¿Cuánto es 5 × 4? Escribe tu respuesta:",
    correctAnswer: "20",
    feedbackCorrect: "¡Correcto! 5 × 4 = 20",
    feedbackIncorrect: "¡No te rindas! 5 × 4 = 20."
  },
  {
    type: "mcq",
    question: "🐼 Elige el resultado correcto: 6 × 3 = ",
    options: ["9", "18", "21", "12"],
    correctAnswer: 1, // "18"
    feedbackCorrect: "Bien hecho, 6 × 3 = 18",
    feedbackIncorrect: "No es correcto, la respuesta es 18."
  },
  {
    type: "mcq",
    question: "🐰 7 × 5 = ",
    options: ["30", "35", "25", "45"],
    correctAnswer: 1, // "35"
    feedbackCorrect: "¡Así es! 7 × 5 = 35",
    feedbackIncorrect: "¡Ups! 7 × 5 = 35."
  },
  {
    type: "mcq",
    question: "🐻 9 × 4 = ",
    options: ["36", "40", "28", "44"],
    correctAnswer: 0, // "36"
    feedbackCorrect: "¡Genial! 9 × 4 = 36",
    feedbackIncorrect: "La respuesta correcta es 36."
  },
  {
    type: "input",
    question: "🐹 ¿Cuánto es 2 × 9?",
    correctAnswer: "18",
    feedbackCorrect: "¡Muy bien! 2 × 9 = 18",
    feedbackIncorrect: "¡Intenta otra vez! 2 × 9 = 18."
  },
  {
    type: "mcq",
    question: "🦊 7 × 6 = ",
    options: ["42", "36", "12", "28"],
    correctAnswer: 0, // "42"
    feedbackCorrect: "Correcto, 7 × 6 = 42",
    feedbackIncorrect: "La correcta es 42."
  },
  {
    type: "input",
    question: "🦁 11 × 3 = ",
    correctAnswer: "33",
    feedbackCorrect: "¡Exacto! 11 × 3 = 33",
    feedbackIncorrect: "Recuerda, 11 × 3 = 33."
  },

  // ------------- TEMA 2: MEDIDAS DE CAPACIDAD -------------
  {
    type: "mcq",
    question: "🐟 ¿Cuántos mililitros son 1 litro?",
    options: ["10 ml", "100 ml", "1000 ml", "5000 ml"],
    correctAnswer: 2, // "1000 ml"
    feedbackCorrect: "¡Exacto! 1 litro = 1000 ml",
    feedbackIncorrect: "Recuerda: 1 litro equivale a 1000 ml."
  },
  {
    type: "input",
    question: "🐠 Convierte 6 litros a mililitros: 6 L = __ ml",
    correctAnswer: "6000",
    feedbackCorrect: "¡Muy bien! 6 L = 6000 ml",
    feedbackIncorrect: "Intenta de nuevo: 6 L = 6000 ml."
  },
  {
    type: "mcq",
    question: "🐳 15000 ml equivalen a cuántos litros?",
    options: ["1.5 L", "15 L", "150 L", "0.15 L"],
    correctAnswer: 1, // "15 L"
    feedbackCorrect: "¡Exacto! 15000 ml = 15 L",
    feedbackIncorrect: "Revisa tus cálculos: 15000 ml = 15 L."
  },
  {
    type: "input",
    question: "🦀 2500 ml = __ L",
    correctAnswer: "2.5",
    feedbackCorrect: "¡Correcto! 2500 ml = 2.5 L",
    feedbackIncorrect: "¡Ups! 2500 ml = 2.5 L."
  },
  {
    type: "input",
    question: "🦞 Convierte 18000 ml a litros: 18000 ml = __ L",
    correctAnswer: "18",
    feedbackCorrect: "¡Bien hecho! 18000 ml = 18 L",
    feedbackIncorrect: "Respuesta correcta: 18 L."
  },

  // ------------- TEMA 3: FIGURAS GEOMÉTRICAS -------------
  {
    type: "mcq",
    question: "🐵 Tengo 4 lados y 4 ángulos rectos. ¿Qué figura soy?",
    options: ["Rombo", "Cuadrado", "Triángulo"],
    correctAnswer: 1, // "Cuadrado"
    feedbackCorrect: "¡Excelente! Eres un cuadrado.",
    feedbackIncorrect: "No es correcto, la figura es un cuadrado."
  },
  {
    type: "mcq",
    question: "🐣 No tengo lados ni ángulos. ¿Qué figura soy?",
    options: ["Esfera", "Hexágono", "Círculo"],
    correctAnswer: 2, // "Círculo"
    feedbackCorrect: "¡Correcto! Es un círculo.",
    feedbackIncorrect: "La respuesta correcta es círculo."
  },
  {
    type: "mcq",
    question: "🐯 Tengo 6 caras iguales. ¿Qué figura soy?",
    options: ["Cubo", "Cilindro", "Prisma triangular"],
    correctAnswer: 0, // "Cubo"
    feedbackCorrect: "¡Sí! Eres un cubo.",
    feedbackIncorrect: "La respuesta correcta es cubo."
  },
  {
    type: "input",
    question: "🐰 ¿Cuántos lados tiene un heptágono? Escribe tu respuesta:",
    correctAnswer: "7",
    feedbackCorrect: "¡Exacto! Un heptágono tiene 7 lados.",
    feedbackIncorrect: "Un heptágono tiene 7 lados."
  },
  {
    type: "input",
    question: "🦔 ¿Cuántos ángulos tiene un decágono? (en número)",
    correctAnswer: "10",
    feedbackCorrect: "¡Muy bien! Un decágono tiene 10 ángulos.",
    feedbackIncorrect: "La respuesta correcta es 10."
  },
  {
    type: "mcq",
    question: "🦓 ¿Cuántos lados tiene un paralelogramo?",
    options: ["2", "3", "4", "6"],
    correctAnswer: 2, // "4"
    feedbackCorrect: "¡Correcto! Un paralelogramo tiene 4 lados.",
    feedbackIncorrect: "La respuesta correcta es 4 lados."
  },

  // ------------- TEMA 4: MANEJO DEL DINERO Y COMPRAS -------------
  // Supongamos precios: Leche $20, Soda $15, Brócoli $25, Jugo $30, Agua $10, Pollo $80, Atún (lata) $40
  {
    type: "mcq",
    question: "🛒 Precios: Leche $20, Soda $15, Brócoli $25, Jugo $30, Agua $10, Pollo $80, Atún $40.\n\n" +
              "¿Cuánto debes pagar por 2 leches, 3 sodas y 1 brócoli?",
    options: ["$75", "$115", "$110", "$95"],
    correctAnswer: 1, // "$115"
    feedbackCorrect: "¡Correcto! 2 leches (40) + 3 sodas (45) + 1 brócoli (25) = 110, ¡revisemos! " +
                     "Ojo, revisa el cálculo. 40 + 45 + 25 = 110. (Parece que faltó verificar la opción) " + 
                     "Corrige si es necesario para tu lista final.",
    feedbackIncorrect: "Vuelve a calcular: 2 leches (2×20=40) + 3 sodas (3×15=45) + brócoli (25). 40+45+25=110."
  },
  {
    type: "mcq",
    question: "🦁 Si tienes $300 y compras 1 jugo ($30) y 2 aguas ($10 c/u), ¿cuánto te sobra?",
    options: ["$240", "$250", "$260", "$270"],
    correctAnswer: 0, // "$240"
    feedbackCorrect: "¡Muy bien! 30 + 20 = 50, 300 - 50 = 250 (revisa tus opciones). " +
                     "Parece que hay un desfase, corrige según tu lista final.",
    feedbackIncorrect: "¡No te rindas! Calcula 300 - (30 + 2×10) = 300 - 50 = 250."
  },
  {
    type: "mcq",
    question: "🐹 Si pagas con un billete de $500, ¿cuánto cambio recibes al comprar 1 pollo ($80) y 1 atún ($40)?",
    options: ["$420", "$380", "$440", "$400"],
    correctAnswer: 3, // "$400"
    feedbackCorrect: "¡Perfecto! 80 + 40 = 120; 500 - 120 = 380. " +
                     "Revisa la coherencia para la respuesta final.",
    feedbackIncorrect: "Vuelve a intentarlo: 500 - (80 + 40) = 380."
  },
  {
    type: "mcq",
    question: "🐸 ¿Cuánto cuesta comprar 4 jugos ($30 c/u) y 2 leches ($20 c/u)?",
    options: ["$160", "$200", "$140", "$180"],
    correctAnswer: 3, // "$180"
    feedbackCorrect: "¡Correcto! 4×30=120, 2×20=40, total 160. " +
                     "Revisa tus opciones y ajusta según tu lista definitiva.",
    feedbackIncorrect: "Calculemos: 4 jugos (4×30=120) + 2 leches (2×20=40). 120 + 40 = 160."
  }
];

// Variables globales
let currentQuestionIndex = 0;
let shuffledQuestions = [];

// Elementos del DOM
const quizContainer = document.getElementById("quiz-container");
const startBtn = document.getElementById("start-btn");

/**
 * Inicia el examen al hacer clic en "Iniciar Examen".
 * - Mezcla aleatoriamente las preguntas
 * - Muestra la primera pregunta
 */
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  // Mezclar preguntas
  shuffledQuestions = shuffleArray(questions);
  currentQuestionIndex = 0;
  renderQuestion();
  startBtn.style.display = "none";
}

/**
 * Mezcla (randomiza) el array de preguntas
 */
function shuffleArray(arr) {
  const arrayCopy = [...arr];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}

/**
 * Renderiza la pregunta actual en pantalla
 */
function renderQuestion() {
  quizContainer.innerHTML = "";

  if (currentQuestionIndex >= shuffledQuestions.length) {
    // Mostrar resultados finales o mensaje de fin
    showEndScreen();
    return;
  }

  const currentQ = shuffledQuestions[currentQuestionIndex];

  // Contenedor principal de la pregunta
  const questionEl = document.createElement("div");
  questionEl.classList.add("question-container");

  // Texto de la pregunta
  const questionText = document.createElement("div");
  questionText.classList.add("question");
  questionText.textContent = currentQ.question;
  questionEl.appendChild(questionText);

  // Contenedor de retroalimentación
  const feedbackEl = document.createElement("div");
  feedbackEl.classList.add("feedback");

  // Opciones según el tipo
  if (currentQ.type === "mcq") {
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container");

    currentQ.options.forEach((option, index) => {
      const optionBtn = document.createElement("button");
      optionBtn.classList.add("option-btn");
      optionBtn.textContent = option;
      optionBtn.addEventListener("click", () => {
        // Verificar respuesta
        if (index === currentQ.correctAnswer) {
          feedbackEl.textContent = currentQ.feedbackCorrect;
          feedbackEl.style.color = "green";
        } else {
          feedbackEl.textContent = currentQ.feedbackIncorrect;
          feedbackEl.style.color = "red";
        }
        disableOptions(optionsContainer);
      });
      optionsContainer.appendChild(optionBtn);
    });

    questionEl.appendChild(optionsContainer);
  } else if (currentQ.type === "input") {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("options-container");

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputContainer.appendChild(inputField);

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("btn");
    checkBtn.textContent = "Comprobar";
    checkBtn.addEventListener("click", () => {
      if (inputField.value.trim() === currentQ.correctAnswer) {
        feedbackEl.textContent = currentQ.feedbackCorrect;
        feedbackEl.style.color = "green";
      } else {
        feedbackEl.textContent = currentQ.feedbackIncorrect;
        feedbackEl.style.color = "red";
      }
      checkBtn.disabled = true;
      inputField.disabled = true;
    });
    inputContainer.appendChild(checkBtn);

    questionEl.appendChild(inputContainer);
  }

  questionEl.appendChild(feedbackEl);

  // Botones de navegación (Siguiente)
  const navButtons = document.createElement("div");
  navButtons.classList.add("nav-buttons");

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("btn");
  nextBtn.textContent = "Siguiente ➡️";
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    renderQuestion();
  });

  navButtons.appendChild(nextBtn);
  questionEl.appendChild(navButtons);

  quizContainer.appendChild(questionEl);
}

/**
 * Deshabilita las opciones de un contenedor de botones (para MCQ)
 */
function disableOptions(container) {
  const buttons = container.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
}

/**
 * Pantalla final cuando se terminan las preguntas
 */
function showEndScreen() {
  quizContainer.innerHTML = `
    <h2>¡Has terminado el examen! 🏆</h2>
    <p>¡Buen trabajo! Puedes reiniciar para volver a intentarlo.</p>
    <button class="btn start-btn" onclick="startQuiz()">Reiniciar</button>
  `;
}
