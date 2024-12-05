/** @format */

const sr = ScrollReveal({
  distance: "60px",
  duration: 1200,
  easing: "ease-out",
});

sr.reveal(".section__header", {
  origin: "top",
  distance: "40px",
  duration: 1500,
  delay: 200,
  opacity: 0,
});

sr.reveal(".tools__container", {
  origin: "left",
  distance: "100px",
  duration: 1700,
  delay: 400,
  opacity: 0,
});

sr.reveal(".tool-card", {
  origin: "bottom",
  distance: "80px",
  interval: 300,
  duration: 1200,
  scale: 0.9,
  opacity: 0,
});

sr.reveal(".tool-card__image-container", {
  origin: "right",
  distance: "50px",
  duration: 1000,
  delay: 500,
  scale: 1.2,
  opacity: 0,
});
