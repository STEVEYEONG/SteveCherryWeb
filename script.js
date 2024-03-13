// Language object containing translations
const language = {
    en: {
        welcomeMessage: "Welcome to our Love Story",
        passwordLabel: "Enter the password:",
        enterButton: "Enter",
        errorMessage: "Incorrect password. Please try again."
    },
    vi: {
        welcomeMessage: "Chào mừng bạn đến với câu chuyện tình yêu của chúng tôi",
        passwordLabel: "Nhập mật khẩu:",
        enterButton: "Nhập",
        errorMessage: "Mật khẩu không đúng. Vui lòng thử lại."
    }
};

// Function to set language
function setLanguage(lang) {
    const selectedLanguage = language[lang];
    document.getElementById('welcome-message').textContent = selectedLanguage.welcomeMessage;
    document.getElementById('password-label').textContent = selectedLanguage.passwordLabel;
    document.getElementById('enter-button').textContent = selectedLanguage.enterButton;
    errorMessage.textContent = selectedLanguage.errorMessage;
}

// Default to English
setLanguage('en');

// Password form functionality remains the same
document.addEventListener('DOMContentLoaded', function () {
    const passwordForm = document.getElementById('password-form');
    const correctPassword = 'bb123'; // Replace with your actual password

    passwordForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const enteredPassword = document.getElementById('password').value.trim();

        if (enteredPassword === correctPassword) {
            // Redirect to lovestory.html after a delay
            setTimeout(() => {
                window.location.href = 'lovestory.html';
            }, 2000); // Adjust delay as needed

        } else {
            // Display error message for incorrect password
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Incorrect password. Please try again.';
        }
    });
});




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

// Function to create and append a photo element across the webpage
function createPhoto() {
    const photo = document.createElement('img');
    const randomPhotoNumber = Math.floor(Math.random() * 10) + 1; // Adjust the range of numbers as needed
    const photoPath = 'sources/photos/' + randomPhotoNumber + '.jpeg'; // Adjust the extension as needed
    photo.src = photoPath;
    photo.classList.add('photo');

    // Position randomly within the viewport
    const randomLeft = Math.random() * window.innerWidth;
    const randomTop = Math.random() * window.innerHeight;
    photo.style.left = randomLeft + 'px';
    photo.style.top = randomTop + 'px';

    document.body.appendChild(photo);

    // Remove photo after animation completes
    photo.addEventListener('animationend', () => {
        photo.remove();
    });
}

// Function to create raining effect with photos across the webpage
function createPhotoRain() {
    setInterval(createPhoto, 300); // Adjust interval as needed
}

// Start the photo raining effect
createPhotoRain();

