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
const componentBadge = document.getElementById('component-badge');
const readingSection = document.getElementById('reading-section');
const toggleReadingBtn = document.getElementById('toggle-reading');

// Initialize
function initQuiz() {
  setupToggleReading();
  loadContent();
}

let currentOptions = [];
let correctAnswerText = "";

function setupToggleReading() {
  toggleReadingBtn.addEventListener('click', () => {
    readingSection.classList.toggle('collapsed');
    const icon = document.getElementById('toggle-icon');
    icon.textContent = readingSection.classList.contains('collapsed') ? '📄' : '📖';
  });
}

function loadContent() {
  const textData = questionsData[currentTextIdx];
  const questionData = textData.questions[currentQuestIdx];

  // Reset state
  attempts = 0;
  isAnswered = false;
  feedbackMsg.textContent = "";
  nextBtn.style.display = "none";
  sustentoBtn.style.display = "none";

  // Update Component Badge
  componentBadge.textContent = textData.component;
  
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
  const totalQuestions = getTotalQuestions();
  const currentQuestionNum = getCurrentQuestionNum();
  progressText.textContent = `Pregunta ${currentQuestionNum} de ${totalQuestions}`;
  progressFill.style.width = `${(currentQuestionNum / totalQuestions) * 100}%`;
}

function getTotalQuestions() {
  let total = 0;
  questionsData.forEach(text => {
    total += text.questions.length;
  });
  return total;
}

function getCurrentQuestionNum() {
  let num = 0;
  for (let i = 0; i < currentTextIdx; i++) {
    num += questionsData[i].questions.length;
  }
  return num + currentQuestIdx + 1;
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
  
  // Show sustento button even on correct answer
  sustentoBtn.style.display = "inline-block";
}

function handleWrong(btn) {
  attempts++;
  btn.classList.add('wrong');
  btn.disabled = true; // Disable this specific wrong option

  if (attempts >= 2) {
    isAnswered = true;
    feedbackMsg.textContent = "❌ Has fallado 2 veces. Se muestra la respuesta correcta.";
    feedbackMsg.style.color = "var(--error)";
    
    // Show correct answer automatically
    document.querySelectorAll('.option-btn').forEach(b => {
      if (b.textContent === correctAnswerText) {
        b.classList.add('correct');
        b.disabled = false; // Ensure it's clickable for feedback
      }
    });

    // Automatically show sustento after 2 errors
    setTimeout(() => {
      showSustento();
    }, 500);
    
    showNextButton();
    sustentoBtn.style.display = "inline-block";
  } else {
    feedbackMsg.textContent = `❌ Incorrecto. Intentos: ${attempts}/2`;
    feedbackMsg.style.color = "var(--error)";
  }
}

function showNextButton() {
  nextBtn.style.display = "block";
}

function showSustento() {
  const questionData = questionsData[currentTextIdx].questions[currentQuestIdx];
  sustentoText.textContent = questionData.explanation;
  sustentoModal.style.display = "flex";
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
        <div class="glass-card main-card finish-screen" style="text-align: center; padding: 3rem 2rem;">
            <h1 style="font-size: 2rem; margin-bottom: 1.5rem;">🎊 ¡Estudio Completado!</h1>
            <p style="font-size: 1.5rem; margin: 2rem 0;">Tu puntaje final es: <strong style="color: var(--primary); font-size: 2rem;">${score}</strong></p>
            <button class="btn primary" onclick="location.reload()" style="margin-top: 1rem;">Reiniciar</button>
        </div>
    `;
}

// Sustento Modal Logic
sustentoBtn.onclick = () => {
  showSustento();
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

// Verify questionsData is loaded
if (typeof questionsData === 'undefined' || !questionsData || questionsData.length === 0) {
  console.error('Error: questionsData no está definido o está vacío');
  document.querySelector('.container').innerHTML = `
    <div class="glass-card main-card" style="text-align: center; padding: 3rem 2rem;">
      <h1 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--error);">❌ Error</h1>
      <p style="font-size: 1rem; margin-bottom: 1rem;">No se pudo cargar las preguntas.</p>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">Verifica que el archivo questions_data.js esté cargado correctamente.</p>
      <button class="btn primary" onclick="location.reload()" style="margin-top: 1rem;">Recargar</button>
    </div>
  `;
} else {
  // Start the app
  initQuiz();
}
