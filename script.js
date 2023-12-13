const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});


loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


const hover1 = document.getElementById('drop');
const stock = document.querySelector('.new-stock');
const anotherarea = document.querySelector('.anotherArea, .anotherAre'); // This variable name is 'anotherarea' but you refer to it as 'another' below.
const stock3 = document.querySelector('.new2'); // I see 'stock3' here, but you refer to it as 'stock2' below. Ensure variable names are consistent.

hover1.addEventListener('mouseover', function() {
    stock.style.display = 'flex';
    stock1.style.display = 'none'; // Hide stock1 if stock is hovered over
});

hover1.addEventListener('mouseup', function() {
    stock.style.display = 'none';
});

document.addEventListener('click', function(event) {
    if (!hover1.contains(event.target) && !stock.contains(event.target)) {
        stock.style.display = 'none';
    }
});

anotherarea.addEventListener('mouseover', function() { // Using 'anotherarea' here because that's how you've named it above.
    stock.style.display = 'none';
    stock3.style.display = 'flex'; // Assuming you meant to use 'stock3' here.
});

const hover = document.getElementById('dropdown');
const stock1 = document.querySelector('.new');
const another = document.querySelector('.anotherArea'); 

hover.addEventListener('mouseover', function() {
    stock1.style.display = 'flex';
    stock.style.display = 'none'; // Hide stock if stock1 is hovered over
});

hover.addEventListener('mouseup', function() {
    stock1.style.display = 'none';
});

document.addEventListener('click', function(event) {
    if (!hover.contains(event.target) && !stock1.contains(event.target)) {
        stock1.style.display = 'none';
    }
});

another.addEventListener('mouseover', function() { // Using 'another' here because that's how you've named it above.
    stock1.style.display = 'none';
    stock3.style.display = 'flex'; // Display stock2 (which is assumed to be a different element than stock3)
});
