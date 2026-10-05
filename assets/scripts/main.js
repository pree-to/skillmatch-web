import { carregarVagas } from "./dados.js";
import { VagaFrontEnd } from "./motor.js";
import { mostrarVagas, mostrarMelhorVaga } from "./ui.js";

const formulario = document.querySelector("#formulario-perfil");
const mensagemErro = document.querySelector("#mensagem-erro");

let vagas = [];

async function carregarCatalogo() {
    const statusVagas = document.querySelector("#status-vagas");

    statusVagas.textContent = "Carregando vagas...";

    try {
        vagas = await carregarVagas();

        if (vagas.length === 0) {
            statusVagas.textContent = "Nenhuma vaga encontrada.";
            return;
        }

        statusVagas.textContent = "";

        console.log("Vagas carregadas:", vagas);
    } catch (erro) {
        statusVagas.textContent = "Não foi possível carregar as vagas.";
        console.error("Erro ao carregar vagas:", erro);
    }
}

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

    const candidato = {
        nome: nome,
        area: area,
        experiencia: Number(experiencia),
        habilidades: habilidades
    };

    localStorage.setItem("perfil", JSON.stringify(candidato));

    console.log("Candidato:", candidato);

    analisarVagas(candidato);
});

function analisarVagas(candidato) {
    const vagasDoMotor = vagas.map(function (vaga) {
        return new VagaFrontEnd(
            vaga.id,
            vaga.empresa,
            vaga.cargo,
            vaga.requisitos,
            vaga.salario,
            vaga.modalidade,
            "Júnior"
        );
    });

    const resultados = vagasDoMotor.map(function (vaga) {
        const resultado = vaga.calcularCompatibilidade(
            candidato.habilidades
        );

        const classificacao = vaga.classificar(resultado.percentual);

        return {
            cargo: vaga.obterTitulo(),
            empresa: vaga.empresa,
            percentual: resultado.percentual,
            classificacao: classificacao,
            encontradas: resultado.encontradas,
            faltantes: resultado.faltantes,
            salario: vaga.salario,
            modalidade: vaga.modalidade
        };
    });

    const melhorVaga = resultados.reduce(function (melhor, vaga) {
        if (vaga.percentual > melhor.percentual) {
            return vaga;
        }

        return melhor;
    });

    console.log("Resultados:", resultados);
console.log("Melhor vaga:", melhorVaga);

mostrarVagas(resultados);
mostrarMelhorVaga(melhorVaga);
}

carregarCatalogo();

function carregarPerfil() {
    const perfilSalvo = localStorage.getItem("perfil");

    if (perfilSalvo) {
        const candidato = JSON.parse(perfilSalvo);

        document.querySelector("#nome").value = candidato.nome;
        document.querySelector("#area").value = candidato.area;
        document.querySelector("#experiencia").value = candidato.experiencia;

        candidato.habilidades.forEach(function (habilidade) {
            const caixa = document.querySelector(
                `input[name="habilidades"][value="${habilidade}"]`
            );

            if (caixa) {
                caixa.checked = true;
            }
        });
    }
}

carregarPerfil();