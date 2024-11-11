let currentSlide = 0;

function slideLeft() {
  if (currentSlide > 0) {
    currentSlide--;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 25}%)`;
  }
}

function slideRight() {
  const totalCards = document.querySelectorAll('.speaker-card').length;
  if (currentSlide < totalCards - 1) {
    currentSlide++;
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 25}%)`;
  }
}

function openModal(name, title, company) {
  document.getElementById('modal-name').textContent = name;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-company').textContent = company;
  document.getElementById('speakerModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('speakerModal').style.display = 'none';
}
