// =========================================================================
// STUDENT LINK GENERATOR & STUDENT PORTAL CONTROLLER
// Menghasilkan tautan langsung ke Halaman Murid (student.html) tersinkronisasi
// =========================================================================

class DinoStudentPortal {
  constructor() {
    this.currentBookId = 1;
    this.currentUnitId = 1;
    this.currentTab = 'story';
  }

  // Generate URL Murid berdasarkan Buku, Unit, dan Aktivitas yang dipilih
  generateLink(bookId, unitId, tab = 'story') {
    const origin = window.location.origin || '';
    const pathname = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
    const studentPath = pathname + 'student.html';
    return `${origin}${studentPath}?book=${bookId}&unit=${unitId}&tab=${tab}`;
  }

  // Tampilkan Modal Generator Link Murid
  openShareModal(bookId, unitId, tab = 'story') {
    this.currentBookId = bookId || this.currentBookId;
    this.currentUnitId = unitId || this.currentUnitId;
    this.currentTab = tab || this.currentTab;

    const book = getBookById(this.currentBookId);
    const unit = getUnitByBookAndUnitId(this.currentBookId, this.currentUnitId);
    const generatedUrl = this.generateLink(this.currentBookId, this.currentUnitId, this.currentTab);

    let modal = document.getElementById('student-share-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'student-share-modal';
      modal.className = 'win-modal hidden';
      document.body.appendChild(modal);
    }

    modal.className = 'win-modal show';
    modal.innerHTML = `
      <div class="win-modal-box student-share-box">
        <div class="share-header">
          <span class="share-dino-icon">🦖📬</span>
          <h2>Bagikan Tautan Belajar ke Halaman Murid</h2>
          <p>Tautan ini akan langsung membuka <strong>${book.title}</strong> - <strong>${unit.title}</strong> pada Halaman Khusus Murid.</p>
        </div>

        <div class="share-options-grid">
          <div class="share-option-field">
            <label>Pilih Buku Han Yu:</label>
            <select id="share-select-book" onchange="dinoStudentPortal.updateShareModalLink()">
              ${HAN_YU_CURRICULUM.books.map(b => `
                <option value="${b.id}" ${b.id === this.currentBookId ? 'selected' : ''}>${b.title}</option>
              `).join('')}
            </select>
          </div>

          <div class="share-option-field">
            <label>Pilih Unit Materi:</label>
            <select id="share-select-unit" onchange="dinoStudentPortal.updateShareModalLink()">
              ${book.units.map(u => `
                <option value="${u.id}" ${u.id === this.currentUnitId ? 'selected' : ''}>${u.title}</option>
              `).join('')}
            </select>
          </div>

          <div class="share-option-field">
            <label>Fokus Aktivitas Langsung:</label>
            <select id="share-select-tab" onchange="dinoStudentPortal.updateShareModalLink()">
              <option value="story" ${this.currentTab === 'story' ? 'selected' : ''}>📖 Cerita & Audio Pelan</option>
              <option value="strokes" ${this.currentTab === 'strokes' ? 'selected' : ''}>✍️ Latihan Guratan (3-6x)</option>
              <option value="matching" ${this.currentTab === 'matching' ? 'selected' : ''}>🧩 Mencocokkan Gambar</option>
              <option value="quiz" ${this.currentTab === 'quiz' ? 'selected' : ''}>📝 Kuis Pilihan Berganda (KKM 70)</option>
            </select>
          </div>
        </div>

        <div class="share-link-preview-box">
          <label>🔗 Tautan Langsung Murid:</label>
          <div class="link-input-group">
            <input type="text" id="share-link-input" value="${generatedUrl}" readonly onclick="this.select()">
            <button class="dino-btn primary small" onclick="dinoStudentPortal.copyLink()">Salin Link 📋</button>
          </div>
          <span id="copy-status-msg" class="copy-status"></span>
        </div>

        <div class="share-modal-actions">
          <a href="${generatedUrl}" target="_blank" class="dino-btn primary">Buka Halaman Murid Sekarang 🚀</a>
          <button class="dino-btn secondary" onclick="dinoStudentPortal.closeShareModal()">Tutup</button>
        </div>
      </div>
    `;
  }

  updateShareModalLink() {
    const bookSelect = document.getElementById('share-select-book');
    const unitSelect = document.getElementById('share-select-unit');
    const tabSelect = document.getElementById('share-select-tab');

    if (!bookSelect || !unitSelect || !tabSelect) return;

    this.currentBookId = parseInt(bookSelect.value);
    this.currentUnitId = parseInt(unitSelect.value);
    this.currentTab = tabSelect.value;

    const generatedUrl = this.generateLink(this.currentBookId, this.currentUnitId, this.currentTab);
    const input = document.getElementById('share-link-input');
    if (input) input.value = generatedUrl;
  }

  copyLink() {
    const input = document.getElementById('share-link-input');
    if (input) {
      input.select();
      input.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(input.value).then(() => {
        const msg = document.getElementById('copy-status-msg');
        if (msg) {
          msg.textContent = "✅ Berhasil disalin ke clipboard!";
          setTimeout(() => { msg.textContent = ""; }, 2500);
        }
        if (window.dinoAudio) dinoAudio.playEggCrackSound();
      });
    }
  }

  closeShareModal() {
    const modal = document.getElementById('student-share-modal');
    if (modal) modal.className = 'win-modal hidden';
  }

  // Parse parameter URL untuk Halaman Murid (student.html)
  getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      book: parseInt(params.get('book')) || 1,
      unit: parseInt(params.get('unit')) || 1,
      tab: params.get('tab') || 'story'
    };
  }
}

const dinoStudentPortal = new DinoStudentPortal();
window.dinoStudentPortal = dinoStudentPortal;
