/* ==========================
   STAYHUB THEME
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("themeToggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("stayhubTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        if (toggle) {
            toggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';
        }
    }

    // No toggle on this page?
    if (!toggle) return;

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const dark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "stayhubTheme",
            dark ? "dark" : "light"
        );

        toggle.innerHTML = dark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

    });

});