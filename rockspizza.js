// ===================================
// THE ROCK'S PIZZA - JAVASCRIPT
// ===================================

// NAVEGACIÓN SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// EFECTO NAVBAR AL HACER SCROLL
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 30px rgba(220, 20, 60, 0.5)';
        navbar.style.background = 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(220, 20, 60, 0.3)';
    }
});

// FORMULARIO DE CONTACTO
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        // Por ejemplo, usando EmailJS o un backend
        
        alert('🎸 ¡Gracias por tu mensaje rockero! Te contactaremos pronto.');
        contactForm.reset();
    });
}

// ANIMACIÓN AL HACER SCROLL
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos que queremos animar
document.querySelectorAll('.menu-card, .review-card, .info-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// EFECTO DE PARTÍCULAS ROCKERAS (opcional - para darle más ambiente)
function createRockParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Crear algunas "notas musicales" flotantes
    setInterval(() => {
        const note = document.createElement('div');
        note.innerHTML = '🎵';
        note.style.position = 'absolute';
        note.style.left = Math.random() * 100 + '%';
        note.style.top = '100%';
        note.style.fontSize = '2rem';
        note.style.opacity = '0.3';
        note.style.pointerEvents = 'none';
        note.style.transition = 'all 5s linear';
        
        hero.appendChild(note);
        
        setTimeout(() => {
            note.style.top = '-10%';
            note.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            note.remove();
        }, 5100);
    }, 3000);
}

// Activar partículas (puedes comentar esta línea si no quieres el efecto)
// createRockParticles();

// CONTADOR DE VISITANTES (simulado)
function updateVisitorCount() {
    const count = Math.floor(Math.random() * 50) + 150; // Simula entre 150-200 visitantes
    console.log(`🎸 Visitantes hoy: ${count}`);
}

updateVisitorCount();

// LOG ROCKERO EN CONSOLA
console.log('%c🎸 THE ROCK\'S PIZZA 🍕', 'color: #dc143c; font-size: 30px; font-weight: bold; text-shadow: 2px 2px 4px #000;');
console.log('%cBienvenido a la mejor pizzería rockera de Valle Dorado', 'color: #fff; font-size: 14px;');
console.log('%cWeb diseñada por TheWuero Web Design 🔥', 'color: #ffd700; font-size: 12px;');
