function updateDateDifference() {
    // Date provided from backend
    var providedDate = new Date("2024-03-04"); // Replace this with the date from your backend

    // Calculate the difference between the provided date and the current date
    var timeDifference = Date.now() - providedDate.getTime();

    // Convert milliseconds to days, hours, minutes, and seconds
    var secondsDifference = Math.floor(timeDifference / 1000);
    var minutesDifference = Math.floor(secondsDifference / 60);
    var hoursDifference = Math.floor(minutesDifference / 60);
    var daysDifference = Math.floor(hoursDifference / 24);

    // Calculate remaining hours, minutes, and seconds
    var remainingHours = hoursDifference % 24;
    var remainingMinutes = minutesDifference % 60;
    var remainingSeconds = secondsDifference % 60;

    // Construct the result string
    var result = "Duration: " + daysDifference + " days, " + remainingHours + " hours, " + remainingMinutes + " minutes, " + remainingSeconds + " seconds";

    // Update the result in the HTML
    document.getElementById("result").innerHTML = result;
}

// Update the time every second
setInterval(updateDateDifference, 1000);

// Initial update when page loads
updateDateDifference();

// Function to create and append a photo element
function createPhoto() {
    const photo = document.createElement('img');
    const photoPath = 'sources/photos/photo' + Math.floor(Math.random() * 10) + '.jpg'; // Adjust the number of photos as needed
    photo.src = photoPath;
    photo.classList.add('photo');

    // Randomize position for left or right frame
    const randomPosition = Math.random() * 100;
    if (randomPosition < 50) {
        photo.style.left = Math.random() * 100 + '%';
    } else {
        photo.style.right = Math.random() * 100 + '%';
    }

    document.body.appendChild(photo);

    // Remove photo after animation completes
    photo.addEventListener('animationend', () => {
        photo.remove();
    });
}

// Function to create raining effect with photos
function createPhotoRain() {
    setInterval(createPhoto, 300); // Adjust interval as needed
}

// Start the photo raining effect
createPhotoRain();
