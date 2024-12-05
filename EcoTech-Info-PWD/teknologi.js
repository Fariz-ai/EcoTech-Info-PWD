/** @format */

ScrollReveal().reveal(".section__header", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  opacity: 0,
  reset: false,
});

ScrollReveal().reveal(".card", {
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  opacity: 0,
  interval: 200,
  reset: false,
});

ScrollReveal().reveal(".card__image", {
  origin: "left",
  distance: "150px",
  duration: 1000,
  delay: 500,
  easing: "ease-in",
  opacity: 0,
  scale: 1.2,
});

ScrollReveal().reveal(".card__description", {
  origin: "right",
  distance: "150px",
  duration: 1000,
  delay: 600,
  easing: "ease-in-out",
  opacity: 0,
});
