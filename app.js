// =========================================================================
// MAIN CONTROLLER & APPLICATION BOOTSTRAP (PORTAL UTAMA GURU & SISWA)
// =========================================================================

let currentBookId = 1;
let currentUnitId = 1;
let currentVocabIndex = 0;
let currentActiveTab = 'story';

let dinoWriter = null;
let dinoMatchGame = null;
let dinoQuiz = null;

// Inisialisasi Saat Dokumen Siap
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Sub-Engines
  dinoWriter = new DinoStrokeWriter('stroke-canvas', 'stroke-container');
  dinoMatchGame = new DinoMatchingGame('matching-container');
  dinoQuiz = new DinoQuizEngine('quiz-container');

  window.dinoWriter = dinoWriter;
  window.dinoMatchGame = dinoMatchGame;
  window.dinoQuiz = dinoQuiz;

  // 2. Render Pilihan Buku (Grid Han Yu 1 - 12)
  renderBookSelector();

  // 3. Load Default Book & Unit
  loadBookAndUnit(1, 1);

  // 4. Inisialisasi Tab Navigation
  initTabNavigation();

  // 5. Inisialisasi Audio Controls (Speed Slider & Mute)
  initAudioControls();

  // 6. Handle Window Resize untuk Kanvas
  window.addEventListener('resize', () => {
    if (dinoWriter) dinoWriter.resizeCanvas();
  });
});

// Render Daftar Buku Han Yu 1 - 12
function renderBookSelector() {
  const container = document.getElementById('book-selector-grid');
  if (!container) return;

  container.innerHTML = HAN_YU_CURRICULUM.books.map(b => `
    <button class="book-card-btn ${b.id === currentBookId ? 'active' : ''}" onclick="selectBook(${b.id})">
      <span class="book-dino-avatar">${b.dinoGuide.avatar}</span>
      <div class="book-info">
        <span class="book-title">${b.title}</span>
        <span class="book-level">${b.dinoGuide.name}</span>
      </div>
    </button>
  `).join('');
}

// Pilih Buku Han Yu
function selectBook(bookId) {
  currentBookId = bookId;
  currentUnitId = 1;
  currentVocabIndex = 0;
  
  if (window.dinoAudio) dinoAudio.playEggCrackSound();
  renderBookSelector();
  loadBookAndUnit(currentBookId, currentUnitId);
}

// Render Unit Carousel / Grid (15 Unit per Buku)
function renderUnitList(book) {
  const container = document.getElementById('unit-selector-list');
  if (!container) return;

  container.innerHTML = book.units.map(u => `
    <button class="unit-pill-btn ${u.id === currentUnitId ? 'active' : ''}" onclick="selectUnit(${u.id})">
      <span class="u-num">Unit ${u.id}</span>
      <span class="u-title">${u.title.replace(`Unit ${u.id}: `, '')}</span>
    </button>
  `).join('');
}

// Pilih Unit Tertentu
function selectUnit(unitId) {
  currentUnitId = unitId;
  currentVocabIndex = 0;
  if (window.dinoAudio) dinoAudio.playEggCrackSound();
  loadBookAndUnit(currentBookId, currentUnitId);
}

// Load Data Buku dan Unit ke Semua Tab
function loadBookAndUnit(bookId, unitId) {
  const book = getBookById(bookId);
  const unit = getUnitByBookAndUnitId(bookId, unitId);

  // Update Header Banner Maskot Dinosaurus
  const mascotAvatar = document.getElementById('guide-avatar');
  const mascotName = document.getElementById('guide-name');
  const mascotDesc = document.getElementById('guide-desc');
  const unitHeaderTitle = document.getElementById('current-unit-title');
  const unitHeaderPinyin = document.getElementById('current-unit-pinyin');
  const unitHeaderMeaning = document.getElementById('current-unit-meaning');

  if (mascotAvatar) mascotAvatar.textContent = book.dinoGuide.avatar;
  if (mascotName) mascotName.textContent = book.dinoGuide.name;
  if (mascotDesc) mascotDesc.textContent = book.dinoGuide.desc;
  if (unitHeaderTitle) unitHeaderTitle.textContent = `${book.title} - ${unit.title}`;
  if (unitHeaderPinyin) unitHeaderPinyin.textContent = unit.pinyin;
  if (unitHeaderMeaning) unitHeaderMeaning.textContent = `Arti: ${unit.meaning}`;

  renderUnitList(book);

  // 1. Render Tab Cerita (Narasi Pelan Anak SD)
  renderStoryTab(unit);

  // 2. Render Tab Guratan (Canvas 3-6x)
  renderStrokeTab(unit);

  // 3. Load Matching Game
  if (dinoMatchGame) dinoMatchGame.loadUnit(unit);

  // 4. Load Quiz Engine
  if (dinoQuiz) dinoQuiz.loadUnit(unit);
}

