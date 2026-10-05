# SkillMatch

Sistema web desenvolvido para identificar vagas de emprego compatíveis com as habilidades de um candidato.

O usuário informa seus dados, experiência e habilidades. O sistema analisa as vagas disponíveis e apresenta as oportunidades de acordo com o nível de compatibilidade.

---

## 🎯 Objetivo

O objetivo do projeto é desenvolver uma aplicação web utilizando HTML, CSS e JavaScript, aplicando conceitos de desenvolvimento web.

O sistema permite que o candidato informe seu perfil e compare suas habilidades com vagas disponíveis.

---

## 🚀 Funcionalidades

- Cadastro do perfil do candidato
- Informação da área de interesse
- Informação do nível de experiência
- Seleção das habilidades
- Carregamento das vagas através de arquivo JSON
- Análise de compatibilidade entre candidato e vaga
- Cálculo do percentual de compatibilidade
- Classificação das vagas
- Identificação da melhor vaga
- Exibição das habilidades encontradas
- Exibição das habilidades que faltam
- Recomendação de estudo
- Utilização de LocalStorage
- Interface responsiva
- Geração dinâmica dos resultados na página

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- Fetch API
- LocalStorage
- ES Modules
- Git
- GitHub
- GitHub Pages

---

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
```

---

## 🔗 Links do projeto

### 💻 GitHub

[Repositório do projeto no GitHub](https://github.com/pree-to/skillmatch-web)

### 🌐 Site publicado

[SkillMatch - Site publicado](https://pree-to.github.io/skillmatch-web/)

### 📋 Trello

[Quadro do projeto no Trello](https://trello.com/invite/b/6ac3b1b528da530366a10591/ATTI7d27fcbee9b90e2ea6ad00fa3e3d9db3BDF49B66/meu-quadro-do-trello)

---

## ⚙️ Como executar

### Execução local

Para executar o projeto localmente:

1. Clone o repositório:

```bash
git clone https://github.com/pree-to/skillmatch-web.git
```

2. Entre na pasta do projeto:

```bash
cd skillmatch-web
```

3. Abra a pasta do projeto no Visual Studio Code.

4. Instale a extensão **Live Server**.

5. Abra o arquivo `index.html`.

6. Clique com o botão direito no arquivo e selecione **Open with Live Server**.

7. A aplicação será aberta no navegador.

### Execução online

Também é possível acessar diretamente a versão publicada:

[SkillMatch - Site publicado](https://pree-to.github.io/skillmatch-web/)

---

## 🧠 Funcionamento

O usuário preenche o formulário com as informações do seu perfil profissional.

São informados:

- Nome
- Área de interesse
- Experiência
- Habilidades

Após o envio do formulário, o sistema compara as habilidades do candidato com os requisitos das vagas disponíveis.

A aplicação calcula o percentual de compatibilidade de cada vaga e apresenta os resultados na tela.

Também são mostradas as habilidades que o candidato possui e as habilidades que ainda faltam para determinada oportunidade.

---

## 📊 Classificação das vagas

As vagas são classificadas de acordo com o percentual de compatibilidade:

- **Alta:** 80% a 100%
- **Média:** 50% a 79%
- **Baixa:** 0% a 49%

O sistema também identifica a vaga com maior compatibilidade com o perfil informado.

---

## 📦 Dados das vagas

As vagas utilizadas pela aplicação ficam armazenadas no arquivo:

```text
assets/data/vagas.json
```

Os dados são carregados utilizando a **Fetch API**.

Dessa forma, as vagas ficam separadas da estrutura HTML da aplicação.

---

## 💻 Organização do JavaScript

O JavaScript foi dividido em módulos para organizar melhor as responsabilidades da aplicação.

### `main.js`

Responsável pelo fluxo principal da aplicação, eventos do formulário e integração dos módulos.

### `motor.js`

Responsável pela lógica de análise das vagas e pelo cálculo da compatibilidade entre candidato e vaga.

### `ui.js`

Responsável pela atualização da interface e apresentação dos resultados.

### `dados.js`

Responsável pelos dados utilizados pela aplicação.

---

## 💾 LocalStorage

O projeto utiliza o `localStorage` do navegador para armazenar informações do candidato.

Os dados são convertidos para JSON antes de serem armazenados e podem ser recuperados posteriormente pela aplicação.

---

## 🔄 Fetch API

As vagas são carregadas através da Fetch API utilizando o arquivo:

```text
assets/data/vagas.json
```

A aplicação possui tratamento para o carregamento dos dados e para situações em que não seja possível obter as vagas.

---

## 🖥️ Manipulação do DOM

Os resultados da análise são gerados dinamicamente através de JavaScript.

As informações das vagas e os resultados da compatibilidade são apresentados na interface após a análise do formulário.

---

## 📱 Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela.

O projeto pode ser utilizado em:

- Computadores
- Tablets
- Celulares

---

## ♿ HTML semântico e acessibilidade

O projeto utiliza elementos semânticos do HTML, como:

- `header`
- `main`
- `section`
- `footer`
- `form`
- `fieldset`
- `label`

O formulário possui campos identificados e mensagens de orientação para auxiliar o usuário durante o preenchimento.

---

## 📋 Organização do projeto

O desenvolvimento foi organizado utilizando um quadro Kanban no Trello.

As atividades foram divididas nas seguintes etapas:

- **Backlog**
- **Em desenvolvimento**
- **Testes**
- **Concluído**

O quadro do projeto pode ser acessado através do link:

[Quadro do projeto no Trello](https://trello.com/invite/b/6ac3b1b528da530366a10591/ATTI7d27fcbee9b90e2ea6ad00fa3e3d9db3BDF49B66/meu-quadro-do-trello)

---

## 🌿 Git e versionamento

O projeto utiliza Git para controle de versão.

Foram utilizadas as seguintes branches:

### `main`

Branch principal contendo a versão final do projeto.

### `develop`

Branch utilizada para integração das alterações durante o desenvolvimento.

### `feature/finalizacao`

Branch utilizada para os ajustes e finalização do projeto.

A estrutura utilizada foi:

```text
main
│
└── develop
    │
    └── feature/finalizacao
```

O histórico de commits e branches pode ser consultado no repositório:

[Repositório do projeto no GitHub](https://github.com/pree-to/skillmatch-web)

---

## 🔮 Melhorias futuras

Algumas funcionalidades que poderiam ser implementadas em versões futuras:

- Filtros por salário
- Filtros por modalidade de trabalho
- Mais critérios para cálculo de compatibilidade
- Cadastro de novas vagas
- Sistema de autenticação
- Perfil completo do candidato
- Melhorias adicionais de acessibilidade
- Mais opções de recomendação de estudos

---

## 🤖 Uso de inteligência artificial

A inteligência artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

Ela foi utilizada principalmente para auxiliar na organização das ideias, identificação de problemas, revisão de código e desenvolvimento de algumas soluções.

As alterações foram analisadas, adaptadas e testadas durante o desenvolvimento da aplicação.

---

## 👨‍💻 Autor

**Venicio Aparecido de Assis**

Projeto acadêmico desenvolvido para avaliação de desenvolvimento web.