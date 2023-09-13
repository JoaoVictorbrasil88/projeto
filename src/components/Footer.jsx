import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <p className="footer-text">
        Todos os direitos reservados &copy; {new Date().getFullYear()} | Desenvolvido por{' '}
        <a href="#" className="footer-link">
          João Victor Ferreira Brasil
        </a>
      </p>
    </footer>
  );
};

export default Footer;
