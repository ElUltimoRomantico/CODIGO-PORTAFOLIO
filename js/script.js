/*=========================================
    PORTFOLIO 2026
    Edwin Santiago Reyes Ospina
=========================================*/

//=============================
// PRELOADER
//=============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

//=============================
// NAVBAR SCROLL
//=============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10,12,18,.75)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.padding = "18px 35px";
        navbar.style.border = "1px solid rgba(255,255,255,.08)";
        navbar.style.borderRadius = "18px";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";

    }

    else {

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
        navbar.style.padding = "25px 0";
        navbar.style.border = "none";
        navbar.style.borderRadius = "0";
        navbar.style.boxShadow = "none";

    }

});

//=============================
// MENU RESPONSIVE
//=============================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

//=============================
// SCROLL SUAVE
//=============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

        navMenu.classList.remove("active");

    });

});

//=============================
// ANIMACIONES AL HACER SCROLL
//=============================

const elementos = document.querySelectorAll(

    ".hero-left, .hero-right, .about, .skills, .projects, .contact"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

elementos.forEach(el => observer.observe(el));

//=============================
// EFECTO PARALLAX EN EL FONDO
//=============================

const gradient1 = document.querySelector(".gradient1");
const gradient2 = document.querySelector(".gradient2");

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    gradient1.style.transform =
        `translate(${x * 40}px, ${y * 40}px)`;

    gradient2.style.transform =
        `translate(${-x * 40}px, ${-y * 40}px)`;

});

//=============================
// EFECTO ESCRITURA EN EL TITULO
//=============================

const titulo = document.querySelector(".hero h1");

const texto = titulo.innerHTML.replace(/<br>/g, "\n");

titulo.innerHTML = "";

let i = 0;

function escribir() {

    if (i < texto.length) {

        if (texto.charAt(i) === "\n") {

            titulo.innerHTML += "<br>";

        }

        else {

            titulo.innerHTML += texto.charAt(i);

        }

        i++;

        setTimeout(escribir, 20);

    }

}

window.addEventListener("load", () => {

    setTimeout(escribir, 700);

});

//=============================
// EFECTO HOVER EN BOTONES
//=============================

const botones = document.querySelectorAll(".btn");

botones.forEach(btn => {

    btn.addEventListener("mousemove", (e) => {

        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        btn.style.setProperty("--x", `${x}px`);
        btn.style.setProperty("--y", `${y}px`);

    });

});

//=============================
// AÑO AUTOMÁTICO EN FOOTER
//=============================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Edwin Santiago Reyes Ospina`;

}

console.log(
"%cPortafolio desarrollado por Edwin Santiago Reyes Ospina",
"color:#4A7CFF;font-size:16px;font-weight:bold;"
);  
/*==============================
      VISOR DE MODELOS 3D
==============================*/

const modal = document.getElementById("modelModal");

const viewer = document.getElementById("modalViewer");

const closeModal = document.getElementById("closeModal");

const buttons = document.querySelectorAll(".openModel");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        viewer.src = button.dataset.model;

        modal.classList.add("active");

    });

});

closeModal.addEventListener("click",()=>{

    modal.classList.remove("active");

    viewer.removeAttribute("src");

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

        viewer.removeAttribute("src");

    }

});
