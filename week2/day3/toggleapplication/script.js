const toggleBtn = document.getElementById("toggleBtn");

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Event listener
toggleBtn.addEventListener("click", toggleTheme);

// Run on page load
loadTheme();