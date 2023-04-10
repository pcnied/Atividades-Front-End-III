import criarProduto from "./features/produtos/criar-produtos";
import { Produto } from "./types";
import listaProdutos from "./database";

const mouse: Produto = {
    id: '123456789',
    nome: 'Mouse Razer',
    preco: 150.00,
    categoria: {
        nome: 'Periféricos',
        tags: ['NOVOS']
    },
    quantidade: 23,
    genero: 'ELETRONICOS'
}

const teclado: Produto = {
    id: '12345678',
    nome: 'Teclado Razer',
    preco: 200.00,
    categoria: {
        nome: 'Periféricos',
        tags: ['NOVOS']
    },
    quantidade: 23,
    genero: 'ELETRONICOS'
}

const monitor: Produto = {
    id: '1234567',
    nome: 'Monitor Red Dragon',
    preco: 1000.00,
    categoria: {
        nome: 'Periféricos',
        tags: ['NOVOS']
    },
    quantidade: 23,
    genero: 'ELETRONICOS'
}

const produto: Produto = {
    id: '123456',
    nome: 'Mouse Logitech',
    preco: 150.00,
    categoria: {
        nome: 'Periféricos',
        tags: ['NOVOS']
    },
    quantidade: 23,
    genero: 'ELETRONICOS'
}

criarProduto(mouse);
criarProduto(teclado);
criarProduto(monitor);
criarProduto(produto);

console.log(listaProdutos);


