const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    const html = document.documentElement;
    if(html.getAttribute('data-theme') === 'light'){
        html.setAttribute('data-theme','dark');
        toggle.textContent = '☀️';
    } else {
        html.setAttribute('data-theme','light');
        toggle.textContent = '🌙';
    }
});

const faders = document.querySelectorAll('.about-content, .project');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.style.opacity = 1;
        entry.style.transform = 'translateY(0)';
        appearOnScroll.unobserve(entry);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const form = document.querySelector('#contact form');
const modal = document.getElementById('contact-modal');
const closeModal = document.getElementById('modal-close');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    form.reset();
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
});
