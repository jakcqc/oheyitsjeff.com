let images = [];
let currentIndex = 0;


// Assuming you know the total number of images in the folder
const totalImages = 20; // Replace with the actual number of images

// Generate the list of image filenames
for (let i = 1; i <= totalImages; i++) {
    images.push(`IMG_${i}.png`);
}

function cycleImages() {
    let icon = document.getElementById('icon');
    if (images.length > 0) {
        const max = images.length; // Get the length of the array

        const randomIndex = Math.floor(Math.random() * max);
        icon.style.backgroundImage = `url('./FellerArtwork/Slide/${images[randomIndex]}')`;
        currentIndex = randomIndex;
    }
}
document.getElementById('icon').addEventListener('click', function() {
    this.classList.toggle('grown');
});

cycleImages(); // Initial call to set the first image
setInterval(cycleImages, 10000); // Cycle every 10 seconds
