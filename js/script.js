//slide show
const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;
images[currentIndex].classList.add('active');

setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % 4;
    images[currentIndex].classList.add('active');
}, 3000);

//modal window
document.querySelectorAll('.imageModal-container img').forEach(image => {
    image.addEventListener('click', () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    })   
});

document.querySelector('.popup-image span').addEventListener('click', () => {
    document.querySelector('.popup-image').style.display = 'none';
});

//nav toggle
const toggleBtn = document.querySelector('.navToggle');
const body = document.body;

toggleBtn.addEventListener('click', _ => {
    body.classList.toggle('offScreenOpen');
});