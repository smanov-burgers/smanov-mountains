const parallaxMountains = document.querySelector('.parallax-mountains');
const layers = parallaxMountains.children;
var speedsArray = [0, 0.5, 0.5, 0.38, 0.45, 0.68, 0.4];


function moveLayersDependsOnScroll (wScroll) {
    Array.from(layers).forEach((layer, idx) => {
        const divider = speedsArray[idx];
        if(divider)
        {
            const strafe = wScroll*divider/10;
        layer.style.transform = `translateY(-${strafe}%)`;
        }
        
    });
}

window.addEventListener("scroll", e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
});