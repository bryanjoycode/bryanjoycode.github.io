// Theme toggle (remembers your choice)
(function () {
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (e) {}

  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const isDark =
      root.dataset.theme === "dark" ||
      (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });
})();

// Pages that aren't built yet show a small note instead of going nowhere
(function () {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = "That page is coming soon";
  document.body.appendChild(toast);
  let t;
  document.querySelectorAll('a[href="#"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      toast.classList.add("show");
      clearTimeout(t);
      t = setTimeout(() => toast.classList.remove("show"), 1800);
    })
  );
})();
