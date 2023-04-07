import { Produto } from "../../types";
import listaProdutos from "../../database";

function criarProduto(produto: Produto) {
    const nomeEncontrado = listaProdutos.some(
        (item) => item.nome === produto.nome
    );

    if (nomeEncontrado) {
        console.log('O produto já está cadastrado!');
    } else {
        listaProdutos.push(produto);
    }


}

export default criarProduto;