// JavaScript pro základní interakce
document.addEventListener('DOMContentLoaded', () => {
    console.log('Stránka je načtena!');
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Děkujeme, že jste navštívili naši stránku!');
        });
    });
});

// Animace při skrolování
const elements = document.querySelectorAll('.fade-in');

const animateOnScroll = () => {
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