// Render Tab Cerita Lengkap
function renderStoryTab(unit) {
  const storyContainer = document.getElementById('story-content-container');
  if (!storyContainer || !unit.story) return;

  const sentences = unit.story.sentences || [];

  storyContainer.innerHTML = `
    <div class="story-hero-card">
      <div class="story-top-actions">
        <div class="speed-indicator-badge">
          🐢 Kecepatan: <strong id="speed-display-label">Pelan (0.7x) - Ramah Anak SD</strong>
        </div>
        <div class="story-audio-btn-group">
          <button class="dino-btn primary pulse" onclick="playFullStorySlow()">
            🔊 Putar Seluruh Cerita (Audio Pelan)
          </button>
          <button class="dino-btn secondary small" onclick="dinoAudio.stopSpeaking()">
            ⏹️ Berhenti
          </button>
        </div>
      </div>

      <div class="story-sentences-list">
        ${sentences.map((s, idx) => `
          <div class="sentence-row-card" id="sentence-card-${idx}">
            <div class="sentence-num-badge">${idx + 1}</div>
            <div class="sentence-text-group">
              <div class="sentence-hanzi">${s.hanzi}</div>
              <div class="sentence-pinyin">${s.pinyin}</div>
              <div class="sentence-indonesian">${s.indonesian}</div>
            </div>
            <button class="sentence-audio-btn" onclick="playSentenceByIndex(${idx})" title="Dengarkan kalimat ini">
              🔊
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Putar Cerita Penuh dengan Tempo Pelan
function playFullStorySlow() {
  const unit = getUnitByBookAndUnitId(currentBookId, currentUnitId);
  if (!unit || !unit.story || !unit.story.sentences) return;

  const fullText = unit.story.sentences.map(s => s.hanzi).join('，');
  if (window.dinoAudio) {
    dinoAudio.getAudioContext();
    dinoAudio.speakMandarin(fullText, { rate: dinoAudio.speechRate });
  }
}

// Putar Satu Kalimat Berdasarkan Indeks
function playSentenceByIndex(index) {
  const unit = getUnitByBookAndUnitId(currentBookId, currentUnitId);
  if (!unit || !unit.story || !unit.story.sentences[index]) return;

  const s = unit.story.sentences[index];

  // Highlight baris
  document.querySelectorAll('.sentence-row-card').forEach(el => el.classList.remove('speaking-highlight'));
  const row = document.getElementById(`sentence-card-${index}`);
  if (row) row.classList.add('speaking-highlight');

  if (window.dinoAudio) {
    dinoAudio.getAudioContext();
    dinoAudio.speakMandarin(s.hanzi, {
      rate: dinoAudio.speechRate,
      onEnd: () => {
        if (row) row.classList.remove('speaking-highlight');
      }
    });
  }
}

// Render Tab Guratan Kosakata
function renderStrokeTab(unit) {
  const vocabSelector = document.getElementById('vocab-stroke-selector');
  if (!vocabSelector || !unit.vocab || unit.vocab.length === 0) return;

  vocabSelector.innerHTML = unit.vocab.map((v, idx) => `
    <button class="vocab-tab-btn ${idx === currentVocabIndex ? 'active' : ''}" onclick="selectStrokeVocab(${idx})">
      <span class="v-hanzi">${v.hanzi}</span>
      <span class="v-pinyin">${v.pinyin}</span>
    </button>
  `).join('');

  const vocabItem = unit.vocab[currentVocabIndex] || unit.vocab[0];
  if (dinoWriter) {
    dinoWriter.loadVocab(vocabItem, dinoWriter.targetRepeats || 3);
  }
}

// Pilih Kosakata yang Mau Ditulis Guratannya
function selectStrokeVocab(idx) {
  currentVocabIndex = idx;
  const unit = getUnitByBookAndUnitId(currentBookId, currentUnitId);
  renderStrokeTab(unit);
  if (window.dinoAudio) dinoAudio.playEggCrackSound();
}

// Inisialisasi Tab Navigasi Aktivitas
function initTabNavigation() {
  const tabButtons = document.querySelectorAll('.dino-tab-item');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabName) {
  currentActiveTab = tabName;
  document.querySelectorAll('.dino-tab-item').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === tabName);
  });

  document.querySelectorAll('.activity-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-panel-${tabName}`);
  });

  if (window.dinoAudio) dinoAudio.playEggCrackSound();

  if (tabName === 'strokes' && dinoWriter) {
    setTimeout(() => dinoWriter.resizeCanvas(), 50);
  }
}

// Pengaturan Kontrol Audio & Kecepatan TTS
function initAudioControls() {
  const speedSelect = document.getElementById('tts-speed-selector');
  if (speedSelect) {
    speedSelect.addEventListener('change', (e) => {
      const rate = parseFloat(e.target.value);
      if (window.dinoAudio) dinoAudio.setSpeechRate(rate);
      const label = document.getElementById('speed-display-label');
      if (label) {
        if (rate <= 0.5) label.textContent = "Sangat Pelan (0.5x) - Pemula SD";
        else if (rate <= 0.7) label.textContent = "Pelan (0.7x) - Ramah Anak SD";
        else if (rate <= 0.9) label.textContent = "Sedang (0.9x)";
        else label.textContent = "Normal (1.0x)";
      }
    });
  }
}

// Bagikan Link ke Halaman Murid
function openShareModalForCurrent() {
  if (window.dinoStudentPortal) {
    dinoStudentPortal.openShareModal(currentBookId, currentUnitId, currentActiveTab);
  }
}
