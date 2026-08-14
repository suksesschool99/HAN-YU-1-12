// =========================================================================
// DINOSAUR SOUND & SPEECH SYNTHESIS ENGINE
// Web Audio API Procedural FX + Web Speech Synthesis (Slow Chinese Mandarin)
// =========================================================================

class DinoAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
    this.speechRate = 0.7; // Lambat dan ramah untuk anak SD (default 0.7x)
    this.chineseVoice = null;
    this.currentUtterance = null;
    
    // Inisialisasi suara TTS
    this.initVoices();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => this.initVoices();
    }
  }

  // Memastikan AudioContext aktif (diaktifkan saat interaksi pengguna pertama)
  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritaskan suara Mandarin Tiongkok (zh-CN, zh, cmn)
    this.chineseVoice = voices.find(v => v.lang === 'zh-CN' || v.lang === 'zh_CN' || v.lang.startsWith('zh')) || null;
  }

  // -----------------------------------------------------------------------
  // 1. CHINESE TEXT-TO-SPEECH (AUDIO PELAN & JELAS UNTUK ANAK SD)
  // -----------------------------------------------------------------------
  speakMandarin(text, options = {}) {
    if (this.isMuted) return;
    if (!('speechSynthesis' in window)) {
      console.warn("Speech Synthesis tidak didukung oleh browser ini.");
      return;
    }

    this.stopSpeaking();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    if (this.chineseVoice) {
      utterance.voice = this.chineseVoice;
    }
    
    // Kecepatan lambat (default 0.65x - 0.7x) untuk anak SD
    utterance.rate = options.rate || this.speechRate;
    utterance.pitch = options.pitch || 1.05; // Ceria dan ramah anak

    if (options.onStart) utterance.onstart = options.onStart;
    if (options.onEnd) utterance.onend = options.onEnd;
    if (options.onBoundary) utterance.onboundary = options.onBoundary;
    if (options.onError) utterance.onerror = options.onError;

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  speakIndonesian(text, options = {}) {
    if (this.isMuted) return;
    if (!('speechSynthesis' in window)) return;

    this.stopSpeaking();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = options.rate || 0.85;
    if (options.onEnd) utterance.onend = options.onEnd;
    window.speechSynthesis.speak(utterance);
  }

  stopSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  setSpeechRate(rate) {
    this.speechRate = Math.max(0.4, Math.min(1.2, rate));
  }

  // -----------------------------------------------------------------------
  // 2. SUARA TEPUK TANGAN MERIAH (APPLAUSE / CHEERING)
  // -----------------------------------------------------------------------
  playApplauseSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const duration = 2.4;
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Sintesis noise tepuk tangan alami berulang-ulang
    for (let i = 0; i < bufferSize; i++) {
      const t = i / ctx.sampleRate;
      const rand = (Math.random() * 2 - 1);
      const envelope = Math.sin((t / duration) * Math.PI);
      data[i] = rand * 0.45 * envelope + (Math.random() > 0.96 ? 0.4 : 0);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Filter bandpass agar menyerupai frekuensi tepukan tangan asli
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100, ctx.currentTime);
    filter.Q.setValueAtTime(1.5, ctx.currentTime);

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.7, ctx.currentTime + 0.15);
    gainNode.gain.exponentialRampToValueAtTime(0.6, ctx.currentTime + 1.6);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noise.start();

    // Bunyikan juga nada selebrasi kemenangan
    this.playCelebrationMelody(ctx);
  }

  playCelebrationMelody(ctx) {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Fanfare)
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.14);

      noteGain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.14);
      noteGain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + idx * 0.14 + 0.04);
      noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.14 + 0.6);

      osc.connect(noteGain);
      noteGain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.14);
      osc.stop(ctx.currentTime + idx * 0.14 + 0.7);
    });
  }

  // -----------------------------------------------------------------------
  // 3. SUARA TERIAKAN DINOSAURUS MERAUNG (DINO ROAR - ROAAAR!)
  // -----------------------------------------------------------------------
  playDinoRoarSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const duration = 1.8;
    const now = ctx.currentTime;

    // 1. Osilator frekuensi rendah (growl / dengkuran monster purba)
    const osc1 = ctx.createOscillator();
    const oscGain1 = ctx.createGain();
    osc1.type = 'sawtooth';
    
    // Pitch drop dari raungan tinggi ke gemuruh rendah
    osc1.frequency.setValueAtTime(240, now);
    osc1.frequency.exponentialRampToValueAtTime(80, now + 0.3);
    osc1.frequency.exponentialRampToValueAtTime(45, now + 1.2);
    osc1.frequency.exponentialRampToValueAtTime(25, now + duration);

    oscGain1.gain.setValueAtTime(0.01, now);
    oscGain1.gain.linearRampToValueAtTime(0.7, now + 0.15);
    oscGain1.gain.exponentialRampToValueAtTime(0.4, now + 1.0);
    oscGain1.gain.exponentialRampToValueAtTime(0.001, now + duration);

    // 2. Osilator distorsi bergetar (vocal cord rumble)
    const osc2 = ctx.createOscillator();
    const oscGain2 = ctx.createGain();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(110, now);
    osc2.frequency.linearRampToValueAtTime(55, now + 0.6);
    osc2.frequency.linearRampToValueAtTime(30, now + duration);

    // Filter resonansi raungan
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.linearRampToValueAtTime(1200, now + 0.25);
    filter.frequency.exponentialRampToValueAtTime(300, now + duration);
    filter.Q.setValueAtTime(6, now);

    // 3. Modulasi getaran raungan (Tremolo LFO)
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.setValueAtTime(22, now); // 22Hz getaran raungan tenggorokan
    lfoGain.gain.setValueAtTime(40, now);
    lfo.connect(filter.frequency);
    lfo.start(now);
    lfo.stop(now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(oscGain1);
    oscGain1.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  // -----------------------------------------------------------------------
  // 4. EFEK SUARA INTERAKTIF (Benar, Klik, Telur Menetas)
  // -----------------------------------------------------------------------
  playCorrectSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    
    // Arpeggio manis 2 nada ceria
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.setValueAtTime(880.00, now + 0.1); // A5

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.45);
  }

  playEggCrackSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';

    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(250, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.12);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopSpeaking();
    }
    return this.isMuted;
  }
}

// Inisialisasi instance global tunggal
const dinoAudio = new DinoAudioEngine();
window.dinoAudio = dinoAudio;
