import React, { useState, useEffect } from 'react';
import { getProdutosDaLoja } from './Api.jsx';
import ProductCard from './ProductCard';
import "../styles/Vitrine.css";
import { Link } from 'react-router-dom'; 

const Vitrine = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const nomeDaLoja = 'Doce_raro';
        const produtos = await getProdutosDaLoja(nomeDaLoja);
        setProducts(produtos);
        setLoading(false); 
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="vitrine-container">
      <h2 className="vitrine-title">Nossos Produtos!</h2>
      {loading ? (
        <p className="loading-text">Carregando...</p>
      ) : (
        <div>
          <div className="product-list">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link to="/cadastro" className="add-promotion-link">Cadastre-se para mais promoções!</Link>
        </div>
      )}
    </div>
  );
};

export default Vitrine;












