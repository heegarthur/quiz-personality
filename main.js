function shuffleArray(array) {
  return array
    .map(v => ({ v, s: Math.random() }))
    .sort((a, b) => a.s - b.s)
    .map(({ v }) => v);
}

class PersonalityQuiz {
  constructor(quizData, containerId, resultId) {
    this.data = quizData;
    this.questions = quizData.questions;
    this.results = quizData.results;
    this.container = document.getElementById(containerId);
    this.resultContainer = document.getElementById(resultId);
    this.current = 0;
    this.scores = {};

    for (const key in this.results) this.scores[key] = 0;

    this.renderQuestion();
  }

  renderQuestion() {
    const q = this.questions[this.current];
    const shuffled = shuffleArray([...q.answers]);

    this.container.innerHTML = `
      <div class="question"><strong>${q.question}</strong></div>
      <div class="answers">
        ${shuffled.map(a => `
          <button class="answer">${a.text}</button>
        `).join("")}
      </div>
    `;

    this.container.querySelectorAll(".answer").forEach((btn, i) => {
      btn.onclick = () => this.chooseAnswer(shuffled[i].type);
    });
  }

  chooseAnswer(type) {
    this.scores[type]++;
    this.current++;
    if (this.current < this.questions.length) {
      this.renderQuestion();
    } else {
      this.showResult();
    }
  }

  showResult() {
    const top = Object.entries(this.scores)
      .sort((a, b) => b[1] - a[1])[0][0];
    const res = this.results[top];

    this.container.innerHTML = "";
    this.resultContainer.innerHTML = `
      <div class="result">
        <h2>You are: ${res.name}</h2>
        ${res.image ? `<div style="font-size: 48px;">${res.image}</div>` : ""}
        ${res.description ? `<p>${res.description}</p>` : ""}
        <button class="button" onclick="location.reload()">Try Again</button>
        <br><br>
        <a class="buy_coffee" href="https://buymeacoffee.com/ivocreator" target="_blank" style="
            display: inline-block;
            padding: 10px 20px;
            background-color: #ffdd00;
            color: black;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            ">
            Buy me a coffee ☕
        </a>
      </div>
    `;
  }
}
