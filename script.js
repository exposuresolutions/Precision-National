// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Mobile menu toggle
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('mobileToggle');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Stats toggle (accordion style)
function toggleStat(element) {
    document.querySelectorAll('.stat-item').forEach(item => {
        if (item !== element) item.classList.remove('active');
    });
    element.classList.toggle('active');
}

// Scroll animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Auto-fix for website builders
document.addEventListener("DOMContentLoaded", function() {
    try {
        var header = document.querySelector('header');
        if(header) {
            var parent = header.parentElement;
            while(parent && parent.tagName !== 'BODY') {
                parent.style.padding = '0';
                parent.style.margin = '0';
                parent = parent.parentElement;
            }
        }
    } catch(e) { console.log("Auto-fix padding skipped"); }
});

// Hero video sync
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('heroVideo');
    if(video) {
        video.play().catch(e => console.log("Auto-play prevented"));
    }
});