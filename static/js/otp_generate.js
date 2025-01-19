let countdownInterval; // Declare a global variable for countdownInterval

document.getElementById('addAssignment').addEventListener('click', function () {
    const otpStatus = document.getElementById('otpStatus');
    const timerElement = document.getElementById('timer');

    // Function to format time as MM:SS
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Function to start the countdown
    function startCountdown(duration) {
        // Clear any existing interval before starting a new one
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        let remainingTime = duration;

        countdownInterval = setInterval(() => {
            if (remainingTime <= 0) {
                clearInterval(countdownInterval); // Stop the interval when time is up
                countdownInterval = null; // Reset the interval variable
                otpStatus.innerText = 'Session expired. Generate a new OTP.';
                timerElement.innerText = ''; // Clear the timer display
            } else {
                timerElement.innerText = `Time remaining: ${formatTime(remainingTime)}`;
                remainingTime--;
            }
        }, 1000); // Update every second
    }

    // Handle "Send Request" click
    otpStatus.innerText = 'OTP request sent: Timer started.';
    startCountdown(10 * 60); // Start a 10-minute countdown
});
