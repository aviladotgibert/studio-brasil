// Pequeñas interacciones: menú móvil, galería modal, formulario ficticio


document.addEventListener('DOMContentLoaded', ()=>{
// año del footer
document.getElementById('year').textContent = new Date().getFullYear();


// menú móvil
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');
burger.addEventListener('click', ()=>{
const opened = mobileNav.getAttribute('aria-hidden') === 'false';
mobileNav.setAttribute('aria-hidden', String(!opened));
});


// galería -> modal
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');


gallery.querySelectorAll('.card').forEach(card=>{
card.addEventListener('click', ()=>{
const src = card.dataset.src || card.querySelector('img').src;
modalImg.src = src;
modal.setAttribute('aria-hidden','false');
});
});


modalClose.addEventListener('click', ()=>{
modal.setAttribute('aria-hidden','true');
modalImg.src = '';
});
modal.addEventListener('click', (e)=>{
if(e.target === modal) modalClose.click();
});


// formulario (simulado)
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');
form.addEventListener('submit', (e)=>{
e.preventDefault();
const name = document.getElementById('name').value.trim();
formMsg.textContent = 'Gracias, '+ (name || '—') + '. Tu mensaje ha sido recibido (simulado).';
form.reset();
});
});
