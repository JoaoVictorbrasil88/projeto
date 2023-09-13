export const submitProducts = async (products) => {
  try {
    const response = await fetch('https://63069afec0d0f2b8011f9944.mockapi.io/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(products)
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar os produtos.');
    }

    const data = await response.json();
    console.log('Produtos enviados com sucesso:', data);
    return data;
  } catch (error) {
    console.error('Erro ao enviar os produtos:', error);
    throw error;
  }
};

export const getProdutosDaLoja = async (nomeDaLoja) => {
  try {
    const response = await fetch(`https://64cef5e1ffcda80aff5192db.mockapi.io/produtos?loja=${nomeDaLoja}`);
    if (!response.ok) {
      throw new Error('Erro ao obter os produtos.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter os produtos:', error);
    return [];
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await fetch(`https://63069afec0d0f2b8011f9944.mockapi.io/produtos/${productId}`);
    if (!response.ok) {
      throw new Error('Erro ao obter o produto.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter o produto:', error);
    throw error;
  }
};
