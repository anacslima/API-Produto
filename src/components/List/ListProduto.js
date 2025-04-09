import React, { useEffect, useState } from 'react';
import CardProduto from '../Card/CardProduto';
import axios from 'axios';

const ListProduto = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setProdutos(res.data.products);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <div className="lista">
      {produtos.map((produto) => (
        <CardProduto key={produto.id} produto={produto} />
      ))}
    </div>
  );
};

export default ListProduto;