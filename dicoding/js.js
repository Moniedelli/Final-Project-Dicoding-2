//navbar responsif
let navbar = document.querySelector('.nav__links');

document.querySelector('#gambar').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}