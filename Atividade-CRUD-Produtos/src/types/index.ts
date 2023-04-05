type Tag = 'BLACKFRIDAY' | 'NOVOS' | 'USADOS';

type Genero = 'ELETRONICOS' | 'ELETRODOMESTICOS' | 'GAMER';

interface Categoria {
    nome: string;
    tags: Tag[];
}

interface Produto {
    id: string;
    nome: string;
    preco: number;
    categoria: Categoria;
    quantidade: number;
    genero: Genero;
}

export {
    Categoria,
    Genero,
    Produto,
    Tag
    
}