export async function carregarVagas() {
    try {
        const resposta = await fetch("./assets/data/vagas.json");

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar as vagas.");
        }

        const vagas = await resposta.json();

        if (vagas.length === 0) {
            throw new Error("Nenhuma vaga encontrada.");
        }

        return vagas;

    } catch (erro) {
        throw erro;
    }
}