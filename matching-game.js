// =========================================================================
// DINOSAUR VOCABULARY & IMAGE MATCHING MINI-GAME
// Mencocokkan Kosakata Hanzi/Pinyin dengan Gambar/Ikon per Unit
// =========================================================================

class DinoMatchingGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentPairs = [];
    this.selectedWord = null;
    this.selectedImage = null;
    this.matchedCount = 0;
    this.totalPairs = 0;
    this.attempts = 0;
  }

  loadUnit(unitData) {
    if (!unitData || !unitData.matchingPairs) return;
    this.currentPairs = [...unitData.matchingPairs];
    this.totalPairs = this.currentPairs.length;
    this.matchedCount = 0;
    this.attempts = 0;
    this.selectedWord = null;
    this.selectedImage = null;
    this.renderGame();
  }

  renderGame() {
    if (!this.container) return;

    // Pisahkan kartu kata dan kartu gambar lalu acak (shuffle)
    const wordCards = this.currentPairs.map(p => ({
      id: p.id,
      type: 'word',
      hanzi: p.hanzi,
      pinyin: p.pinyin,
      meaning: p.meaning
    })).sort(() => Math.random() - 0.5);

    const imageCards = this.currentPairs.map(p => ({
      id: p.id,
      type: 'image',
      icon: p.icon,
      meaning: p.meaning
    })).sort(() => Math.random() - 0.5);

    this.container.innerHTML = `
      <div class="matching-header">
        <div class="matching-stats">
          <span class="stat-badge">🎯 Berhasil: <strong id="match-score">${this.matchedCount} / ${this.totalPairs}</strong></span>
          <span class="stat-badge">🔄 Percobaan: <strong id="match-attempts">${this.attempts}</strong></span>
        </div>
        <button class="dino-btn small secondary" onclick="dinoMatchGame.reloadCurrent()">Acak Ulang Kartu 🔀</button>
      </div>

      <div class="matching-board">
        <div class="match-column words-col">
          <h4 class="col-title">🔤 Kartu Kosakata (Hanzi & Pinyin)</h4>
          <div class="cards-list">
            ${wordCards.map(c => `
              <div class="match-card word-card" data-id="${c.id}" data-type="word" onclick="dinoMatchGame.selectCard(this, '${c.id}', 'word', '${c.hanzi}')">
                <span class="card-hanzi">${c.hanzi}</span>
                <span class="card-pinyin">${c.pinyin}</span>
                <button class="mini-audio-btn" onclick="event.stopPropagation(); dinoAudio.speakMandarin('${c.hanzi}');" title="Dengar lafal">🔊</button>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="match-column images-col">
          <h4 class="col-title">🖼️ Kartu Gambar & Makna Benda</h4>
          <div class="cards-list">
            ${imageCards.map(c => `
              <div class="match-card image-card" data-id="${c.id}" data-type="image" onclick="dinoMatchGame.selectCard(this, '${c.id}', 'image')">
                <span class="card-icon">${c.icon}</span>
                <span class="card-label">${c.meaning}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div id="matching-win-modal" class="win-modal hidden">
        <div class="win-modal-box">
          <div class="trophy-emoji">🏆🦖🎉</div>
          <h3>Hebat Sekali! Semua Kartu Berhasil Dicocokkan!</h3>
          <p>Kamu berhasil mencocokkan seluruh kosakata dengan gambar secara tepat dalam <strong><span id="win-attempts">${this.attempts}</span></strong> percobaan!</p>
          <button class="dino-btn primary" onclick="dinoMatchGame.reloadCurrent()">Main Lagi ↺</button>
        </div>
      </div>
    `;
  }

  selectCard(element, id, type, text = '') {
    if (element.classList.contains('matched')) return;

    if (window.dinoAudio) dinoAudio.getAudioContext();

    if (type === 'word') {
      if (this.selectedWord) {
        this.selectedWord.element.classList.remove('selected');
      }
      this.selectedWord = { element, id };
      element.classList.add('selected');
      if (text && window.dinoAudio) dinoAudio.speakMandarin(text);
    } else if (type === 'image') {
      if (this.selectedImage) {
        this.selectedImage.element.classList.remove('selected');
      }
      this.selectedImage = { element, id };
      element.classList.add('selected');
      if (window.dinoAudio) dinoAudio.playEggCrackSound();
    }

    // Cek kecocokan jika kedua kartu telah dipilih
    if (this.selectedWord && this.selectedImage) {
      this.attempts++;
      const attemptsEl = document.getElementById('match-attempts');
      if (attemptsEl) attemptsEl.textContent = this.attempts;

      if (this.selectedWord.id === this.selectedImage.id) {
        // PASANGAN COCOK (MATCHED!)
        if (window.dinoAudio) dinoAudio.playCorrectSound();
        this.selectedWord.element.classList.remove('selected');
        this.selectedImage.element.classList.remove('selected');
        this.selectedWord.element.classList.add('matched');
        this.selectedImage.element.classList.add('matched');

        this.matchedCount++;
        const scoreEl = document.getElementById('match-score');
        if (scoreEl) scoreEl.textContent = `${this.matchedCount} / ${this.totalPairs}`;

        this.selectedWord = null;
        this.selectedImage = null;

        if (this.matchedCount === this.totalPairs) {
          setTimeout(() => {
            if (window.dinoAudio) dinoAudio.playApplauseSound();
            const winModal = document.getElementById('matching-win-modal');
            const winAtt = document.getElementById('win-attempts');
            if (winAtt) winAtt.textContent = this.attempts;
            if (winModal) winModal.className = 'win-modal show';
          }, 500);
        }
      } else {
        // TIDAK COCOK
        if (window.dinoAudio) dinoAudio.playDinoRoarSound();
        const wEl = this.selectedWord.element;
        const iEl = this.selectedImage.element;
        wEl.classList.add('wrong');
        iEl.classList.add('wrong');

        setTimeout(() => {
          wEl.classList.remove('selected', 'wrong');
          iEl.classList.remove('selected', 'wrong');
          this.selectedWord = null;
          this.selectedImage = null;
        }, 700);
      }
    }
  }

  reloadCurrent() {
    const winModal = document.getElementById('matching-win-modal');
    if (winModal) winModal.className = 'win-modal hidden';
    this.matchedCount = 0;
    this.attempts = 0;
    this.selectedWord = null;
    this.selectedImage = null;
    this.renderGame();
  }
}

// Inisialisasi Instance Global
window.DinoMatchingGame = DinoMatchingGame;
