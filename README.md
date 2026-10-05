# SkillMatch

Sistema web acadêmico para comparar as habilidades de um candidato com requisitos de vagas de emprego.

## Sobre o projeto

O SkillMatch permite que o usuário informe seus dados, área de interesse, tempo de experiência e habilidades.

O sistema analisa as vagas disponíveis e apresenta:

- percentual de compatibilidade;
- classificação da vaga;
- habilidades encontradas;
- habilidades que faltam;
- salário;
- modalidade de trabalho;
- melhor vaga para o candidato;
- recomendação de estudo.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- Git e GitHub

## Funcionalidades

- Cadastro do perfil do candidato;
- Validação do formulário;
- Carregamento das vagas utilizando `fetch`;
- Cálculo de compatibilidade;
- Classificação das vagas;
- Identificação da melhor vaga;
- Recomendação de estudo;
- Persistência do perfil utilizando `localStorage`;
- Interface responsiva;
- Organização do código em módulos JavaScript.

## Estrutura do projeto

```text
skillmatch-web/
│
├── assets/
│   ├── data/
│   │   └── vagas.json
│   │
│   ├── img/
│   │
│   ├── scripts/
│   │   ├── dados.js
│   │   ├── main.js
│   │   ├── motor.js
│   │   └── ui.js
│   │
│   └── styles/
│       └── index.style.css
│
├── index.html
└── README.md