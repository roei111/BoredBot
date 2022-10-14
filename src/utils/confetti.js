import confetti from "canvas-confetti";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default function startConfetti(element) {
  const { top, height, left, width } = element.getBoundingClientRect();
  const x = (left + width / 2) / window.innerWidth;
  const y = (top + height / 2) / window.innerHeight;
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { x, y },
  });
}
