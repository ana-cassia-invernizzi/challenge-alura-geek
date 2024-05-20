import { conectaApi } from "./conectarAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
  evento.preventDefault();

  const imagem = document.querySelector("[data-imagem]").value;
  const preco = document.querySelector("[data-preco]").value;
  const nome = document.querySelector("[data-nome]").value;

  try {
    await conectaApi.criaProduto(nome, preco, imagem);

  } catch (erro) {
    console.error("Não foi possível criar o produto", erro);
  }

  window.location.reload(true);
}

formulario.addEventListener("submit", evento => criarProduto(evento));
