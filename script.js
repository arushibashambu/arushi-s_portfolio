// Tabs Functionality
function openTab(event, tabId) {
    // Hide all tab content
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    
    // Remove active class from all buttons
    document.querySelectorAll(".tab-link").forEach(button => button.classList.remove("active"));

    // Show the selected tab
    document.getElementById(tabId).classList.add("active");

    // Mark the clicked button as active
    event.currentTarget.classList.add("active");
}

// Load the first tab by default
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("intro").classList.add("active");
});
