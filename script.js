const paragraphs = document.querySelectorAll("p");
const main = document.getElementById("main");
const complete = document.getElementById("fullText");
const btn = document.getElementById("toggleBtn");

const mensagem = `Eu já quis ter essa conversa com vc há muito tempo, mas nunca soube como. 
Agora que você realmente vai embora, acho que preciso falar. 
Cresci muito tempo morando apenas com meu pai, e homem com homem demonstra amor de formas diferentes. 
Com isso, nunca fui acostumado a falar que amo alguém nem a demonstrar muito carinho. 
Minha forma de demonstrar é perturbando, xingando e enchendo o saco kkkk, sei que vc já sabe disso (ou espero que saiba).

Dia 26 de fevereiro de 2022, carnaval, eu não era uma pessoa muito sociável, 
e nesse dia tinha muita gente que eu não conhecia, mas conheci você, minha melhor amiga. 
Na época, eu me aproximei porque queria ficar com você kkkk, mas vc namorava e eu não achava certo dar em cima de você.

Depois disso acabamos ficando muito próximos e virando praticamente irmãos de outros pais. 
Conversávamos durante todas as aulas, eu até comecei a namorar sua amiga (o que não deu muito certo kkkkk) e você a ficar com o Henrique. 
Nunca te falei isso, mas eu odiava a ideia de vc ficar com ele. Você era minha melhor amiga, e ele meu melhor amigo. 
Eu tinha passado por algumas experiências ruins com amizades, de ser apenas deixado de lado, e tinha medo de que isso pudesse acontecer de novo, mas, 
pelo contrário, nos tornamos ainda mais próximos.

Nos formamos na escola e, no ano seguinte, eu estava na faculdade e você trabalhando. 
Nos afastamos um pouco no meio desse ano. Você arrumou um namorado extremamente estranho e perturbado 
(acho que foi nesse ano mesmo, não achei nenhum registro de quando foi) kkkkk, sorte que conseguiu se livrar dele.

Nos reaproximamos no final de 2024 (depois que largou o cara bizarro) e, um tempo depois, o estrume que se dizia meu "amigo" 
(ele nunca tinha conversado comigo kkkk) começou a conversar com você, mas podemos esquecer ele.

Em 2025 foi o ano em que mais ficamos próximos (tirando a escola). Conversávamos bastante pelo WhatsApp, 
eu ajudava a resolver seus B.O. com o namoro, saímos pra tomar café, ir ao cinema, fomos a festas, você até ficou com meu primo em uma delas kkkkk...

Agora, em 2026, temos que aproveitar o pouco tempo que resta pra vc ir embora. 
Não vou mentir, chorei enquanto escrevia e lembrava de todos os momentos que tivemos juntos. 
Saiba que, sempre que precisar, estarei pronto pra te ajudar com o que for. Obrigado por fazer parte da minha vida por esses anos,
eles foram os melhores que já tive.

Não sou muito de escrever, mas dessa vez consegui até um "ler mais" no WhatsApp kkkkk. E como em Velozes e Furiosos:

Não vou me despedir, pois nunca é um adeus.

Te amo,
Piva 💚

Saudações palmeirenses.`;

const link = "https://wa.me/5535992778901?text=" + encodeURIComponent(mensagem);



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