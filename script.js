document.addEventListener("DOMContentLoaded", function () { // Smooth scrolling for navigation links const navLinks = document.querySelectorAll("nav ul li a"); navLinks.forEach(link => { link.addEventListener("click", function (e) { e.preventDefault(); const targetId = this.getAttribute("href").substring(1); const targetElement = document.getElementById(targetId); if (targetElement) { window.scrollTo({ top: targetElement.offsetTop - 50, behavior: "smooth" }); } }); });

// Dark mode toggle
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px";
toggleButton.style.background = "#00bcd4";
toggleButton.style.color = "#fff";
toggleButton.style.border = "none";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});

// Light mode styles
const style = document.createElement("style");
style.innerHTML = `
    .light-mode {
        background-color: #ffffff !important;
        color: #000000 !important;
    }
    .light-mode header,
    .light-mode footer {
        background: #f0f0f0 !important;
        color: #000 !important;
    }
    .light-mode .project {
        background: #e0e0e0 !important;
        color: #000 !important;
    }
`;
document.head.appendChild(style);

});

