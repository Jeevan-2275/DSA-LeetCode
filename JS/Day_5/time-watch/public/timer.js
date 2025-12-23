const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const timeDisplay = $("#timeDisplay");
const progressBar = $("#progressBar");
const chips = $$(".chip");
const minInput = $("#minInput");
const secInput = $("#secInput");
const setCustomBtn = $("#setCustom");
const startBtn = $("#startBtn");
const pauseBtn = $("#pauseBtn");
const resumeBtn = $("#resumeBtn");
const resetBtn = $("#resetBtn");
const themeToggle = $("#themeToggle");
const flashEl = $("#flash");
const customWrap = document.querySelector(".custom");

const LS_KEYS = {
  duration: "timer.durationMs",
  theme: "timer.theme",
  lastType: "timer.lastType", // 'preset' | 'custom'
  lastPreset: "timer.lastPresetMin",
};

let durationMs = 0; // Original duration for progress
let remainingMs = 0;
let endTime = 0;
let rafId = 0;
let running = false;
let paused = false;

function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }

function formatTime(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(remainingMs);
  if (durationMs > 0) {
    const pct = clamp(1 - remainingMs / durationMs, 0, 1);
    progressBar.style.width = `${pct * 100}%`;
  } else {
    progressBar.style.width = `0%`;
  }
}

function setActivePreset(elOrNull) {
  chips.forEach((c) => c.classList.remove("active"));
  customWrap.classList.remove("active");
  if (!elOrNull) return;
  if (elOrNull.classList && elOrNull.classList.contains("chip")) elOrNull.classList.add("active");
  if (elOrNull === customWrap) customWrap.classList.add("active");
}

function setDuration(ms, source = "custom", presetMin = null) {
  cancel();
  durationMs = Math.max(0, Math.floor(ms));
  remainingMs = durationMs;
  updateDisplay();
  updateButtons();
  if (source === "preset") {
    localStorage.setItem(LS_KEYS.lastType, "preset");
    localStorage.setItem(LS_KEYS.lastPreset, String(presetMin));
  } else {
    localStorage.setItem(LS_KEYS.lastType, "custom");
  }
  localStorage.setItem(LS_KEYS.duration, String(durationMs));
}

function updateButtons() {
  startBtn.disabled = running || paused || remainingMs <= 0;
  pauseBtn.disabled = !running;
  resumeBtn.disabled = !(paused && remainingMs > 0);
  resetBtn.disabled = !(running || paused || remainingMs > 0);
  chips.forEach((c) => (c.disabled = running));
  setCustomBtn.disabled = running;
  minInput.disabled = running;
  secInput.disabled = running;
}

function tick(now) {
  remainingMs = Math.max(0, Math.floor(endTime - now));
  updateDisplay();
  if (remainingMs <= 0) {
    complete();
    return;
  }
  rafId = requestAnimationFrame(tick);
}

function start() {
  if (running || paused) return;
  if (remainingMs <= 0) return;
  running = true;
  endTime = performance.now() + remainingMs;
  updateButtons();
  rafId = requestAnimationFrame(tick);
}

function pause() {
  if (!running) return;
  running = false;
  paused = true;
  cancelAnimationFrame(rafId);
  remainingMs = Math.max(0, Math.floor(endTime - performance.now()));
  updateButtons();
  updateDisplay();
}

function resume() {
  if (!paused || remainingMs <= 0) return;
  paused = false;
  running = true;
  endTime = performance.now() + remainingMs;
  updateButtons();
  rafId = requestAnimationFrame(tick);
}

function cancel() {
  running = false;
  paused = false;
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
}

function reset() {
  cancel();
  durationMs = 0;
  remainingMs = 0;
  setActivePreset(null);
  updateButtons();
  updateDisplay();
}

function complete() {
  cancel();
  remainingMs = 0;
  updateDisplay();
  updateButtons();
  alertPulse();
  beep();
}

function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = 880;
    o.connect(g);
    g.connect(ctx.destination);
    g.gain.setValueAtTime(0.001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    o.start();
    o.stop(ctx.currentTime + 0.3);
  } catch {}
}

function alertPulse() {
  flashEl.classList.remove("show");
  void flashEl.offsetWidth; // reflow
  flashEl.classList.add("show");
  setTimeout(() => flashEl.classList.remove("show"), 650);
}

function parseCustomInputs() {
  const m = clamp(parseInt(minInput.value, 10) || 0, 0, 599);
  const s = clamp(parseInt(secInput.value, 10) || 0, 0, 59);
  return m * 60000 + s * 1000;
}

function handlePresetClick(e) {
  if (!(e.target instanceof HTMLButtonElement)) return;
  const min = parseInt(e.target.dataset.min || "0", 10);
  setActivePreset(e.target);
  setDuration(min * 60000, "preset", min);
}

function handleSetCustom() {
  const ms = parseCustomInputs();
  setActivePreset(customWrap);
  setDuration(ms, "custom");
}

function loadSaved() {
  const theme = localStorage.getItem(LS_KEYS.theme);
  if (theme === "dark" || theme === "light") {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.querySelector(".icon").textContent = theme === "dark" ? "🌞" : "🌙";
  }

  const lastType = localStorage.getItem(LS_KEYS.lastType);
  const savedDur = parseInt(localStorage.getItem(LS_KEYS.duration) || "0", 10);
  if (savedDur > 0) {
    durationMs = savedDur;
    remainingMs = savedDur;
    updateDisplay();
    updateButtons();
    if (lastType === "preset") {
      const min = parseInt(localStorage.getItem(LS_KEYS.lastPreset) || "0", 10);
      const chip = Array.from(chips).find((c) => parseInt(c.dataset.min || "-1", 10) === min);
      if (chip) setActivePreset(chip);
    } else if (lastType === "custom") {
      setActivePreset(customWrap);
      const m = Math.floor(savedDur / 60000);
      const s = Math.floor((savedDur % 60000) / 1000);
      minInput.value = String(m);
      secInput.value = String(s);
    }
  } else {
    updateButtons();
    updateDisplay();
  }
}

function toggleTheme() {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem(LS_KEYS.theme, next);
  themeToggle.querySelector(".icon").textContent = next === "dark" ? "🌞" : "🌙";
}

function onKeyDown(e) {
  const tag = (e.target && e.target.tagName) || "";
  if (["INPUT", "TEXTAREA"].includes(tag)) return;
  if (e.repeat) return;
  if (e.code === "Space") {
    e.preventDefault();
    if (running) pause();
    else if (paused && remainingMs > 0) resume();
    else if (!running && !paused && remainingMs > 0) start();
  } else if (e.key.toLowerCase() === "r") {
    reset();
  } else if (e.key.toLowerCase() === "t") {
    toggleTheme();
  } else if (e.key === "1") {
    chips[0]?.click();
  } else if (e.key === "5") {
    const chip = Array.from(chips).find((c) => c.dataset.min === "5");
    chip?.click();
  } else if (e.key === "3") {
    const chip = Array.from(chips).find((c) => c.dataset.min === "30");
    chip?.click();
  }
}

// Event bindings
chips.forEach((c) => c.addEventListener("click", handlePresetClick));
setCustomBtn.addEventListener("click", handleSetCustom);
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resumeBtn.addEventListener("click", resume);
resetBtn.addEventListener("click", reset);
themeToggle.addEventListener("click", toggleTheme);
window.addEventListener("keydown", onKeyDown);

// Initialize
loadSaved();
