// =========================================================================
// DINOSAUR MULTIPLE CHOICE QUIZ & EXERCISE ENGINE (KKM 70)
// 5 Tipe Soal Pilihan Berganda:
// 1. Mengartikan
// 2. Pinyin & Nada
// 3. Hitungan Goresan
// 4. Menyusun Kata Menjadi Kalimat
// 5. Mencari Jawaban Gambar yang Sesuai dengan Kalimat/Materi
// Fitur: Bantuan Audio Pembacaan Soal, Standar KKM 70, Piala Emas + Tepuk Tangan vs Raungan Dinosaurus
// =========================================================================

class DinoQuizEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.questions = [];
    this.userAnswers = {};
    this.currentIndex = 0;
    this.isSubmitted = false;
    this.unitTitle = "";
    this.kkmScore = 70; // Standar KKM 70
  }

  loadUnit(unitData) {
    if (!unitData || !unitData.quizQuestions) return;
    this.questions = [...unitData.quizQuestions];
    this.unitTitle = unitData.title;
    this.userAnswers = {};
    this.currentIndex = 0;
    this.isSubmitted = false;
    this.renderQuiz();
  }

  renderQuiz() {
    if (!this.container) return;

    if (this.questions.length === 0) {
      this.container.innerHTML = `<div class="empty-quiz">Belum ada soal latihan untuk unit ini.</div>`;
      return;
    }

    const q = this.questions[this.currentIndex];
    const typeBadges = {
      meaning: "📖 1. Mengartikan Kosakata",
      pinyin: "🔤 2. Bacaan Pinyin & Nada",
      strokes: "✍️ 3. Hitungan Goresan",
      sentence_order: "🧩 4. Menyusun Kalimat",
      picture_match: "🖼️ 5. Mencocokkan Gambar"
    };

    const selectedOption = this.userAnswers[this.currentIndex];

    this.container.innerHTML = `
      <div class="quiz-box-card">
        <div class="quiz-top-bar">
          <div class="quiz-badge-group">
            <span class="dino-pill type-pill">${typeBadges[q.type] || "Soal Pilihan Berganda"}</span>
            <span class="dino-pill kkm-pill">🎯 Standar KKM: 70</span>
          </div>
          <div class="quiz-counter">Nomor <strong>${this.currentIndex + 1}</strong> dari <strong>${this.questions.length}</strong></div>
        </div>

        <div class="question-header">
          <h3 class="question-title">${q.question}</h3>
          <button class="dino-audio-bubble-btn" onclick="dinoQuiz.playQuestionAudio(${this.currentIndex})" title="Dengarkan pembacaan soal dengan tempo pelan">
            🔊 Bantuan Audio Bacaan Soal (Pelan)
          </button>
        </div>

        <div class="quiz-options-list">
          ${q.options.map((opt, idx) => {
            let optionClass = 'quiz-option-item';
            if (this.isSubmitted) {
              if (idx === q.correctIndex) optionClass += ' correct';
              else if (selectedOption === idx) optionClass += ' incorrect';
            } else if (selectedOption === idx) {
              optionClass += ' selected';
            }
            return `
              <div class="${optionClass}" onclick="dinoQuiz.selectOption(${idx})">
                <span class="opt-indicator">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-text">${opt}</span>
                <button class="opt-sound-btn" onclick="event.stopPropagation(); dinoAudio.speakMandarin('${opt.replace(/[^\u4e00-\u9fa5]/g, '') || opt}');" title="Dengar lafal">🔉</button>
              </div>
            `;
          }).join('')}
        </div>

        ${this.isSubmitted ? `
          <div class="quiz-explanation-box">
            💡 <strong>Penjelasan Materi:</strong> ${q.explanation}
          </div>
        ` : ''}

        <div class="quiz-footer-nav">
          <button class="dino-btn secondary small" onclick="dinoQuiz.prevQuestion()" ${this.currentIndex === 0 ? 'disabled' : ''}>
            ⬅️ Soal Sebelumnya
          </button>

          ${this.currentIndex < this.questions.length - 1 ? `
            <button class="dino-btn primary small" onclick="dinoQuiz.nextQuestion()">
              Soal Selanjutnya ➔
            </button>
          ` : `
            ${!this.isSubmitted ? `
              <button class="dino-btn trophy-action-btn" onclick="dinoQuiz.submitQuiz()">
                Kirim & Periksa Nilai (KKM 70) 🏆
              </button>
            ` : `
              <button class="dino-btn trophy-action-btn" onclick="dinoQuiz.showScoreResultModal()">
                Lihat Hasil Skor 📊
              </button>
            `}
          `}
        </div>

        <div class="quiz-dot-nav">
          ${this.questions.map((_, idx) => `
            <button class="quiz-dot ${idx === this.currentIndex ? 'active' : ''} ${this.userAnswers[idx] !== undefined ? 'answered' : ''}" onclick="dinoQuiz.goToQuestion(${idx})">
              ${idx + 1}
            </button>
          `).join('')}
        </div>
      </div>

      <div id="quiz-result-modal" class="win-modal hidden"></div>
    `;
  }

  // Pemutaran Audio Bacaan Soal (Lambat & Jelas untuk Anak SD)
  playQuestionAudio(index) {
    const q = this.questions[index];
    if (!q) return;
    if (window.dinoAudio) {
      dinoAudio.getAudioContext();
      const audioContent = q.audioText || q.question;
      dinoAudio.speakMandarin(audioContent, { rate: 0.62 });
    }
  }

  selectOption(optionIndex) {
    if (this.isSubmitted) return;
    this.userAnswers[this.currentIndex] = optionIndex;
    if (window.dinoAudio) dinoAudio.playEggCrackSound();
    this.renderQuiz();
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.renderQuiz();
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderQuiz();
    }
  }

  goToQuestion(idx) {
    this.currentIndex = idx;
    this.renderQuiz();
  }

  calculateScore() {
    let correct = 0;
    this.questions.forEach((q, idx) => {
      if (this.userAnswers[idx] === q.correctIndex) {
        correct++;
      }
    });
    const total = this.questions.length;
    const score = Math.round((correct / total) * 100);
    return { correct, total, score, isPassed: score >= this.kkmScore };
  }

  submitQuiz() {
    this.isSubmitted = true;
    const result = this.calculateScore();
    this.renderQuiz();
    this.showScoreResultModal(result);
  }

  showScoreResultModal(customResult) {
    const result = customResult || this.calculateScore();
    const modal = document.getElementById('quiz-result-modal');
    if (!modal) return;

    if (result.isPassed) {
      // JIKA NILAI >= KKM 70 -> MUNCUL PIALA DISERTAI SUARA TEPUK TANGAN MERIAH OTOMATIS!
      if (window.dinoAudio) dinoAudio.playApplauseSound();
      modal.className = 'win-modal show success-trophy';
      modal.innerHTML = `
        <div class="win-modal-box trophy-celebration">
          <div class="trophy-glow-wrapper">
            <div class="trophy-icon">🏆</div>
            <div class="dino-cheer">🦖👏🎉</div>
          </div>
          <div class="kkm-passed-badge">🎉 SELAMAT! LULUS KKM (Skor ≥ 70)</div>
          <h2>Skor Akhir: ${result.score} / 100</h2>
          <p>Luar biasa hebat! Kamu berhasil menjawab dengan benar <strong>${result.correct} dari ${result.total} soal</strong> pada materi <strong>${this.unitTitle}</strong>.</p>
          <div class="action-buttons">
            <button class="dino-btn primary" onclick="dinoQuiz.closeModal()">Tinjau Kunci Jawaban & Pembahasan 📖</button>
            <button class="dino-btn secondary" onclick="dinoQuiz.retryQuiz()">Ulangi Kuis ↺</button>
          </div>
        </div>
      `;
    } else {
      // JIKA NILAI < 70 (GAGAL KKM) -> SUARA AUDIO DINOSAURUS MERAUNG OTOMATIS!
      if (window.dinoAudio) dinoAudio.playDinoRoarSound();
      modal.className = 'win-modal show fail-roar';
      modal.innerHTML = `
        <div class="win-modal-box roar-retry">
          <div class="roar-glow-wrapper">
            <div class="roar-icon">🦖⚡🔊</div>
          </div>
          <div class="kkm-failed-badge">⚠️ BELUM MENCAPAI STANDAR KKM 70</div>
          <h2>Skor Kamu: ${result.score} / 100</h2>
          <p>ROAAAR! Kamu menjawab benar <strong>${result.correct} dari ${result.total} soal</strong>. Nilaimu masih di bawah batas KKM 70. Dengarkan cerita materi sekali lagi dan raih piala kelulusanmu!</p>
          <div class="action-buttons">
            <button class="dino-btn primary" onclick="dinoQuiz.retryQuiz()">Ulangi Kuis Sekarang ↺</button>
            <button class="dino-btn secondary" onclick="dinoQuiz.closeModal()">Pelajari Jawaban & Penjelasan 📖</button>
          </div>
        </div>
      `;
    }
  }

  closeModal() {
    const modal = document.getElementById('quiz-result-modal');
    if (modal) modal.className = 'win-modal hidden';
  }

  retryQuiz() {
    this.userAnswers = {};
    this.currentIndex = 0;
    this.isSubmitted = false;
    this.closeModal();
    this.renderQuiz();
  }
}

// Inisialisasi Instance Global
window.DinoQuizEngine = DinoQuizEngine;
