async function listaProdutos() {
  const conexao = await fetch("https://alura-geek-server-inky.vercel.app/produtos");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem) {
  const conexao = await fetch("https://alura-geek-server-inky.vercel.app/produtos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      preco: preco,
      imagem: imagem
    })
  });

  if (!conexao.ok) {
    throw new Error("Não foi possível enviar o produto")
  }

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function deletarProduto(id) {
  try {
    const resposta = await fetch(`https://alura-geek-server-inky.vercel.app/produtos/${id}`, {
      method: "DELETE",
    });

    if (!resposta.ok) {
      throw new Error("Erro ao deletar o produto");
    }

    console.log(`Produto com id ${id} foi deletado com sucesso.`);
  } catch (erro) {
    console.error("Erro ao deletar o produto", erro);
  }
}

export const conectaApi = {
  listaProdutos,
  criaProduto,
  deletarProduto
}