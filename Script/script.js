    // اسلایدر تک عکسی
    const images = document.querySelectorAll('.auto-slider img');
    let currentIndex = 0;

    function changeSlide() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }

    setInterval(changeSlide, 3000); // تغییر عکس هر ۳ ثانیه

    // اسلایدر چند کارتی
    const slider = document.querySelector('.slider');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const cards = document.querySelectorAll('.card');

    let currentCardIndex = 0;

    function updateButtons() {
      prevBtn.disabled = currentCardIndex === 0;
      nextBtn.disabled = currentCardIndex === cards.length - Math.floor(document.querySelector('.slider-container').offsetWidth / (cards[0].offsetWidth + 30));
    }

    function slide(direction) {
      const cardWidth = cards[0].offsetWidth;
      const cardMargin = parseInt(getComputedStyle(cards[0]).marginRight);
      const visibleWidth = document.querySelector('.slider-container').offsetWidth;
      const visibleCardsCount = Math.floor(visibleWidth / (cardWidth + cardMargin));

      if (direction === 'next') {
        if (currentCardIndex < cards.length - visibleCardsCount) {
          currentCardIndex++;
        }
      } else if (direction === 'prev') {
        if (currentCardIndex > 0) {
          currentCardIndex--;
        }
      }

      const offset = -(currentCardIndex * (cardWidth + cardMargin));
      slider.style.transform = `translateX(${offset}px)`;
      updateButtons();
    }

    prevBtn.addEventListener('click', () => slide('prev'));
    nextBtn.addEventListener('click', () => slide('next'));

    updateButtons();

    // عملکرد جستجو
const searchToggle = document.getElementById('search-toggle');
const searchBar = document.getElementById('search-bar');
const header = document.getElementById('header');
const searchInput = document.getElementById('search-input');

searchToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  const isActive = searchBar.classList.contains('active');
  if (isActive) {
    searchBar.classList.remove('active');
    header.style.padding = '25px 0';
  } else {
    searchBar.classList.add('active');
    header.style.padding = '30px 0';
    searchInput.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!searchBar.contains(event.target) && !searchToggle.contains(event.target)) {
    searchBar.classList.remove('active');
    header.style.padding = '25px 0';
  }
});
