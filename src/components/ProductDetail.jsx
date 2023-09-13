import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProdutosDaLoja, getProductById } from './Api.jsx';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const nomeDaLoja = 'Doce_Raro';
        const produtos = await getProdutosDaLoja(nomeDaLoja);
        setProducts(produtos);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error('Erro ao obter o produto:', error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h2>Detalhes do Produto</h2>
          <div className="product-details">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export { ProductList, ProductDetail };
