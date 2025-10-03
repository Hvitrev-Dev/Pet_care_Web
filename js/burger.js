const burgerIcon = document.getElementById('burger-icon');
const navbarUl = document.querySelector('#navbar ul');
burgerIcon.addEventListener('click', () => {
    if (navbarUl.style.display === 'flex') {
        navbarUl.style.display = 'none';
    } else {
        navbarUl.style.display = 'flex';
    }
}

);
