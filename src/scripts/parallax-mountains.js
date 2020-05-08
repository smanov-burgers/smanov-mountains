//const parallaxMountains = document.querySelectorAll('.parallax-mountains');
const layers = document.querySelectorAll('[data-speed]');


function moveLayersDependsOnScroll (wScroll) {
    Array.from(layers).forEach((layer, idx) => {
        const divider = layer.dataset.speed;
        const container = layer.parentElement.parentElement;
        
        if(divider && (container.getBoundingClientRect().top + container.offsetHeight > 0))
        {
            console.log(wScroll-container.offsetTop);
            const strafe = (wScroll-container.offsetTop)*divider/10;
            layer.style.transform = `translateY(-${strafe}%)`;
        }
        
    });
}

window.addEventListener("scroll", e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
});