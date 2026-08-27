const path = location.pathname.split("/").pop() || "index.html";
const pageVisuals = {
  "projekte.html": ["project-education-warm-v3.png", "50% 42%"],
  "wasser.html": ["project-water-warm-v3.png", "50% 44%"],
  "waisen.html": ["project-orphans-warm-v3.png", "50% 38%"],
  "familien.html": ["project-family-warm-v3.png", "56% 42%"],
  "bildung.html": ["project-education-warm-v3.png", "50% 42%"],
  "ernaehrung.html": ["project-family-warm-v3.png", "58% 42%"],
  "ramadan-kurban.html": ["kurban-project-original.jpg", "55% 46%"],
  "spenden.html": ["hero-warm-v3.png", "66% 45%"],
  "mitmachen.html": ["volunteer.jpg", "58% 50%"],
  "ehrenamt.html": ["project-water-warm-v3.png", "52% 40%"],
  "foerdermitgliedschaft.html": ["hero-warm-v3.png", "66% 45%"],
  "unternehmen.html": ["project-water-warm-v3.png", "52% 40%"],
  "aktion.html": ["project-family-warm-v3.png", "56% 42%"],
  "fachwissen.html": ["project-education-warm-v3.png", "48% 42%"],
  "projekt-teilen.html": ["project-education-warm-v3.png", "48% 42%"],
  "beratung.html": ["beratung-interview-rect-v1.png", "50% 50%"],
  "ueber-uns.html": ["project-water-warm-v3.png", "48% 42%"],
  "kontakt.html": ["project-water-warm-v3.png", "52% 40%"]
};
const pageVisual = pageVisuals[path];
if (pageVisual) {
  document.body.classList.add("visual-page");
  document.body.style.setProperty("--page-visual", `url("assets/${pageVisual[0]}")`);
  document.body.style.setProperty("--page-focus", pageVisual[1]);
}
const nav = [
  { url: "projekte.html", label: "Projekte", children: [["wasser.html", "Wasserprojekte"], ["waisen.html", "Waisenkinder"], ["familien.html", "Familienhilfe"], ["bildung.html", "Bildung"], ["ernaehrung.html", "Ernährung"]] },
  { url: "ramadan-kurban.html", label: "Kurban", children: [["spenden.html", "Kurban-Spende"]] },
  { url: "mitmachen.html", label: "Mitmachen", children: [["ehrenamt.html", "Ehrenamtlich helfen"], ["foerdermitgliedschaft.html", "Fördermitglied werden"], ["unternehmen.html", "Als Unternehmen helfen"], ["aktion.html", "Eigene Aktion starten"], ["fachwissen.html", "Fachwissen einbringen"], ["projekt-teilen.html", "Projekt teilen"]] },
  { url: "beratung.html", label: "Beratung" },
  { url: "ueber-uns.html", label: "Über uns", children: [["wirkung.html", "Unsere Wirkung"]] },
  { url: "kontakt.html", label: "Kontakt" }
];
const donationNav = { url: "spenden.html", label: "Jetzt helfen", children: [["spenden.html#wasser-spenden", "Wasser spenden"], ["spenden.html#waisenpatenschaft", "Waisenpatenschaft"], ["spenden.html#bildung-spenden", "Bildung unterstützen"], ["spenden.html#familien-spenden", "Familien stärken"], ["spenden.html#kurban-spenden", "Ramadan & Kurban"], ["foerdermitgliedschaft.html", "Fördermitgliedschaft"]] };
const currentIn = (item) => item.url === path || item.children?.some(([url]) => url.split("#")[0] === path);
const currentTarget = path + location.hash;
const renderNavItem = (item, cta = false) => {
  const active = currentIn(item);
  const id = `submenu-${item.url.replace(/\.html$/, "")}`;
  const icon = cta ? '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"/></svg>' : "";
  if (!item.children) return `<a class="nav-link" href="${item.url}"${active ? ' aria-current="page"' : ""}>${item.label}</a>`;
  return `<div class="nav-group${cta ? " nav-donate" : ""}${active ? " is-current" : ""}"><div class="nav-group-label"><a class="${cta ? "button nav-cta" : "nav-link"}" href="${item.url}"${item.url === path ? ' aria-current="page"' : ""}>${icon}<span>${item.label}</span></a><button class="submenu-toggle" type="button" aria-expanded="false" aria-controls="${id}"><span class="sr">Untermenü ${item.label} öffnen</span><svg aria-hidden="true" viewBox="0 0 16 16"><path d="m3 6 5 5 5-5"/></svg></button></div><div class="submenu" id="${id}">${item.children.map(([url, label]) => `<a href="${url}"${url === currentTarget || (!url.includes("#") && url === path) ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</div></div>`;
};
document.querySelector("[data-header]").innerHTML =
  `<a class="skip" href="#main">Zum Inhalt</a><header class="site-header"><a class="brand" href="index.html"><img src="assets/logo.png" alt="Butterfly Effects"></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-navigation"><span class="sr">Menü öffnen</span><span></span><span></span><span></span></button><nav class="nav" id="main-navigation" aria-label="Hauptnavigation">${nav.map((item) => renderNavItem(item)).join("")}${renderNavItem(donationNav, true)}</nav></header>`;
document.querySelector("[data-footer]").innerHTML =
  `<footer class="site-footer"><div class="footer-grid"><div><img class="footer-logo" src="assets/logo.png" alt="Butterfly Effects"><p>Hilfe, die Menschen stärkt – von Hamburg in die Welt.</p></div><div><h3>Entdecken</h3><a href="projekte.html">Projekte</a><a href="ramadan-kurban.html">Kurban & Ramadan</a><a href="beratung.html">Psychosoziale Beratung</a><a href="ernaehrung.html">Ernährungsunterstützung</a><a href="ehrenamt.html">Ehrenamt</a><a href="foerdermitgliedschaft.html">Fördermitgliedschaft</a><a href="mitmachen.html">Mitmachen</a></div><div><h3>Kontakt</h3><a href="kontakt.html">Kontakt aufnehmen</a><a href="mailto:info@butterfly-effects.org">info@butterfly-effects.org</a><p>Regus Business Centre<br>Hahnenkamp 1 · 22765 Hamburg</p></div></div><div class="legal">© Butterfly Effects Charity · Vorschau – Inhalte und Kennzahlen vor Veröffentlichung bestätigen · <a href="https://butterfly-effects.org/impressum/">Impressum</a> · <a href="https://butterfly-effects.org/datenschutzerklaerung/">Datenschutz</a></div></footer>`;
document.querySelector(".menu-toggle")?.addEventListener("click", (e) => {
  const n = document.querySelector(".nav");
  const open = n.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", open);
  e.currentTarget.querySelector(".sr").textContent = open
    ? "Menü schließen"
    : "Menü öffnen";
});
document.querySelectorAll(".submenu-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const group = toggle.closest(".nav-group");
    const willOpen = !group.classList.contains("submenu-open");
    document.querySelectorAll(".nav-group.submenu-open").forEach((openGroup) => {
      if (openGroup === group) return;
      openGroup.classList.remove("submenu-open");
      openGroup.querySelector(".submenu-toggle")?.setAttribute("aria-expanded", "false");
    });
    group.classList.toggle("submenu-open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
  });
});
document.addEventListener("click", (event) => {
  if (event.target.closest(".nav-group")) return;
  document.querySelectorAll(".nav-group.submenu-open").forEach((group) => {
    group.classList.remove("submenu-open");
    group.querySelector(".submenu-toggle")?.setAttribute("aria-expanded", "false");
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".nav-group.submenu-open").forEach((group) => {
    group.classList.remove("submenu-open");
    const toggle = group.querySelector(".submenu-toggle");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.focus();
  });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && "IntersectionObserver" in window) {
  const revealGroups = [
    "main > section:not(.hero):not(.page-hero)",
    ".project",
    ".action-row",
    ".card",
    ".step",
    ".donation-item",
    ".team-card",
    ".offerings details"
  ];
  const revealItems = [...document.querySelectorAll(revealGroups.join(","))];
  revealItems.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
  });
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5%" }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
  requestAnimationFrame(() => document.body.classList.add("reveal-ready"));
}

const projectTrack = document.querySelector(".project-carousel .project-grid");
document.querySelectorAll("[data-project-scroll]").forEach((control) => {
  control.addEventListener("click", () => {
    if (!projectTrack) return;
    const direction = control.dataset.projectScroll === "next" ? 1 : -1;
    projectTrack.scrollBy({
      left: direction * projectTrack.clientWidth * 0.82,
      behavior: "smooth"
    });
  });
});
