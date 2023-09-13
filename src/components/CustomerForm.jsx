import React, { useState, useEffect } from 'react';
import '../styles/CustomerForm.css';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedProducts: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'selectedProducts') {
      const updatedSelectedProducts = formData.selectedProducts.includes(value)
        ? formData.selectedProducts.filter(product => product !== value)
        : [...formData.selectedProducts, value];
      setFormData({
        ...formData,
        selectedProducts: updatedSelectedProducts,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://64cef5e1ffcda80aff5192db.mockapi.io/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Cadastro realizado com sucesso:', data);

        setFormData({
          name: '',
          email: '',
          selectedProducts: [],
        });

        alert('Cadastro realizado com sucesso! Você receberá informações da loja.');
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error);
      });
  };

  return (
    <div className="customer-form-container">
      <h2 className="form-title">Cadastro de Clientes</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="name">Nome:</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor="email">E-mail:</label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-checkbox-label">Produtos para receber promoções:</div>
        <div className="form-checkbox">
          <input
            type="checkbox"
            id="chocolatesEmBarra"
            name="selectedProducts"
            value="chocolatesEmBarra"
            checked={formData.selectedProducts.includes('chocolatesEmBarra')}
            onChange={handleChange}
          />
          <label className="form-checkbox-label" htmlFor="chocolatesEmBarra">Chocolates em barra</label>
        </div>
        <div className="form-checkbox">
          <input
            type="checkbox"
            id="bala"
            name="selectedProducts"
            value="bala"
            checked={formData.selectedProducts.includes('bala')}
            onChange={handleChange}
          />
          <label className="form-checkbox-label" htmlFor="bala">Bala</label>
        </div>
        <div className="form-checkbox">
          <input
            type="checkbox"
            id="biscoitos"
            name="selectedProducts"
            value="biscoitos"
            checked={formData.selectedProducts.includes('biscoitos')}
            onChange={handleChange}
          />
          <label className="form-checkbox-label" htmlFor="biscoitos">Biscoitos</label>
        </div>
        <div className="form-checkbox">
          <input
            type="checkbox"
            id="barrinhasDeChocolate"
            name="selectedProducts"
            value="barrinhasDeChocolate"
            checked={formData.selectedProducts.includes('barrinhasDeChocolate')}
            onChange={handleChange}
          />
          <label className="form-checkbox-label" htmlFor="barrinhasDeChocolate">Barrinhas de chocolate</label>
        </div>
        <button className="form-button" type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CustomerForm;

  












