// Get all the slider elements and their labels
const cpuSlider = document.getElementById('cpu-slider');
const ramSlider = document.getElementById('ram-slider');
const networkSlider = document.getElementById('network-slider');

// Change background colors or visual effects based on slider values
cpuSlider.addEventListener('input', (e) => {
    let value = e.target.value;
    document.body.style.backgroundColor = `rgb(${value * 2.5}, 50, 255)`;
});
ramSlider.addEventListener('input', (e) => {
    let value = e.target.value;
    document.body.style.backgroundColor = `rgb(50, ${value * 2.5}, 255)`;
});
networkSlider.addEventListener('input', (e) => {
    let value = e.target.value;
    document.body.style.backgroundColor = `rgb(255, ${value * 2.5}, 50)`;
});
