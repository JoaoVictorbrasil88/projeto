import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
        
      <nav>
        <ul>
          <li className="menu-item"><Link to="/">Home</Link></li>
          <li className="menu-item"><Link to="/vitrine" target="_blank">Vitrine</Link></li>
          <li className="menu-item"><Link to="/sobre" target="_blank">Sobre</Link></li>
        </ul>
      </nav>
      
    </header>
  );
};
export default Header;




