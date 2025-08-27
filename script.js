document.addEventListener('DOMContentLoaded', function() {

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in elements on scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appeared');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    
    // Contact form handler
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        // This is handled by Formspree, but you can add a confirmation message here
        setTimeout(() => {
            this.reset();
        }, 1000);
    });

});

// Add 'appeared' class to CSS for the fade-in effect to work
const style = document.createElement('style');
style.innerHTML = `
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-in.appeared {
    opacity: 1;
    transform: translateY(0);
}
`;
document.head.appendChild(style);
