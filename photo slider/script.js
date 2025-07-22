let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const birthdayBtn = document.getElementById("birthdayButton");
const music = document.getElementById("birthdayMusic");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex < slides.length) {
    slides[slideIndex].style.display = "flex";

    // If pause slide (index 2), wait longer
    if (slideIndex === 2) {
      slideIndex++;
      setTimeout(showSlides, 4000);
    } else {
      slideIndex++;
      setTimeout(showSlides, 3000);
    }
  } else {
    birthdayBtn.style.display = "inline-block";
  }
}

function startShow() {
  document.querySelector('.slideshow-container').style.display = "block";
  document.querySelector('.dots-container').style.display = "block";
  document.querySelector('.play-button-container').style.display = "none";

  document.body.style.overflow = "auto"; // Enable scroll if needed

  music.play().catch(() => {
    document.addEventListener("click", () => music.play(), { once: true });
  });

  showSlides();
}

function plusSlides(n) {
  slideIndex += n - 1;
  if (slideIndex < 0) slideIndex = 0;
  if (slideIndex >= slides.length) slideIndex = slides.length - 1;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

function goToNextPage() {
  window.location.href = "../happy birthday animation/1.html";
}
