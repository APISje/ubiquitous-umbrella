// Enter Website Logic
function enterWebsite() {
    const overlay = document.getElementById('enter-overlay');
    const audio = document.getElementById('bg-music');
    
    // Play audio
    audio.play().catch(e => console.log("Audio play blocked by browser"));
    
    // Hide overlay with animation
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.visibility = 'hidden';
    }, 1000);
}

// Particles.js Config
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.1, random: false },
        size: { value: 2, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.05, width: 1 },
        move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});

// Scroll Reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal-bottom, .reveal-left");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

// Birthday Countdown
function updateCountdown() {
    const today = new Date();
    const birthMonth = 9; // Oct
    const birthDay = 8;
    
    let nextBirthday = new Date(today.getFullYear(), birthMonth, birthDay);
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diff = nextBirthday - today;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const countdownEl = document.getElementById('birthday-countdown');
    if (countdownEl) {
        countdownEl.innerHTML = `${days}D ${hours}H`;
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();