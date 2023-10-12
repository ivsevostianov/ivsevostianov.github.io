const toggleButtons = document.querySelectorAll(".toggle-btn");

// Add click event listeners to toggle buttons
toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Find the content container associated with the clicked button
        const content = button.parentElement.nextElementSibling;

        // Toggle the 'active' class on the content container
        content.classList.toggle("active");

        // Toggle the button text ('+' or '-') based on the state of the content container
        if (content.classList.contains("active")) {
            button.textContent = " -";
        } else {
            button.textContent =" +";
        }
    });
});

