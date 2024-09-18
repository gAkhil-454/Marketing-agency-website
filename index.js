// Get the window
var popup = document.getElementById("pop");

// Get the button that opens the window
var button = document.getElementById("contactbutton");

// Get the <span> element that closes the window
var span = document.getElementsByClassName("close")[0];

var mainContent = document.getElementById("main-content");

// When the user clicks the button, open the window
button.onclick = function() {
    console.log("opened");
    popup.style.display = "block";
    mainContent.classList.add("blur");
}
// When the user clicks on <span> (x), close the window
span.onclick = function() {
    console.log("closed");
    popup.style.display = "none";
    mainContent.classList.remove("blur");
}

// image carousel in page2
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    const imageinfo = document.querySelectorAll('.image-info');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const imageCount = images.length;
    let interval;

    function updateCarousel() {
        const offset = -currentIndex *13;
        carousel.style.transform = `translateX(${offset}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }



    function nextImage() {
        currentIndex = (currentIndex + 1) % imageCount;
        updateCarousel();
    }

    function startCarousel() {
        interval = setInterval(nextImage, 2000);
    }

    function stopCarousel() {
        clearInterval(interval);
    }
    
        carousel.addEventListener('mouseover' , () =>{
            stopCarousel();
        } );
        carousel.addEventListener('mouseout' , () =>{
            startCarousel();
        } );
    startCarousel();
    updateCarousel();
});

const readmore = document.getElementsByClassName("readmorebutton");
Array.from(readmore).forEach(read => {
    read.onclick = function() {
        window.open("https://www.fylehq.com", "_blank");
    };
});

// page 4
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const infoDivs = document.querySelectorAll('.info');

    infoDivs.forEach(info => {
        info.addEventListener('mouseover', () => {
            const newImageSrc = info.getAttribute('data-image');
            mainImage.src = newImageSrc;
        });
    });
});
