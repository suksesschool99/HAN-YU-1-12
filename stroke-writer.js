// =========================================================================
// INTERACTIVE HANZI STROKE WRITER & PRACTICE CANVAS (TEMA DINOSAURUS)
// Grid Tian Zi Ge / Mi Zi Ge, Stroke Order Animation, 3-6x Repetition Counter
// Sound Triggers: Automatic Applause on Completion, Automatic Dino Roar on Error
// =========================================================================

class DinoStrokeWriter {
  constructor(canvasId, containerId) {
    this.canvas = document.getElementById(canvasId);
    this.container = document.getElementById(containerId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    
    this.currentVocab = null;
    this.targetRepeats = 3; // Rentang 3-6 kali sesuai permintaan user
    this.currentRepeat = 0;
    this.strokesDrawn = 0;
    this.isDrawing = false;
    this.drawnPoints = [];
    this.allStrokes = [];
    this.showOutline = true;
    this.demoAnimationTimer = null;
    this.isDemoRunning = false;
    
    if (this.canvas) {
      this.initEvents();
      this.resizeCanvas();
    }
  }

  setCanvas(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.initEvents();
      this.resizeCanvas();
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const parentWidth = this.canvas.parentElement ? this.canvas.parentElement.clientWidth : 320;
    const size = Math.min(parentWidth - 24, 340);
    this.canvas.width = size * window.devicePixelRatio;
    this.canvas.height = size * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    this.displayWidth = size;
    this.displayHeight = size;
    this.redraw();
  }

  initEvents() {
    if (!this.canvas) return;
    
    // Mouse events
    this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
    this.canvas.addEventListener('mousemove', (e) => this.draw(e));
    window.addEventListener('mouseup', () => this.stopDrawing());

    // Touch events (Mobile & Tablet)
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.startDrawing(touch);
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.draw(touch);
    }, { passive: false });

    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.stopDrawing();
    });
  }

  getCanvasPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  startDrawing(e) {
    this.isDrawing = true;
    this.drawnPoints = [];
    const pos = this.getCanvasPos(e);
    this.drawnPoints.push(pos);
    if (window.dinoAudio) dinoAudio.getAudioContext();
  }

  draw(e) {
    if (!this.isDrawing) return;
    const pos = this.getCanvasPos(e);
    this.drawnPoints.push(pos);

    // Live stroke rendering on canvas
    this.ctx.save();
    this.ctx.lineWidth = 14;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.strokeStyle = '#2d6a4f';

    const pts = this.drawnPoints;
    if (pts.length > 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(pts[pts.length - 2].x, pts[pts.length - 2].y);
      this.ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }

  stopDrawing() {
    if (!this.isDrawing) return;
    this.isDrawing = false;
    if (this.drawnPoints.length > 3) {
      this.allStrokes.push([...this.drawnPoints]);
      this.strokesDrawn++;
      if (window.dinoAudio) dinoAudio.playEggCrackSound();
    }
    this.drawnPoints = [];
  }

  loadVocab(vocabItem, targetRepeats = 3) {
    this.currentVocab = vocabItem;
    this.targetRepeats = Math.max(3, Math.min(6, targetRepeats));
    this.currentRepeat = 0;
    this.strokesDrawn = 0;
    this.allStrokes = [];
    this.stopDemoAnimation();
    this.renderUIInfo();
    this.redraw();
  }

  setTargetRepeats(num) {
    this.targetRepeats = Math.max(3, Math.min(6, num));
    this.renderUIInfo();
  }

  // Cek keberhasilan tulisan anak (Dengan Audio Otomatis)
  checkPractice(isSimulateError = false) {
    if (!this.currentVocab) return;

    if (isSimulateError || this.allStrokes.length === 0) {
      // JIKA SALAH / MELENCENG -> SUARA DINOSAURUS MERAUNG SECARA OTOMATIS!
      if (window.dinoAudio) dinoAudio.playDinoRoarSound();
      this.triggerRoarAnimation();
      return;
    }

    // JIKA BENAR -> TINGKATKAN PROGRESS REPETISI (3-6x)
    this.currentRepeat++;
    this.allStrokes = [];
    this.renderUIInfo();

    if (this.currentRepeat >= this.targetRepeats) {
      // JIKA SELESAI SEMUA TARGET 3-6 KALI -> SUARA TEPUK TANGAN MERIAH SECARA OTOMATIS!
      if (window.dinoAudio) dinoAudio.playApplauseSound();
      this.triggerApplauseAnimation();
    } else {
      if (window.dinoAudio) dinoAudio.playCorrectSound();
      this.redraw();
    }
  }

  clearCanvas() {
    this.allStrokes = [];
    this.drawnPoints = [];
    this.redraw();
  }

  undoStroke() {
    if (this.allStrokes.length > 0) {
      this.allStrokes.pop();
      this.redraw();
    }
  }

  toggleOutline() {
    this.showOutline = !this.showOutline;
    this.redraw();
  }

  redraw() {
    if (!this.ctx || !this.canvas) return;
    const w = this.displayWidth || 320;
    const h = this.displayHeight || 320;

    this.ctx.clearRect(0, 0, w, h);

    // 1. Gambar Grid Mi Zi Ge (米字格)
    this.drawMiZiGe(w, h);

    // 2. Gambar Karakter Pemandu (Outline Transparan)
    if (this.showOutline && this.currentVocab) {
      this.drawGuideCharacter(w, h);
    }

    // 3. Gambar Goresan Siswa
    this.drawStudentStrokes();
  }

  drawMiZiGe(w, h) {
    const ctx = this.ctx;
    ctx.save();
    
    // Background Grid
    ctx.fillStyle = '#fffdf7';
    ctx.fillRect(0, 0, w, h);

    // Border Kotak
    ctx.strokeStyle = '#e76f51';
    ctx.lineWidth = 3;
    ctx.strokeRect(8, 8, w - 16, h - 16);

    // Garis Putus-putus Merah (Salib & Diagonal)
    ctx.strokeStyle = 'rgba(231, 111, 81, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 6]);

    // Garis Vertikal Tengah
    ctx.beginPath();
    ctx.moveTo(w / 2, 8);
    ctx.lineTo(w / 2, h - 8);
    ctx.stroke();

    // Garis Horizontal Tengah
    ctx.beginPath();
    ctx.moveTo(8, h / 2);
    ctx.lineTo(w - 8, h / 2);
    ctx.stroke();

    // Garis Diagonal 1
    ctx.beginPath();
    ctx.moveTo(8, 8);
    ctx.lineTo(w - 8, h - 8);
    ctx.stroke();

    // Garis Diagonal 2
    ctx.beginPath();
    ctx.moveTo(w - 8, 8);
    ctx.lineTo(8, h - 8);
    ctx.stroke();

    ctx.restore();
  }

  drawGuideCharacter(w, h) {
    const ctx = this.ctx;
    const char = this.currentVocab.hanzi[0] || "你";
    ctx.save();
    ctx.font = `bold ${w * 0.72}px "KaiTi", "STKaiti", "Microsoft YaHei", "Noto Serif SC", serif`;
    ctx.fillStyle = 'rgba(45, 106, 79, 0.18)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, w / 2, h / 2 + 10);
    ctx.restore();
  }

  drawStudentStrokes() {
    const ctx = this.ctx;
    ctx.save();
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#1b4332';

    this.allStrokes.forEach(stroke => {
      if (stroke.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x, stroke[i].y);
      }
      ctx.stroke();
    });
    ctx.restore();
  }

  // Animasi Demo Penulisan Guratan
  playDemoAnimation() {
    if (!this.currentVocab) return;
    this.stopDemoAnimation();
    this.isDemoRunning = true;
    
    // Suarakan lafal dan arti
    if (window.dinoAudio) dinoAudio.speakMandarin(this.currentVocab.hanzi, { rate: 0.6 });

    let step = 0;
    const totalSteps = this.currentVocab.strokes || 6;
    const demoBox = document.getElementById('stroke-demo-indicator');
    if (demoBox) demoBox.innerHTML = `🎬 Menampilkan urutan goresan: <strong>Langkah 1 dari ${totalSteps}</strong>`;

    this.demoAnimationTimer = setInterval(() => {
      step++;
      if (demoBox) demoBox.innerHTML = `🎬 Menampilkan urutan goresan: <strong>Langkah ${Math.min(step, totalSteps)} dari ${totalSteps}</strong>`;
      if (step > totalSteps) {
        this.stopDemoAnimation();
        if (demoBox) demoBox.innerHTML = `✅ Demo selesai! Sekarang giliranmu menulis <strong>${this.targetRepeats} kali</strong>.`;
      }
    }, 1000);
  }

  stopDemoAnimation() {
    if (this.demoAnimationTimer) {
      clearInterval(this.demoAnimationTimer);
      this.demoAnimationTimer = null;
    }
    this.isDemoRunning = false;
  }

  renderUIInfo() {
    const infoContainer = document.getElementById('stroke-meta-display');
    if (!infoContainer || !this.currentVocab) return;

    const strokeNames = this.currentVocab.strokeOrder ? this.currentVocab.strokeOrder.join(' ➔ ') : "Goresan Standar";
    
    // Indikator Telur Dinosaurus untuk Target Repetisi 3-6x
    let eggsHTML = '';
    for (let i = 0; i < this.targetRepeats; i++) {
      if (i < this.currentRepeat) {
        eggsHTML += `<span class="repeat-egg hatched" title="Selesai">🦕</span>`;
      } else {
        eggsHTML += `<span class="repeat-egg unhatched" title="Belum ditulis">🥚</span>`;
      }
    }

    infoContainer.innerHTML = `
      <div class="vocab-character-hero">
        <div class="hero-hanzi">${this.currentVocab.hanzi}</div>
        <div class="hero-details">
          <div class="hero-pinyin">${this.currentVocab.pinyin} <button class="mini-audio-btn" onclick="dinoAudio.speakMandarin('${this.currentVocab.hanzi}')">🔊</button></div>
          <div class="hero-meaning">Arti: <strong>${this.currentVocab.meaning}</strong></div>
          <div class="hero-strokes">Total Goresan: <strong>${this.currentVocab.strokes} Guratan</strong> | Radikal: <strong>${this.currentVocab.radical || '-'}</strong></div>
        </div>
      </div>

      <div class="stroke-order-roadmap">
        <div class="roadmap-title">📋 Urutan Nama Guratan (笔顺):</div>
        <div class="roadmap-tags">${strokeNames}</div>
      </div>

      <div class="target-repeater-box">
        <div class="target-label">
          <span>🎯 Target Latihan:</span>
          <div class="target-btn-group">
            ${[3, 4, 5, 6].map(num => `
              <button class="target-btn ${this.targetRepeats === num ? 'active' : ''}" onclick="dinoWriter.setTargetRepeats(${num})">
                ${num}x
              </button>
            `).join('')}
          </div>
        </div>
        <div class="repeat-progress">
          <div class="eggs-row">${eggsHTML}</div>
          <div class="progress-text">Kemajuan: <strong>${this.currentRepeat}</strong> / <strong>${this.targetRepeats}</strong> kali berhasil</div>
        </div>
      </div>
    `;
  }

  // Selebrasi Tepuk Tangan Meriah (Jika Berhasil Target 3-6x)
  triggerApplauseAnimation() {
    const modal = document.getElementById('stroke-celebration-modal');
    if (!modal) return;

    modal.className = 'win-modal show applause-celebrate';
    modal.innerHTML = `
      <div class="win-modal-box">
        <div class="trophy-glow-wrapper">
          <div class="applause-hands">👏🎉🏆🦖</div>
        </div>
        <h2>HEBAT SEKALI! TARGET TERCAPAI!</h2>
        <p>Kamu telah berhasil menulis karakter <strong>'${this.currentVocab.hanzi}'</strong> sebanyak <strong>${this.targetRepeats} kali</strong> dengan sangat rapi dan benar!</p>
        <div class="action-buttons">
          <button class="dino-btn primary" onclick="dinoWriter.closeCelebration()">Lanjut Karakter Berikutnya ➔</button>
          <button class="dino-btn secondary" onclick="dinoWriter.resetRepetition()">Ulangi Menulis ↺</button>
        </div>
      </div>
    `;
  }

  // Animasi Raungan Dinosaurus (Jika Salah/Gagal)
  triggerRoarAnimation() {
    const modal = document.getElementById('stroke-celebration-modal');
    if (!modal) return;

    modal.className = 'win-modal show roar-error';
    modal.innerHTML = `
      <div class="win-modal-box">
        <div class="roar-glow-wrapper">
          <div class="roar-dino-icon">🦖⚡🔊</div>
        </div>
        <h2>ROAAAAR! GURATAN KURANG TEPAT!</h2>
        <p>Ayo ikuti garis panduan Mi Zi Ge dengan teliti. Tarik garis guratan dengan tenang dan coba lagi!</p>
        <div class="action-buttons">
          <button class="dino-btn primary" onclick="dinoWriter.closeCelebration()">Coba Tulis Lagi ✍️</button>
          <button class="dino-btn secondary" onclick="dinoWriter.playDemoAnimation(); dinoWriter.closeCelebration();">Tonton Contoh Guratan 🎬</button>
        </div>
      </div>
    `;
  }

  closeCelebration() {
    const modal = document.getElementById('stroke-celebration-modal');
    if (modal) modal.className = 'win-modal hidden';
    this.redraw();
  }

  resetRepetition() {
    this.currentRepeat = 0;
    this.allStrokes = [];
    this.closeCelebration();
    this.renderUIInfo();
    this.redraw();
  }
}

// Inisialisasi Instance Global
window.DinoStrokeWriter = DinoStrokeWriter;
