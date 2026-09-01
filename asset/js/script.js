/* ==================================================
   MENÚ MÓVIL
================================================== */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("active");
        document.body.classList.toggle("menu-open");

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
            menuToggle.classList.remove("active");
            document.body.classList.remove("menu-open");
            menuToggle.setAttribute("aria-label", "Abrir menú");
        });
    });

}


/* ==================================================
   HEADER - EFECTO SCROLL
================================================== */

const header = document.querySelector(".header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}


/* ==================================================
   WHATSAPP
================================================== */

const whatsappNumber = "5493834343815";

const whatsappMessage =
    "Hola, quiero hacer un pedido de paleta/pierna de cerdo. ¿Me pueden informar disponibilidad y precio?";


const whatsappLinks = document.querySelectorAll("[data-whatsapp]");

whatsappLinks.forEach(link => {

    const producto = link.dataset.producto;
    const precio = link.dataset.precio;

    let message;
    if (producto && precio) {
        message = `Estoy interesado en: ${producto} que vale ${precio}`;
    } else {
        message = whatsappMessage;
    }

    link.href =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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