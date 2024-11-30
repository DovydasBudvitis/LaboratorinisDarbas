const body = document.body;
const btn = document.getElementById("theme-toggle");
const theme = localStorage.getItem("theme") || "dark-mode";
body.className = theme;
btn.textContent = theme === "dark-mode" ? "Switch to Light Mode" : "Switch to Dark Mode";
btn.onclick = () => {
    const isDark = body.classList.toggle("dark-mode");
    body.className = isDark ? "dark-mode" : "light-mode";
    btn.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
    localStorage.setItem("theme", isDark ? "dark-mode" : "light-mode");
};

const scrollTopButton = document.getElementById("scroll-top");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

scrollTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

