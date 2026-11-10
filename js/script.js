/* =========================================================
   Portfólio - Alex
   Scripts dos recursos novos
   ========================================================= */

/* ---------- 1. Modo claro / escuro ---------- */
const html = document.documentElement;
const btnTema = document.getElementById("btnTema");

function aplicarTema(tema) {
    html.setAttribute("data-bs-theme", tema);           // o Bootstrap 5.3 troca as cores sozinho
    const icone = btnTema.querySelector("i");
    const texto = btnTema.querySelector("span");
    if (tema === "dark") {
        icone.className = "bi bi-sun-fill";
        texto.textContent = "Modo claro";
    } else {
        icone.className = "bi bi-moon-stars-fill";
        texto.textContent = "Modo escuro";
    }
}

// lê a escolha salva; se não houver, segue a preferência do sistema
let temaSalvo = null;
try { temaSalvo = localStorage.getItem("tema"); } catch (e) { }
const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
aplicarTema(temaSalvo || (prefereEscuro ? "dark" : "light"));

btnTema.addEventListener("click", function () {
    const novoTema = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    aplicarTema(novoTema);
    try { localStorage.setItem("tema", novoTema); } catch (e) { }
});

/* ---------- 2. Efeito de digitação no carousel ---------- */
const frases = [
    "Estudante de Desenvolvimento de Sistemas",
    "Front-end com HTML, CSS e Bootstrap",
    "Criando interfaces modernas e responsivas"
];
const alvo = document.getElementById("digitando");
let fraseAtual = 0, letra = 0, apagando = false;

function digitar() {
    const frase = frases[fraseAtual];
    alvo.textContent = frase.substring(0, letra);

    if (!apagando && letra < frase.length) {
        letra++;
        setTimeout(digitar, 70);
    } else if (!apagando) {
        apagando = true;
        setTimeout(digitar, 1800);                       // pausa com a frase completa
    } else if (letra > 0) {
        letra--;
        setTimeout(digitar, 35);
    } else {
        apagando = false;
        fraseAtual = (fraseAtual + 1) % frases.length;   // próxima frase
        setTimeout(digitar, 400);
    }
}
digitar();

/* ---------- 3. Animações ao rolar + barras de habilidade ---------- */
const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");

            // se o bloco tiver barras de progresso, preenche cada uma até o nível
            entrada.target.querySelectorAll(".progress-bar").forEach(function (barra) {
                barra.style.width = barra.dataset.nivel + "%";
            });

            observador.unobserve(entrada.target);          // anima só uma vez
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".revelar").forEach(function (el) {
    observador.observe(el);
});

/* ---------- 4. Botão voltar ao topo ---------- */
const btnTopo = document.getElementById("btnTopo");
window.addEventListener("scroll", function () {
    btnTopo.classList.toggle("mostrar", window.scrollY > 500);
});

/* ---------- 5. Fecha o menu no celular ao clicar num link ---------- */
document.querySelectorAll("#menu .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        const menu = document.getElementById("menu");
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});

/* ---------- 6. Ano automático no rodapé ---------- */
document.getElementById("ano").textContent = new Date().getFullYear();
