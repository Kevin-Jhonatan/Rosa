let currentTextIdx = 0;
let currentQuestIdx = 0;
let attempts = 0;
let score = 0;
let isAnswered = false;

// DOM Elements
const readingTitle = document.getElementById('reading-title');
const readingText = document.getElementById('reading-text');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const scoreEl = document.getElementById('score');
const feedbackMsg = document.getElementById('feedback-msg');
const nextBtn = document.getElementById('next-btn');
const sustentoBtn = document.getElementById('view-sustento');
const sustentoModal = document.getElementById('sustento-modal');
const sustentoText = document.getElementById('sustento-text');

// Initialize
function initQuiz() {
  loadContent();
}

let currentOptions = [];
let correctAnswerText = "";

function loadContent() {
  const textData = questionsData[currentTextIdx];
  const questionData = textData.questions[currentQuestIdx];

  // Reset state
  attempts = 0;
  isAnswered = false;
  feedbackMsg.textContent = "";
  nextBtn.style.display = "none";
  sustentoBtn.style.display = "none";

  // Update Reading
  readingTitle.textContent = textData.title;
  readingText.innerHTML = textData.fullText || textData.text;

  // Update Question
  questionText.textContent = questionData.question;

  // Prepare Shuffled Options
  correctAnswerText = questionData.options[questionData.answer];
  currentOptions = [...questionData.options];
  shuffleArray(currentOptions);

  renderOptions(currentOptions);

  // Update Progress
  const totalQuestions = textData.questions.length;
  progressText.textContent = `Pregunta ${currentQuestIdx + 1} de ${totalQuestions}`;
  progressFill.style.width = `${((currentQuestIdx + 1) / totalQuestions) * 100}%`;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderOptions(options) {
  optionsContainer.innerHTML = "";
  options.forEach((option) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.onclick = () => selectOption(option, btn);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedText, btn) {
  if (isAnswered) return;

  // Remove selected class from all
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  if (selectedText === correctAnswerText) {
    handleCorrect(btn);
  } else {
    handleWrong(btn);
  }
}

function handleCorrect(btn) {
  isAnswered = true;
  btn.classList.add('correct');
  feedbackMsg.textContent = "✅ ¡Correcto!";
  feedbackMsg.style.color = "var(--success)";

  if (attempts === 0) score += 10;
  else if (attempts === 1) score += 5;

  scoreEl.textContent = `Puntos: ${score}`;

  showNextButton();
}

function handleWrong(btn) {
  attempts++;
  btn.classList.add('wrong');
  btn.disabled = true; // Disable this specific wrong option

  feedbackMsg.textContent = "❌ Intenta de nuevo";
  feedbackMsg.style.color = "var(--error)";

  if (attempts >= 2) {
    isAnswered = true;
    feedbackMsg.textContent = "Has fallado 2 veces. Mira el sustento.";
    sustentoBtn.style.display = "block";
    showNextButton();

    // Highlight correct answer
    document.querySelectorAll('.option-btn').forEach(b => {
      if (b.textContent === correctAnswerText) {
        b.classList.add('correct');
      }
    });
  }
}

function showNextButton() {
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestIdx++;
  const textData = questionsData[currentTextIdx];

  if (currentQuestIdx < textData.questions.length) {
    loadContent();
  } else {
    // End of current text component
    currentTextIdx++;
    currentQuestIdx = 0;

    if (currentTextIdx < questionsData.length) {
      loadContent();
    } else {
      finishQuiz();
    }
  }
};

function finishQuiz() {
  document.querySelector('.container').innerHTML = `
        <div class="glass-card main-card" style="text-align: center; justify-content: center;">
            <h1>🎊 ¡Estudio Completado!</h1>
            <p style="font-size: 1.5rem; margin: 2rem 0;">Tu puntaje final es: <strong>${score}</strong></p>
            <button class="btn primary" onclick="location.reload()">Reiniciar</button>
        </div>
    `;
}

// Sustento Modal Logic
sustentoBtn.onclick = () => {
  const questionData = questionsData[currentTextIdx].questions[currentQuestIdx];
  sustentoText.textContent = questionData.explanation;
  sustentoModal.style.display = "flex";
};

function closeModal() {
  sustentoModal.style.display = "none";
}

document.querySelector('.close-btn').onclick = closeModal;

window.onclick = (event) => {
  if (event.target == sustentoModal) {
    closeModal();
  }
};

// Start the app
initQuiz();
