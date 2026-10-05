# SkillMatch

Sistema web acadêmico desenvolvido para comparar as habilidades de um candidato com os requisitos de vagas de emprego.

## 🎯 Objetivo

O SkillMatch ajuda o usuário a identificar quais vagas de Front-end combinam melhor com seu perfil.

O usuário informa:

- Nome
- Área de interesse
- Tempo de experiência
- Habilidades

Depois da análise, o sistema apresenta o percentual de compatibilidade com cada vaga, a classificação, as habilidades encontradas e as habilidades que ainda faltam.

Também é apresentada a vaga com maior compatibilidade e uma recomendação de estudo.

## 🌐 Projeto online

A aplicação está disponível em:

https://pree-to.github.io/skillmatch-web/

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- Git
- GitHub

## ⚙️ Principais funcionalidades

- Cadastro do perfil do candidato
- Validação do formulário
- Carregamento das vagas através de `fetch`
- Cálculo de compatibilidade
- Classificação das vagas em Alta, Média e Baixa
- Identificação da melhor vaga
- Recomendação de estudo
- Identificação de habilidades encontradas e faltantes
- Persistência do perfil com `localStorage`
- Interface responsiva
- Manipulação do DOM com JavaScript
- Organização do JavaScript em módulos ES

## 📁 Estrutura do projeto

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