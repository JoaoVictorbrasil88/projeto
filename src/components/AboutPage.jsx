import React from 'react';
import minhaFoto from '../assets/fotojoao.jpeg';
import '../styles/AboutPage.css'; 

const AboutPage = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Sobre o Projeto</h2>
      <img src={minhaFoto} alt="minha foto" className="about-image" />
      <p className="about-text">
        Desde o início foi um projeto bem legal de fazer e implementar conforme foi passando cada módulo até chegar aqui.
        Estou muito feliz de poder ter aprendido tantas coisas no meio da tecnologia e hoje vejo que é algo que quero na minha carreira profissional.
        Aprendizados como no HTML, JavaScript e também com React que vou levar para minha vida.
      </p>
    </div>
  );
};

export default AboutPage;

