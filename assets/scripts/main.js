import { carregarVagas } from "./dados.js";
import { VagaFrontEnd } from "./motor.js";
import { mostrarVagas, mostrarMelhorVaga } from "./ui.js";

const formulario = document.querySelector("#formulario-perfil");
const mensagemErro = document.querySelector("#mensagem-erro");

let vagas = [];

async function carregarCatalogo() {
    try {
        vagas = await carregarVagas();

        console.log("Vagas carregadas:", vagas);
    } catch (erro) {
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