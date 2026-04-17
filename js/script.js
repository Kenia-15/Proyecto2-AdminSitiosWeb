/* COOKIES */
const btnAceptar = document.getElementById('btn-cookies');
const contenedor = document.getElementById('contenedor-cookies');
const bloqueo = document.getElementById('bloqueo-cookies');

if (!localStorage.getItem('aceptadas')) {
    contenedor.classList.add('activo');
    bloqueo.classList.add('activo');
};

btnAceptar.addEventListener('click', () => {
    contenedor.classList.remove('activo');
    bloqueo.classList.remove('activo');

    localStorage.setItem('aceptadas', true);
});

/* POP UP */
const btnPopup = document.getElementById("abrir-popup");
const closeBtn = document.getElementById("cerrar-popup");
const ventana = document.getElementById("ventana-emergente");

btnPopup.onclick = () => ventana.style.display = "flex";
closeBtn.onclick = () => ventana.style.display = "none";

window.onclick = (e) => {
    if (e.target === ventana) {
        ventana.style.display = "none";
    }
}