const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300',
];


let current = 0;

function showSlide(index) {
    document.getElementById('slider').src = images[index];
}


function nextSlide() {
    current++;
    if (current >= images.length) current = 0;
    showSlide(current);
}


function prevSlide() {
    current--;
    if (current < 0) current = images.length - 1;
    showSlide(current);
}

setInterval(nextSlide, 2000);