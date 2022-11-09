import confetti from "canvas-confetti";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default function startConfetti(element, isFirstTime = false) {
  const { top, height, left, width } = element.getBoundingClientRect();
  const x = (left + width / 2) / window.innerWidth;
  const y = (top + height / 2) / window.innerHeight;
  confetti({
    angle: isFirstTime ? 100 : randomInRange(55, 125),
    spread: 70,
    particleCount: 100,
    origin: { x, y },
  });
}
