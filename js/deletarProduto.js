import { conectaApi } from "./conectarAPI.js";

async function deletarProduto(id) {
  try {
    await conectaApi.deletarProduto(id);
  } catch (erro) {
    console.error("Erro ao deletar o produto", erro);
  }

  window.location.reload(true);
}

export { deletarProduto };