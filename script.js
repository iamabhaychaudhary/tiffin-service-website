// Modal functionality
const modal = document.getElementById('loginModal');
const loginButton = document.getElementById('loginButton');
const closeButton = document.querySelector('.close');

loginButton.onclick = function() {
    modal.style.display = 'block';
}

closeButton.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Basic order functionality (to be enhanced later with backend)
const orderButtons = document.querySelectorAll('.order-btn');
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Your order has been placed!');
    });
});
