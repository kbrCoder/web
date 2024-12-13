document.addEventListener("DOMContentLoaded", function() {
    const typingSpan = document.getElementById("typing-span");
    const words = ["Developer", "Artist", "Web Designer", "Creative Thinker"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 200;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            delay = 100;
        } else {
            typingSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            delay = 200;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            delay = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 500;
        }

        setTimeout(type, delay);
    }

    type();
});
