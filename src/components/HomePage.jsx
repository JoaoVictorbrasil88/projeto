import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/HomePage.css'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-title">Bem-vindo à Loja de Doces</h1>
      <img
        src="/src/assets/DoceRaro.png"
        alt="Logo da loja"
        className="logo-image"
      />
      <Link to="/vitrine" className="go-to-vitrine">
        <button className="go-to-vitrine-button">Ir para a Vitrine</button>
      </Link>
    </div>
  );
};

export default HomePage;






