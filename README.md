# Memoteca

> Um CRUD completo em **Angular** para registrar pensamentos.
> *“Um CRUD completo em ANGULAR, mural para registrar seus pensamentos, Projeto Memoteca.”*

<p align="center">
  <img alt="Angular" src="https://img.shields.io/badge/Angular-CLI%2015.2.11-DD0031?logo=angular&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-★-3178C6?logo=typescript&logoColor=white">
  <img alt="HTML" src="https://img.shields.io/badge/HTML-★-E34F26?logo=html5&logoColor=white">
  <img alt="CSS" src="https://img.shields.io/badge/CSS-★-1572B6?logo=css3&logoColor=white">
  <img alt="Status" src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-8A2BE2">
</p>
---
<img src="src/assets/imagens/Screenshot_1.png" alt="Capa">
---

## 🗂️ Sumário

* [Pré-requisitos](#pré-requisitos)
* [Como executar localmente](#como-executar-localmente)
* [Funcionalidades](#funcionalidades)
* [Estrutura do projeto](#estrutura-do-projeto)
* [Tecnologias](#tecnologias)
* [Scripts úteis](#scripts-úteis)
* [Testes](#testes)
* [Build](#build)
* [Acesso / Deploy](#acesso--deploy)
* [Dúvidas comuns (FAQ)](#dúvidas-comuns-faq)
* [Contribuindo](#contribuindo)
* [Licença](#licença)

---

## 🔧 Pré-requisitos

* **Node.js** e **npm** instalados
* **Angular CLI** (o projeto usa comandos `ng ...`)
* Navegador atualizado

> **Observação:** o repositório informa o uso do **Angular CLI 15.2.11**.

---

## 🚀 Como executar localmente

```bash
# 1) Instale as dependências
npm install

# 2) Inicie o servidor de desenvolvimento
ng serve

# 3) Acesse no navegador
# http://localhost:4200/
```

> O Angular CLI faz o recarregamento automático ao salvar alterações.

---

## ✨ Funcionalidades

* CRUD em **Angular** para um **mural de pensamentos**
* Interface e comandos baseados no **Angular CLI**
* Organização típica de projeto Angular (componentes/módulos/serviços)

---

## 🧱 Estrutura do projeto

A listagem abaixo reflete os itens exibidos na raiz do repositório:

```
.vscode/
backend/
src/
.editorconfig
.gitignore
README.md
angular.json
package-lock.json
package.json
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```

---

## 🛠️ Tecnologias

* **Angular (CLI 15.2.11)**
* **TypeScript**, **HTML**, **CSS**
* Indícios de uso de **json-server** (via tópicos do repositório)

---

## 📜 Scripts úteis

Comandos padrão do Angular CLI (documentados pelo próprio Angular):

```bash
# servidor de desenvolvimento
ng serve

# build do projeto
ng build

# gerar artefatos (componentes/serviços/módulos etc.)
ng generate component|directive|pipe|service|class|guard|interface|enum|module
```
---

## 🧪 Testes

```bash
# testes unitários (Karma)
ng test

# testes end-to-end (exige pacote E2E configurado)
ng e2e
```

---

## 🏗️ Build

```bash
ng build
```

* Os artefatos são gerados em `dist/`.

---

## 🌐 Acesso / Deploy

* **Local (dev):** `http://localhost:4200/` após `ng serve`
* **URL pública:** o repositório não informa homepage no momento

---

## ❓ Dúvidas comuns (FAQ)

<details>
<summary><b>Preciso de uma API para o CRUD?</b></summary>
<p>
O repositório tem uma pasta <code>backend/</code> e indica <em>json-server</em> nos tópicos. Para instruções exatas (porta, endpoints, scripts), preciso ler os arquivos de <code>backend/</code> diretamente. Se você puder anexar o conteúdo ou liberar a visualização, adiciono aqui sem adivinhações.
</p>
</details>

<details>
<summary><b>Quais são as rotas e componentes?</b></summary>
<p>
O README público não lista rotas/componentes. Posso mapear tudo com precisão a partir do código em <code>src/app</code> assim que você compartilhar os arquivos.
</p>
</details>

<details>
<summary><b>Como personalizar estilos/tema?</b></summary>
<p>
Você pode editar os estilos globais em <code>src/styles.css</code> (ou arquivo equivalente definido no <code>angular.json</code>) e os estilos locais de cada componente.
</p>
</details>

---

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch: `git checkout -b feat/minha-feature`
3. Commit: `git commit -m "feat: descreva sua mudança"`
4. Push: `git push origin feat/minha-feature`
5. Abra um Pull Request
---

## 🪪 Licença
MIT
