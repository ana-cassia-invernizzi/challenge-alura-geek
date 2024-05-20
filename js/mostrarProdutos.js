import { conectaApi } from "./conectarAPI.js";
import { deletarProduto } from "./deletarProduto.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, preco, imagem, id) {
  const produto = document.createElement("div");

  produto.className = "card";
  produto.innerHTML = `<div class="imagem">
  <img
    src="${imagem}">
</div>
<p>${nome}</p>
<div class="price">
  <p>$ ${preco}</p>
  <button  id=${id} data-deletar>
    <img src="assets/lixeira.svg">
  </button>
</div>`
  
  const botaoDeletar = produto.querySelector("[data-deletar]");

  botaoDeletar.addEventListener("click", () => deletarProduto(id));

  return produto;
}

async function listaProdutos() {
  try {
    const listaApi = await conectaApi.listaProdutos();

    listaApi.forEach(elemento => lista.appendChild(
      constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)));
    
  } catch {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
  }

}

listaProdutos();