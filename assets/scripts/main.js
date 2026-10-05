import { carregarVagas } from "./dados.js";


const formulario = document.querySelector("#formulario-perfil");
const mensagemErro = document.querySelector("#mensagem-erro");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const area = document.querySelector("#area").value.trim();
    const experiencia = document.querySelector("#experiencia").value;

    const habilidades = [];

    const caixasHabilidades = document.querySelectorAll(
        'input[name="habilidades"]:checked'
    );

    caixasHabilidades.forEach(function (caixa) {
        habilidades.push(caixa.value);
    });

    if (nome === "" || area === "" || experiencia === "") {
        mensagemErro.textContent = "Preencha todos os campos obrigatórios.";
        return;
    }

    if (habilidades.length === 0) {
        mensagemErro.textContent = "Selecione pelo menos uma habilidade.";
        return;
    }

    mensagemErro.textContent = "";

    console.log("Nome:", nome);
    console.log("Área:", area);
    console.log("Experiência:", experiencia);
    console.log("Habilidades:", habilidades);
});

async function testarVagas() {
    try {
        const vagas = await carregarVagas();

        console.log("Vagas carregadas:", vagas);

    } catch (erro) {
        console.error("Erro ao carregar vagas:", erro);
    }
}

testarVagas();