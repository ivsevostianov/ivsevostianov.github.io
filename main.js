const toggleButtons = document.querySelectorAll(".toggle-btn");

// Add click event listeners to toggle buttons
toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Find the content container associated with the clicked button
        const content = button.parentElement.nextElementSibling;

        // Check if the content is currently active
        const isActive = content.classList.contains("active");

        // Toggle the 'active' class on the content container
        content.classList.toggle("active");

        // Modify the animation direction
        if (isActive) {
            // If the content was active, slide up
            content.style.maxHeight = "0";
        } else {
            // If the content was not active, slide down
            content.style.maxHeight = content.scrollHeight + "px";
        }

        // Toggle the button text ('+' or '-')
        button.textContent = isActive ? " +" : " -";
    });
});
