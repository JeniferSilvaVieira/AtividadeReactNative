import { Children, createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function ContextCarrinho() {

    const [carrinho, setCarrinho] = useState([]);

    function adicionarProduto(produto) {
        setCarrinho((anterior) = [...anterior, produto])
    }

    return (
        <CarrinhoContext.Provider value = {{carrinho, adicionarProduto}}>
            {Children}
        </CarrinhoContext.Provider>
    )
}

export function useCarrinho() {
    return useContext(CarrinhoContext);
}
