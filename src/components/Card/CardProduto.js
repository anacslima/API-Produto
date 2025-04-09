import React from 'react';

const CardProduto = ({ produto }) => {
  return (
    <div className="product-card">
      <img src={produto.thumbnail} alt={produto.title} />
      <h2>{produto.title}</h2>
      <p><strong>Preço:</strong> ${produto.price}</p>
      <p>{produto.description}</p>
    </div>
  );
};

export default CardProduto;
