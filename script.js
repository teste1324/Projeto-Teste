const paragraphs = document.querySelectorAll("p");
const main = document.getElementById("main");
const complete = document.getElementById("fullText");
const btn = document.getElementById("toggleBtn");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.3 });

paragraphs.forEach(p => observer.observe(p));

function celebrate() {
    document.body.classList.toggle("celebration");
}

function textComplete() {
    const showingFull = !complete.classList.contains("hidden");
    const whatsBtn = document.getElementById("whatsBtn");

    if (!showingFull) {
        // esconder main com fade
        main.classList.add("fade-out");

        setTimeout(() => {
            main.classList.add("hidden");
            main.classList.remove("fade-out");

            complete.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: "smooth" });

            whatsBtn.classList.remove("hidden")
        }, 600);

        btn.innerText = "Ocultar texto completo";

    } else {
        complete.classList.add("fade-out");

        setTimeout(() => {
            complete.classList.add("hidden");
            complete.classList.remove("fade-out");

            main.classList.remove("hidden");

            whatsBtn.classList.add("hidden")
        }, 600);


        btn.innerText = "Clique aqui para ler tudo";
    }
}

function sendMessage() {
    window.open(link, "_blank");
}



// Data alvo da contagem
const dataAlvo = new Date(2026, 2, 4, 0, 0, 0);

// Pega o div do contador
const contador = document.getElementById("contador");

// Função para atualizar o contador
function atualizarContagem() {
    const agora = new Date();
    const diferenca = dataAlvo - agora;

    if (diferenca <= 0) {
        contador.innerHTML = "Chegou o dia!";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Espera o HTML carregar antes de iniciar
window.onload = function () {
    atualizarContagem(); // Atualiza imediatamente
    intervalo = setInterval(atualizarContagem, 1000); // Atualiza a cada segundo
};

let intervalo; // variável global do setInterval