desabilitarBotaoReiniciar();

function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (quantidade <= 0) {
        alert("A quantidade deve ser maior que zero.");
        return;
    }

    if (de > ate) {
        alert("O valor em 'Do número' não pode ser maior que 'Até o número'.");
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert("A quantidade de números sorteados é maior que o intervalo disponível.");
        return;
    }

    let sorteados = [];

    while (sorteados.length < quantidade) {
        let numero = obterNumeroAleatorio(de, ate);
        if (!sorteados.includes(numero)) {
            sorteados.push(numero);
        }
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML =
        `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    habilitarBotaoReiniciar();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function habilitarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
    botao.disabled = false;
}

function desabilitarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
    botao.disabled = true;
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML =
        "<label class='texto__paragrafo'>Números sorteados: nenhum até agora</label>";

    desabilitarBotaoReiniciar();
}
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // evita comportamento padrão

        const quantidade = document.getElementById("quantidade");
        const de = document.getElementById("de");
        const ate = document.getElementById("ate");

        if (document.activeElement === quantidade) {
            de.focus();
        } 
        else if (document.activeElement === de) {
            ate.focus();
        } 
        else if (document.activeElement === ate) {
            sortear();
        }
    }

    if (event.code === "Space") {
        const botaoReiniciar = document.getElementById("btn-reiniciar");

        if (!botaoReiniciar.disabled) {
            event.preventDefault();
            reiniciar();
        }
    }
});

