const button = document.getElementById('confettiButton');
const textMessage = document.getElementById('textMessage');
const clickSound = document.getElementById('clickSound');

button.addEventListener('click', () => {
  // 🔊 Play click sound
  clickSound.play();

  // 🎉 Confetti animation
  const duration = 3000;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 35,
    spread: 360,
    ticks: 120,
    zIndex: 1000
  };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    for (let i = 0; i < 3; i++) {
      confetti(Object.assign({}, defaults, {
        particleCount: 25,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.2
        }
      }));
    }
  }, 150);

  // Disable button
  button.disabled = true;
  button.style.opacity = 0.5;

  // ✨ Show first message
  setTimeout(() => {
    textMessage.textContent = "To MOON DIDI ";
    textMessage.classList.add('fade-in');
  }, 3000);

  // 🕓 Fade out and show second message
  setTimeout(() => {
    textMessage.classList.remove('fade-in');
    textMessage.classList.add('fade-out');
  }, 4500);

  setTimeout(() => {
    textMessage.textContent = "Wish You Many Many  Returns Of The Day";
    textMessage.classList.remove('fade-out');
    textMessage.classList.add('fade-in');
  }, 5000);

  // 🌐 Slide transition to next page
  setTimeout(() => {
    document.body.style.transform = "translateX(-100%)";
  }, 7500);

  setTimeout(() => {
    window.location.href = "../photo slider/index.html";
  }, 7500);
});
