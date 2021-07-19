let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 20) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

}

function calc(n) {
    var price = document.getElementsByClassName("item_price")[n].innerHTML;
    var noTickets = document.getElementsByClassName("num")[n].value;
    var total = parseFloat(price) * noTickets;
    if (!isNaN(total))
        document.getElementsByClassName("total")[n].innerHTML = total;
}

