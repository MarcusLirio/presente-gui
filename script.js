document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const menuItems = document.querySelectorAll(".menu-item");

    setTimeout(function () {
        header.classList.add("active");
        menuItems.forEach(item => item.classList.add("active"));
    }, 3000); // Mostrar o cabeçalho e os itens do menu após 3 segundos
});

window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");

    // Verifique se a rolagem vertical atingiu ou passou os 100vh
    if (window.scrollY >= window.innerHeight) {
        header.classList.add("hidden"); // Adicione a classe para esconder o cabeçalho
    } else {
        header.classList.remove("hidden"); // Remova a classe para mostrar o cabeçalho
    }
});

// Resto do seu JavaScript

window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    var cards = document.querySelector(".cards");

    var scrollPosition = header.offsetTop + window.innerHeight;

    if (window.scrollY >= scrollPosition) {
        cards.classList.add("visible");
    } else {
        cards.classList.remove("visible");
    }
});

window.addEventListener("scroll", function () {
    var header = document.querySelector(".cards");
    var cards = document.querySelector(".about");

    var scrollPosition = header.offsetTop + window.innerHeight;

    if (window.scrollY >= scrollPosition) {
        cards.classList.add("visible");
    } else {
        cards.classList.remove("visible");
    }
});


var audio = document.getElementById("myAudio");
var audioToggle = document.getElementById("audioToggle");
var audioIcon = document.getElementById("audioIcon");

// Define o volume inicial para metade (0.5)
audio.volume = 0.1;

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioIcon.className = "fa fa-volume-up";
    } else {
        audio.pause();
        audioIcon.className = "fa fa-volume-off";
    }
}

// document.getElementById("scrollToTopButton").addEventListener("click", function (event) {
//     event.preventDefault();
//     var scrollToTop = window.setInterval(function () {
//         var pos = window.pageYOffset;
//         if (pos > 0) {
//             window.scrollTo(0, pos - 30); // Ajuste o valor para controlar a velocidade de rolagem
//         } else {
//             window.clearInterval(scrollToTop);
//         }
//     }, 16); // 60fps
// }); 

window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.pageYOffset > 100) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

const text = "Olá! Sou Guilherme, um profissional apaixonado por marketing e produtos de informação. Minha jornada gira em torno de conectar ideias criativas com estratégias sólidas, impulsionando marcas e produtos ao sucesso. Com uma mente curiosa e olhar atento às tendências, estou comprometido em desenvolver abordagens inovadoras que geram impacto. Convido você a explorar meu portfólio, onde compartilho exemplos do meu trabalho e experiência. Vamos colaborar para transformar ideias em resultados memoráveis!"; // O texto que será renderizado
const typingDelay = 100; // Atraso (em milissegundos) entre cada letra

const typingElement = document.getElementById("typing-text");
const cursorElement = document.querySelector(".typing-cursor");
let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        typingElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingDelay);
    } else {
        cursorElement.style.display = "none";
    }
}

// Inicie a animação quando a página carregar
window.onload = typeText;

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

function Enviar() {
    document.addEventListener('click', e => {
        e.preventDefault()
    })
    const email = document.getElementById('email')
    if (email.value) {
        showAlert();
        setTimeout(() => {
            closeAlert()
        }, 1000000)
    }
}

var overlay = document.getElementById('overlay');
var closeButton = document.getElementById('closeButton');
var alertBox = document.getElementById('alertBox');
var alertMessage = document.getElementById('alertMessage');

function showAlert() {
    // alertMessage.textContent = message;
    overlay.style.display = 'flex';
    setTimeout(function () {
        alertBox.style.transform = 'translateY(0)';
    }, 100);
}

function closeAlert() {
    alertBox.style.transform = 'translateY(-100%)';
    setTimeout(function () {
        overlay.style.display = 'none';
    }, 300);
}
