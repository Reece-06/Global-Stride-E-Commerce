const hero = document.querySelector(".section-hero");
const bodyEl = document.querySelector("body");
const stickyHeader = "sticky";
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      bodyEl.classList.add(stickyHeader);
    } else {
      bodyEl.classList.remove(stickyHeader);
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obs.observe(hero);
