let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.images');
let items = document.querySelectorAll('.images .item');
let contents = document.querySelectorAll('.content .item');

let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360 / countItem;

function nextSlider() {
    active = (active + 1) % countItem;
    rotate += rotateAdd;
    updateSlider();
}

function prevSlider() {
    active = (active - 1 + countItem) % countItem;
    rotate -= rotateAdd;
    updateSlider();
}

function updateSlider() {
    image.style.setProperty('--rotate', rotate + 'deg');

    contents.forEach((content, index) => {
        if (index === active) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

next.onclick = nextSlider;
prev.onclick = prevSlider;
