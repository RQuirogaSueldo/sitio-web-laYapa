/* ==================================================
   MENÚ MÓVIL
================================================== */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    const abierto = nav.classList.contains("active");

    menuToggle.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
    );
});


/* Cerrar menú al seleccionar una opción */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-label", "Abrir menú");
    });
});


/* ==================================================
   WHATSAPP
================================================== */

/*
    IMPORTANTE:
    Reemplazar el número cuando esté disponible.

    Formato:
    código de país + código de área + número

    Ejemplo Argentina:
    549XXXXXXXXXX

    SIN +, SIN ESPACIOS Y SIN GUIONES.
*/

const whatsappNumber = "5493834343815";

const whatsappMessage =
    "Hola, quiero hacer un pedido de paleta/pierna de cerdo al horno. ¿Me pueden informar disponibilidad y precio?";


const whatsappLinks = document.querySelectorAll("[data-whatsapp]");

whatsappLinks.forEach(link => {

    link.href =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    link.target = "_blank";
    link.rel = "noopener noreferrer";

});


/* ==================================================
   AÑO DEL FOOTER
================================================== */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}