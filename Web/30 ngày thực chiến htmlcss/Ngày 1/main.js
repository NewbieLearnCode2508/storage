var itemImg = document.querySelectorAll('.img img');
var gallery = document.querySelector('.gallery');
var nextBtn = document.querySelector('.control.next');
var prevBtn = document.querySelector('.control.prev');
var galleryWarp = document.querySelector('.warp');
var galleryImg = document.querySelector('.gallery-inner img');
var closeBtn = document.querySelector('.close');

let currentIndex = 0;

itemImg.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        console.log(currentIndex);
        showGallery();
    });
});

function showGallery() {
    gallery.classList.add('show');
    galleryImg.src = itemImg[currentIndex].src;

    if(currentIndex == itemImg.length - 1) {
        nextBtn.classList.add('hide');
    }else {
        nextBtn.classList.remove('hide');
    }

    if(currentIndex == 0) {
        prevBtn.classList.add('hide');
    }else {
        prevBtn.classList.remove('hide');
    }
}

function close() {
    gallery.classList.remove('show');
}

closeBtn.addEventListener('click', () => {
    close();
});

nextBtn.addEventListener('click', () => {
    
    currentIndex++;

    showGallery();
});

prevBtn.addEventListener('click', () => {
    
    currentIndex--;

    showGallery();
});