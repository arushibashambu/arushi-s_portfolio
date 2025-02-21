// Dark Mode Toggle
const toggleTheme = () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
};

// Set Theme on Load
window.onload = () => {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }
    setGreetingMessage();
};

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Scroll-to-Top Button
const scrollToTopButton = document.createElement("button");
scrollToTopButton.innerText = "▲";
scrollToTopButton.id = "scrollToTop";
scrollToTopButton.style.cssText = "position:fixed; bottom:20px; right:20px; display:none; padding:10px 15px; font-size:20px; background:#ffcc00; border:none; border-radius:50%; cursor:pointer; opacity:0.8;";
document.body.appendChild(scrollToTopButton);

window.onscroll = () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dynamic Greeting Message
const setGreetingMessage = () => {
    const greetingText = document.createElement("p");
    greetingText.id = "greeting";
    greetingText.style.fontSize = "1.2em";
    greetingText.style.color = "#ffcc00";
    document.querySelector("header").appendChild(greetingText);

    const hour = new Date().getHours();
    let greeting = "Hello!";
    if (hour < 12) greeting = "Good Morning! ☀️";
    else if (hour < 18) greeting = "Good Afternoon! 🌤️";
    else greeting = "Good Evening! 🌙";

    greetingText.innerText = greeting;
};
