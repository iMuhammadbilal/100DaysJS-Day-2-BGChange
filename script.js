// select button
const button = document.getElementById('change-color');

//select buuton remove color
const buttonRemove = document.getElementById('remove-color');

// select body
const body = document.querySelector('body');

// add event listener to remove color button
buttonRemove.addEventListener('click', () => {
    // remove background color
    body.style.backgroundColor = 'white';
});

// add event listener to button
button.addEventListener('click', () => {
    // generate random number between 0 and 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.floor(Math.random() * 255);
    // change background color
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b},${a})`;
});