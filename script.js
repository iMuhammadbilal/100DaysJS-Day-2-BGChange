// select button
const button = document.querySelector('button');
// select body
const body = document.querySelector('body');

// add event listener to button
button.addEventListener('click', () => {
    // generate random number between 0 and 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // change background color
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});