const roles = [
    "Java Full Stack Developer",
    "Java Developer",
    "Frontend Developer",
    "Software Engineer"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        // Add one character
        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        // Finished typing
        if (charIndex === currentRole.length) {

            isDeleting = true;

            // Wait before deleting
            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        // Delete one character
        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        // Finished deleting
        if (charIndex === 0) {

            isDeleting = false;

            // Move to next role
            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    // Typing speed
    const speed = isDeleting ? 60 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();