export function mostrarVagas(vagas) {
    const resultados = document.querySelector("#resultados");

    resultados.innerHTML = "";

    vagas.forEach(function (vaga) {
        const card = document.createElement("article");

        card.classList.add("card-vaga");

        card.innerHTML = `
            <h3>${vaga.cargo}</h3>

            <p><strong>Empresa:</strong> ${vaga.empresa}</p>

            <p><strong>Compatibilidade:</strong> ${vaga.percentual}%</p>

            <p><strong>Classificação:</strong> ${vaga.classificacao}</p>

            <p><strong>Habilidades encontradas:</strong></p>

            <ul>
                ${vaga.encontradas.map(function (habilidade) {
                    return `<li>${habilidade}</li>`;
                }).join("")}
            </ul>

            <p><strong>Habilidades faltantes:</strong></p>

            <ul>
                ${vaga.faltantes.map(function (habilidade) {
                    return `<li>${habilidade}</li>`;
                }).join("")}
            </ul>

            <p><strong>Salário:</strong> ${vaga.salario}</p>

            <p><strong>Modalidade:</strong> ${vaga.modalidade}</p>
        `;

        resultados.appendChild(card);
    });
}

export function mostrarMelhorVaga(vaga) {
    const melhorVaga = document.querySelector("#melhor-vaga");

    let recomendacao = "Você já possui as principais habilidades para esta vaga.";

    if (vaga.faltantes.length > 0) {
        recomendacao = `Para melhorar sua compatibilidade, estude: ${vaga.faltantes.join(", ")}.`;
    }

    melhorVaga.innerHTML = `
        <div class="melhor-vaga">
            <h3>⭐ Melhor compatibilidade</h3>

            <p>
                <strong>${vaga.cargo}</strong>
            </p>

            <p>
                Empresa: ${vaga.empresa}
            </p>

            <p>
                Compatibilidade: ${vaga.percentual}%
            </p>

            <p>
                Classificação: ${vaga.classificacao}
            </p>

            <p>
                <strong>📚 Recomendação:</strong>
                ${recomendacao}
            </p>
        </div>
    `;
}