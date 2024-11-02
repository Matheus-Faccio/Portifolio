let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;  
    } else if (index < 0) {
        currentIndex = totalSlides - 1;  
    }

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startSlideShow() {
    setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, 4000); 
}

startSlideShow();

    const imagem = document.querySelector('.foto');

    imagem.addEventListener('mouseover', function() {
        imagem.style.filter = 'brightness(1.2)'; 
        imagem.style.transform = 'scale(1.1)'; 
    });

    imagem.addEventListener('mouseout', function() {
        imagem.style.filter = 'brightness(1)'; 
        imagem.style.transform = 'scale(1)'; 
    });




    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }

