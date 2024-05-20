import { conectaApi } from "./conectarAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
  evento.preventDefault();

  const imagem = document.querySelector("[data-imagem]").value;
  const preco = document.querySelector("[data-preco]").value;
  const nome = document.querySelector("[data-nome]").value;

  try {
    await conectaApi.criaProduto(nome, preco, imagem);

    window.location.reload(true);
  } catch (e) {
    alert(e);
  }

}

formulario.addEventListener("submit", evento => criarProduto(evento));