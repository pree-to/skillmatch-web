export class Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modalidade) {
        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
    }

    calcularCompatibilidade(habilidades) {
        const encontradas = this.requisitos.filter(function (requisito) {
            return habilidades.includes(requisito);
        });

        const faltantes = this.requisitos.filter(function (requisito) {
            return !habilidades.includes(requisito);
        });

        const percentual = Math.round(
            (encontradas.length / this.requisitos.length) * 100
        );

        return {
            percentual: percentual,
            encontradas: encontradas,
            faltantes: faltantes
        };
    }

    classificar(percentual) {
        if (percentual >= 80) {
            return "Alta";
        }

        if (percentual >= 50) {
            return "Média";
        }

        return "Baixa";
    }
}

export class VagaFrontEnd extends Vaga {
    constructor(
        id,
        empresa,
        cargo,
        requisitos,
        salario,
        modalidade,
        senioridade
    ) {
        super(id, empresa, cargo, requisitos, salario, modalidade);

        this.senioridade = senioridade;
    }

    obterTitulo() {
        return `${this.cargo} - ${this.senioridade}`;
    }
}