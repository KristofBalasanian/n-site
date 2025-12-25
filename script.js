function run() {
  // =========================
  // CONFIG — EDIT THIS ONLY
  // =========================
  const site = {
    name: "First Last",
    tagline: "",
    headline: "Merry Christmas, First",
    bio: "I bought you this domain so you’ve got a spot online. Keep it simple for now — you can make it whatever later.",
    helper: "If you want to actually build it out, Kristof will help you set it up."
  };

  // =========================
  // THEME
  // =========================
  const THEME_KEY = "theme";
  const themeBtn = document.getElementById("theme-toggle");

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeBtn) themeBtn.textContent = theme === "dark" ? "Light" : "Dark";
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  applyTheme(getPreferredTheme());
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  // =========================
  // RENDER
  // =========================
  function setText(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = value ?? "";
  }

  const titleText = site.name ? `${site.name} — Merry Christmas` : "Merry Christmas";
  document.title = titleText;

  const meta = document.getElementById("page-desc");
  const desc = site.tagline || site.bio || "";
  if (meta) meta.setAttribute("content", desc);

  setText("name", site.name || "");
  setText("tagline", site.tagline || "");
  setText("headline", site.headline || "Merry Christmas");
  setText("bio", site.bio || "");
  setText("helper", site.helper || "");
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", run);
} else {
  run();
}
