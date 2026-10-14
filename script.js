// Mobile Navigation Menu
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// Dark and Light Theme
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// Restore saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️";
}

// Automatically update footer year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name +
        "! Your form has been validated successfully.";

    contactForm.reset();
});