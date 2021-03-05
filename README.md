
<h2  align="center">
<img  alt="cover-alt"  src=".github/cover.png" />
</h2>

  
<p  align="center">
<a  href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-codigo">Código</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-build">Build</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-licença">Licença</a>
</p>

  

## 💻 Projeto
  

Este projeto é uma aplicação NextJS com typescript implementando context API utilizando exemplo de aplicação de dark mode, para entendermos e praticarmos o uso do contextAPI
  

## 🧪 Tecnologias

  

  

O projeto foi desenvolvido usando as seguintes tecnologias:

  

- [Next.js](https://nextjs.org/)

  

- [React](https://reactjs.org)

  

- [TypeScript](https://www.typescriptlang.org/)

  

- [CSS Modules](https://github.com/css-modules/css-modules)

  

  

## 🚀 Código

  

Primeiramente em uma pasta que desejar crie um projeto nextjs

  

```bash

npx create-next-app meuprojeto

# or

yarn create next-app meuprojeto

```

  

Instale as seguintes dependências
  

```bash

yarn add typescript js-cookie clsx 

yarn add --dev @types/react @types/node

```  

Crie um arquivo **tsconfig.json** na raiz do projeto, verifique o conteúdo neste próprio repo com as configurações. Com isso nosso projeto estará rodando com typescript sendo assim lembrar das tipagens e utilizar arquivos com extensão .ts e .tsx.

  
Crie uma pasta na raiz do projeto chamada **src** e dentro dela moveremos as pastas **pages**  **styles**, e dentro da **src** vamos criar a seguinte estrutura que posteriormente criaremos mais arquivos.

```bash

-src

--components

--contexts

--pages

---_app.tsx

---_document.tsx

---index.tsx

--styles

---components

---pages

---Home.module.css

---global.css

```

  
Para executar o projeto rode o comando abaixo, esta é a base do mesmo para inicio do desenvolvimento.

```bash

$ yarn dev

```

  
  

## 🚀 Build

Para realizar o build basta executar o comando abaixo que com o package do next será feito o build e assim poderá ser feito deploy na hospedagem

```bash

$ yarn build

```

    

## 📝 Licença 
 

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

  ---


<p  align="center">Made with 💜 by <a  href="https://github.com/hog099"  target="_blank">Hudson Oliveira</a></p>