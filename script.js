// Zajištění, že animace budou spuštěny až po načtení stránky
window.addEventListener('load', () => {
    // Fade-in efekt pro všechny sekce
    document.querySelectorAll('.fade-in').forEach((element) => {
        element.classList.add('fade-in');
    });

    // Efekt přejíždění při najetí na tlačítko
    const btns = document.querySelectorAll('.btn');
    btns.forEach((btn) => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});

// Scroll-triggered animace pro "O mně" sekci
window.addEventListener('scroll', () => {
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const projectsSection = document.getElementById('projects');
    
    // Aktivace animace pro sekci "O mně"
    if (window.scrollY + window.innerHeight >= aboutSection.offsetTop + 100) {
        aboutSection.classList.add('fade-in');
    }
    
    // Aktivace animace pro sekci "Dovednosti"
    if (window.scrollY + window.innerHeight >= skillsSection.offsetTop + 100) {
        skillsSection.classList.add('fade-in');
    }

    // Aktivace animace pro sekci "Projekty"
    if (window.scrollY + window.innerHeight >= projectsSection.offsetTop + 100) {
        projectsSection.classList.add('fade-in');
    }
});

// Scroll efekt pro tlačítka
document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        window.scroll({
            top: document.querySelector(btn.getAttribute('href')).offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
