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
    // Update elements with translated text
    document.getElementById('welcome-message').textContent = selectedLanguage.welcomeMessage;
    document.getElementById('password-label').textContent = selectedLanguage.passwordLabel;
    document.getElementById('enter-button').textContent = selectedLanguage.enterButton;
    document.getElementById('error-message').textContent = selectedLanguage.errorMessage;
}

// Default to English
setLanguage('en');

document.addEventListener('DOMContentLoaded', function () {
    const passwordForm = document.getElementById('password-form');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const correctPassword = 'vcvc23'; // Replace 'your_password' with your actual password

    // Event listener for form submission
    passwordForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const enteredPassword = passwordInput.value.trim();

        // Check if the entered password is correct
        if (enteredPassword === correctPassword) {
            // Redirect to the main webpage if the password is correct
            window.location.replace('lovestory.html');
        } else {
            // Display an error message if the password is incorrect
            errorMessage.textContent = 'Incorrect password. Please try again.';
        }
    });
});

// Function to calculate and display the difference between dates
function updateDateDifference() {
    // Date provided from backend
    const providedDate = new Date("2024-03-04"); // Replace this with the date from your backend

    // Calculate the difference between the provided date and the current date
    const timeDifference = Date.now() - providedDate.getTime();

    // Convert milliseconds to days, hours, minutes, and seconds
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Construct the result string
    const result = `Duration: ${daysDifference} days, ${hoursDifference} hours, ${minutesDifference} minutes, ${secondsDifference} seconds`;

    // Update the result in the HTML
    document.getElementById("result").textContent = result;
}

// Update the time every second
setInterval(updateDateDifference, 1000);

// Initial update when page loads
updateDateDifference();

// Function to create and append a photo element across the webpage
function createPhoto() {
    const photo = document.createElement('img');
    const randomPhotoNumber = Math.floor(Math.random() * 10) + 1; // Adjust the range of numbers as needed
    const photoPath = `sources/photos/${randomPhotoNumber}.jpeg`; // Adjust the extension as needed
    photo.src = photoPath;
    photo.classList.add('photo');

    // Position randomly within the viewport
    const randomLeft = Math.random() * window.innerWidth;
    const randomTop = Math.random() * window.innerHeight;
    photo.style.left = `${randomLeft}px`;
    photo.style.top = `${randomTop}px`;

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
