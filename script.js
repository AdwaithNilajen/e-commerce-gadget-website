const itemWrapper = document.querySelector('.item-wrapper');

window.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 15; /* Increased sensitivity */
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    itemWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.2)`;
});

window.addEventListener('mouseleave', () => {
    itemWrapper.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1.2)';
});

