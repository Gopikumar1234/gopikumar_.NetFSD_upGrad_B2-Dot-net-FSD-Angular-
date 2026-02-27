// Select elements
const feedbackBtn = document.getElementById("feedbackBtn");
const messageDiv = document.getElementById("message");

// Add event listener
feedbackBtn.addEventListener("click", function () {
    messageDiv.textContent = "✅ Thank you! Your feedback has been submitted.";
});